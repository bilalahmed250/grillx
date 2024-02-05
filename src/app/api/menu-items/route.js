import { MenuItem } from "@/models/MenuItem";
import mongoose from "mongoose";

export async function GET() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(await MenuItem.find());
  } catch (error) {
    console.error("Error in GET request:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
