const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 8001;
const cloudinary = require('cloudinary').v2;
app.use(cors());
app.use(express.json());

cloudinary.config({ 
  cloud_name: 'dhtkzyncr', 
  api_key: '148961475255687', 
  api_secret: '6BPN3SlTSgYhr6Y_FEVW5ecnyos'
});

mongoose.connect('mongodb+srv://Trapti:tkg4002@cluster0.a97rcaf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


const birdSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});


const Bird = mongoose.model('Bird', birdSchema);

app.get('/birds', async (req, res) => {
  try {
    const birdData = await Bird.find();
    res.json(birdData);
  } catch (error) {
    console.error('Error fetching bird data:', error);
    res.status(500).json({ error: 'Error fetching bird data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});