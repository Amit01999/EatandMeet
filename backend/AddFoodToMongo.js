import mongoose from 'mongoose';
import foodModel from './models/foodModel.js';
import { fooddata } from './fooddata.js';

// Function to add multiple food objects to the collection
const addFoodItems = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(
      'mongodb+srv://Shopno:Shopno24@cluster1.npnsgne.mongodb.net/EatAndMeet?retryWrites=true&w=majority&appName=Cluster1',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    // Insert the food array into the collection
    const result = await foodModel.insertMany(fooddata);

    console.log('Food items added successfully:', result);
  } catch (error) {
    console.error('Error adding food items:', error);
  } finally {
    // Close the connection after the operation is complete
    await mongoose.connection.close();
  }
};

// Call the function
addFoodItems();
