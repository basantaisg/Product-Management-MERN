import mongoose from 'mongoose';

export const connectDB = async (URL) => {
  try {
    const conn = await mongoose.connect(URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error Occurred: ${error} `);
    process.exit(1); // 1 means failure but 0 means fine
  }
};
