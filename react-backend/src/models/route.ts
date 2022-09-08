import mongoose from "mongoose";

const RouteSchema = new mongoose.Schema({
  host_id: { type: String, required: true },
  discipline: { type: String, required: true },
  duration: { type: String, required: true },
  distance: { type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  startTime: { type: String, required: true },
  startPoint: { type: String, required: true },
  endPoint: { type: String, required: true },
  img: { type: String, required: true },
  participants: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
  ],
});

export const Route = mongoose.model("Route", RouteSchema);
