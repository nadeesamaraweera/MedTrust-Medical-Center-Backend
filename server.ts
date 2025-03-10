import express from 'express';
import departmentRoutes from "./routes/departmentRoute";
import doctorRoutes from "./routes/doctorRoute";
import nurseRoutes from "./routes/nurseRoute";
import patientRoutes from "./routes/patientRoute";
import medicalReportRoutes from "./routes/medicalReportRoute";


const app = express();

app.use(express.json());

app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})

app.use('/department',departmentRoutes);
app.use('/doctor',doctorRoutes);
app.use('/nurse',nurseRoutes);
app.use('/patient',patientRoutes);
app.use('/medicalReport',medicalReportRoutes);


app.listen(3003, (err=>{
    console.log("Server running on port 3003");
}));

app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})
