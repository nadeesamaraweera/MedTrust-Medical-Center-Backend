import express from 'express';
import departmentRoutes from "./routes/departmentRoute";
import doctorRoutes from "./routes/doctorRoute";
import nurseRoutes from "./routes/nurseRoute";
import patientRoutes from "./routes/patientRoute";
import medicalReportRoutes from "./routes/medicalReportRoute";
import appointmentRoutes from "./routes/appointmentRoute";
import medicineRoutes from "./routes/medicineRoute";
import paymentRoutes from "./routes/paymentRoute";
import authRoutes from "./routes/authRoute";


const app = express();

app.use(express.json());

app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})

app.use('/auth',authRoutes);
app.use('/department',departmentRoutes);
app.use('/doctor',doctorRoutes);
app.use('/nurse',nurseRoutes);
app.use('/patient',patientRoutes);
app.use('/medicalReport',medicalReportRoutes);
app.use('/appointment',appointmentRoutes);
app.use('/medicine',medicineRoutes);
app.use('/payment',paymentRoutes);



app.listen(3000, (err=>{
    console.log("Server running on port 3000");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})
