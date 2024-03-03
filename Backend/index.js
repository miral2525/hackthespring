const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = require('./Database');
const patients = db.patients;
const doctors = db.doctors;
const patientshistory = db.patientmedicalhistory;
const patientvital = db.patientvital;
const patientsymptoms = db.patientsymptoms;
const feedbackbydoctor = db.feedbackbydoctor;


app.post("/adddoctors",async (req,res)=>{

    const {name,age,password} = req.body;
    const doctor = new doctors({name,age,password});
    await doctor.save();
    res.send(doctor);
});
app.post("/addpaitents",async (req,res)=>{

    const {name,age,gender,password,contactno} = req.body;
    const patient = new patients({name,age,password,gender,contactno});
    await patient.save();
    res.send(patient);
});

app.post("/addpatientvitals",async (req,res)=>{
    const {SystolicBP,DiastolicBP,BloodSugar,Temperature,name} = req.body;
    const patientvitals = new patientvital({SystolicBP,DiastolicBP,BloodSugar,Temperature,name});
    await patientvitals.save();
    res.send(patientvitals);
});
app.post("/addpatientmedicalhistory",async (req,res)=>{
    const {Conditions,Medications,Allergies,Familyhistory,name} = req.body;
    const patientmedicalhistory = new patientshistory({Conditions,Medications,Allergies,Familyhistory,name});
    await patientmedicalhistory.save();
    res.send(patientmedicalhistory);
});
app.post('/addpatientsymptoms',async(req,res)=>{
    const {symptoms,name} = req.body;
    const patientsymptom = new patientsymptoms({symptoms,name});
    await patientsymptom.save();
    res.send(patientsymptom);
});


app.post("/patient",async (req,res)=>{

    const {name} = req.body;
    const patientinfo = await patients.find({name: name});
    res.send(patientinfo);
});


app.get("/addpatientvitals/:name",async (req,res)=>{
    const name = req.params.name;
    const patientvitals = await patientvital.find({name:name});
    res.send(patientvitals);

});
app.get("/addpatientmedicalhistory/:name",async (req,res)=>{
    const name = req.params.name;
    const patientmedicalhistory = await patientshistory.find({name:name});
    res.send(patientmedicalhistory);
});
app.get('/addpatientsymptoms/:name',async(req,res)=>{
    const name = req.params.name;
    const patientsymptom = await patientsymptoms.find({name:name});
    res.send(patientsymptom);
});

// app.post("/addfeedback",async(req,res)=>{
//     const {Feedback} = req.body;
//     const feeback = new feedbackbydoctor({Feedback:Feedback});
//     await feeback.save();
//     res.send(feeback);
// });
// app.get("/getfeedback",async(req,res)=>{
//     const {}
// })







app.listen(port, ()=>{
    mongoose.connect("mongodb://localhost:27017/Backend", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>
    {
        console.log("connected to database");
    })
   
})