import { Category } from "@/models/Category";
import mongoose from "mongoose";

export async function GET() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(await Category.find());
  } catch (error) {
    console.error("Error in GET request:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
