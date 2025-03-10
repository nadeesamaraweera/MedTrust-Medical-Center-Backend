# **MedTrust - Medical Center Management System** 🏥💊

MedTrust is a comprehensive **Medical Center Management System** designed to optimize healthcare facility operations. It enables efficient management of doctors, nurses, patients, medical reports, medicines, appointments, and payments. The system ensures **secure authentication**, **data management**, and **seamless patient-doctor interactions**, making it an essential tool for modern healthcare services.

## **Features** 🚀

- **Doctor & Nurse Management** – Store and manage healthcare professionals' details.
- **Patient Management** – Maintain patient records, medical history, and appointments.
- **Appointments System** – Schedule and track doctor appointments efficiently.
- **Medical Reports** – Store, update, and retrieve patient medical reports securely.
- **Medicine Inventory** – Manage and track available medicines and stock details.
- **Payments & Billing** – Secure payment processing for medical services.
- **Authentication & Authorization** – JWT-based secure login for different user roles.

## **Tech Stack** 🛠

### **Frontend**
- **TypeScript** – Strongly typed JavaScript for better maintainability.
- **React.js** – Component-based UI framework for an interactive experience.
- **Bootstrap** – Responsive and user-friendly design.

### **Backend**
- **Node.js & Express.js** – Fast and scalable backend framework.
- **MySQL** – Efficient relational database management.
- **Prisma ORM** – Database querying with an intuitive and easy-to-use API.
- **JWT (JSON Web Token)** – Secure authentication and authorization.
- **Postman** – API testing and documentation.

### **Project Structure** 📂

```
/medtrust-medical-center
│── /src
│   ├── /model                  # Database Models (Doctor, Patient, Appointment, etc.)
│   ├── /store                  # State Management (Redux/Context API)
│   ├── /routes                 # API Routes
│   ├── /controllers            # Business Logic & API Controllers
│   ├── /middlewares            # Authentication, Validation, Error Handling
│── /prisma                     # Prisma Database Schema & Migrations
│── package.json                # Dependencies & Scripts
│── README.md                   # Project Documentation
│── .env                        # Environment Variables
```

## **Installation & Setup** ⚙️

### **1. Clone the Repository**
```sh
git clone https://github.com/nadeesamaraweera/MedTrust-Medical-Center-Backend.git
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Setup Environment Variables**
Create a `.env` file and add the necessary configuration:
```env
DATABASE_URL=mysql://root:password@localhost:3306/medtrust_db
JWT_SECRET=your_secret_key
```

### **4. Run Database Migrations**
```sh
npx prisma migrate dev
```

### **5. Start the Development Server**
```sh
npm run dev
```

### **6. Access the API**
Once the server is running, the API will be available at:
`http://localhost:5000/api`


## **Frontend Repository** 💻
The frontend code for MedTrust is available in a separate repository:
[MedTrust Frontend Repository](https://github.com/nadeesamaraweera/MedTrust-Medical-Center-Frontend.git)

## **License** 📚
This project is licensed under the [MIT](License.txt) license.
