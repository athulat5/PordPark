require('dotenv').config()


const express =require("express")
const mongoose = require('mongoose')
const cors = require('cors');
const adminroutes = require('./routes/adminRoutes');
const staffRoutes = require('./routes/staffRoutes');
const industry1Routes = require('./routes/industry1Routes');
const industryRoutes = require('./routes/industryRoutes');
const { uploadStaff, uploadGeneral } = require('./config/multerConfig');


const path = require('path');

const app =express()

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow your React app's origin
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

//middleware
app.use(express.json());

app.use('/uploads/staff', express.static(path.join(__dirname, 'uploads/staff')));
app.use('/uploads/industry', express.static(path.join(__dirname, 'uploads/industry')));


// app.use((req, res, next) =>{
// console.log(req.path, req.method)
// next()
// })

//routes
app.use('/api/admin',adminroutes)
app.use('/api/staff', staffRoutes);
app.use('/api/industry1', industry1Routes(uploadGeneral));
app.use('/api/industry', industryRoutes(uploadGeneral));


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  //listen for request
app.listen(process.env.PORT, () => {
  console.log("Connected to db & Listening on port",process.env.PORT)
})
})
.catch((error) =>{ 
  console.log(error)
})

