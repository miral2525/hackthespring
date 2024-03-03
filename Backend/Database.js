const mongoose = require('mongoose');


const doctorsschema = mongoose.Schema({
    name: String,
    age: Number,
    password: String,
});
const patientsschema = mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    contactno: Number,
    password: String, 
});
const patientvitalschema = mongoose.Schema({

    SystolicBP: Number,
    DiastolicBP: Number,
    BloodSugar:Number,
    Temperature:Number,
    name: String,

});
const patientmedicalhistoryschema = mongoose.Schema({
    Conditions: String,
    Medications: String,
    Allergies: String,
    Familyhistory: String,
    name: String,
});
const patientsymptomsschema = mongoose.Schema({
    symptoms: String,
    name: String,

});
const feebackbydoctorschema = mongoose.Schema({
    Feedback: String,
})




const doctors = mongoose.model('doctors', doctorsschema);
const patients = mongoose.model('patients', patientsschema);
const patientvital=mongoose.model('patientvital', patientvitalschema);
const feedbackbydoctor = mongoose.model('feedbackbydoctor', feebackbydoctorschema);
const patientmedicalhistory = mongoose.model('patienthistory',patientmedicalhistoryschema);
const patientsymptoms = mongoose.model('patientsymptoms', patientsymptomsschema);
module.exports = {doctors,patients,patientmedicalhistory,patientvital,patientsymptoms,feedbackbydoctor};
