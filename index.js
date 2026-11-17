
import express from "express";
import mongoose from "mongoose";

const app = express ()
app.use(express.json());
const port = 3000

// When we run mongo container, its name must be mongo as shown below 
const mongoURI = 'mongodb://mongo:27017/mydb';

mongoose.connect (mongoURI)
    .then (() => console.log ('MongoDB is connected Successfully...!'))
    .catch ((err) => console.error ('MongoDB connection error', err))

 // Define a simple schema and model
const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', ItemSchema);


app.get ('/', (req, res) => {
    res.send ('Hello from NodeJs...!')
})

// POST route to save data
app.post('/items', async (req, res) => {
  try {
    const newItem = await Item.create({ name: req.body.name });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen (port, () => {
    console.log (`NodeJS app is listening # ${port}`)
})

