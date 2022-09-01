import mongoose from "mongoose"



const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: { type: String, required: true },
  preferences: {
    walk: {type: Boolean, required: true, default: false},
    run: {type: Boolean, required: true, default: false},
    cycle: {type: Boolean, required: true, default: false}
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  followers: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  }],
  following: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}],

});

const User = mongoose.model("User", UserSchema);

export default User;