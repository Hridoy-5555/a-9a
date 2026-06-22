const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-live-site.web.app'], // Add your deployed Vercel URL
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected Ready for DocAppoint'))
  .catch(err => console.error('❌ Database Connection Error:', err));

// --- Database Schemas ---

const DoctorSchema = new mongoose.Schema({
  id: String,
  name: String,
  specialty: String,
  image: String,
  experience: String,
  availability: [String],
  description: String,
  hospital: String,
  location: String,
  fee: Number,
  rating: { type: Number, default: 5 }
});
const Doctor = mongoose.model('Doctor', DoctorSchema);

const AppointmentSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  doctorName: { type: String, required: true },
  patientName: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  appointmentDate: { type: String, required: true },
  appointmentTime: { type: String, required: true }
});
const Appointment = mongoose.model('Appointment', AppointmentSchema);

// --- Auth Middleware ---
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send({ message: 'Unauthorized access' });
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send({ message: 'Forbidden access' });
    req.user = decoded;
    next();
  });
};

// --- API Routes ---

// JWT Token Generation
app.post('/api/jwt', (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.send({ token });
});

// GET: 3 Top Rated Doctors for Home Page
app.get('/api/top-doctors', async (req, res) => {
  const doctors = await Doctor.find().sort({ rating: -1 }).limit(3);
  res.send(doctors);
});

// GET: All Doctors (With Optional Search Filter by Doctor Name)
app.get('/api/doctors', async (req, res) => {
  const { search } = req.query;
  let query = {};
  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }
  const doctors = await Doctor.find(query);
  res.send(doctors);
});

// GET: Specific Doctor Details
app.get('/api/doctors/:id', async (req, res) => {
  const doctor = await Doctor.findOne({ id: req.params.id });
  if (!doctor) return res.status(404).send({ message: 'Doctor not found' });
  res.send(doctor);
});

// POST: Book an Appointment
app.post('/api/appointments', verifyToken, async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    const saved = await newAppointment.save();
    res.status(201).send(saved);
  } catch (error) {
    res.status(400).send({ message: 'Failed to book appointment' });
  }
});

// GET: Specific User's Bookings
app.get('/api/my-bookings', verifyToken, async (req, res) => {
  if (req.user.email !== req.query.email) {
    return res.status(403).send({ message: 'Forbidden access profile mismatch' });
  }
  const bookings = await Appointment.find({ userEmail: req.query.email });
  res.send(bookings);
});

// PUT: Update Existing Appointment (Controlled fields)
app.put('/api/appointments/:id', verifyToken, async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      { 
        patientName: req.body.patientName,
        gender: req.body.gender,
        phone: req.body.phone,
        appointmentDate: req.body.appointmentDate,
        appointmentTime: req.body.appointmentTime
      },
      { new: true }
    );
    res.send(updated);
  } catch (error) {
    res.status(400).send({ message: 'Failed to update structural information' });
  }
});

// DELETE: Cancel/Delete Appointment
app.delete('/api/appointments/:id', verifyToken, async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.send({ message: 'Appointment deleted successfully!' });
});

app.get('/', (req, res) => res.send('DocAppoint API Operational Server running.'));

app.listen(PORT, () => console.log(`🚀 Server navigating safely on port ${PORT}`));
// Server Fallback Route for Invalid Endpoints
app.use((req, res) => {
  res.status(404).send({ 
    errorCode: "API_ROUTE_NOT_FOUND", 
    message: "The requested backend asset allocation structural target does not exist." 
  });
});