import { PrismaClient } from "@prisma/client";
import Payment from "../model/Payment";

const prisma = new PrismaClient();

export async function PaymentCreate(paymentData: Payment) {
    try {
        const newPayment = await prisma.payment.create({
            data: {
                paymentId: paymentData.paymentId.toString(),
                paymentDate: paymentData.paymentDate,
                patientId: paymentData.patientId,
                paymentDetails: {
                    create: paymentData.medicineItems.map(medicine => ({
                        medicineId: medicine.medicineId,
                        getQty: Number(medicine.getQty),
                        price: String(medicine.price),
                        totalPrice: String(medicine.totalPrice),
                        discount: String(medicine.discount),
                        balance: String(medicine.balance),
                    }))
                }
            },
            include: { paymentDetails: true }
        });

        for (const medicine of paymentData.medicineItems) {
            const existingMedicine = await prisma.medicine.findUnique({
                where: { medicineId: medicine.medicineId }
            });

            if (!existingMedicine) {
                throw new Error(`Medicine with Id ${medicine.medicineId} not found`);
            }

            // Ensure quantity_in_stock is treated as a number
            const newQuantity = Number(existingMedicine.quantity_in_stock) - Number(medicine.getQty);

            if (newQuantity < 0) {
                throw new Error(`Not enough stock for item code ${medicine.medicineId}`);
            }

            await prisma.medicine.update({
                where: { medicineId: medicine.medicineId },
                data: { quantity_in_stock: newQuantity } // Ensure it's a number
            });
        }

        console.log("Payment added successfully:", newPayment);
        return newPayment;
    } catch (err) {
        console.error("Error creating payment", err);
        throw err;
    }
}
