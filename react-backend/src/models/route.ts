import mongoose from 'mongoose';

const RouteSchema = new mongoose.Schema({
    discipline: { type: String, required: true},
    title: { type: String, required: true},
    description: { type: String, required: true},
    startTime: { type: String, required: true},
    startPoint: { type: String, required: true},
    endPoint: { type: String, required: true},
    img: {
      data: Buffer,
      contentType: String,
    },
    participants: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      },
    ],
});


export const Route = mongoose.model('Route', RouteSchema);