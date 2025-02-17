import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Define Schema and Model
const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const FormData = mongoose.model('FormData', FormDataSchema);

// API Route to Handle Form Submission
app.post('/api/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newFormData = new FormData({ name, email, message });
        await newFormData.save();
        res.json({ success: true, message: 'Data saved successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
