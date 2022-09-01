import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
    walk: { type: Boolean, required: true, default: false },
    run: { type: Boolean, required: true, default: false },
    cycle: { type: Boolean, required: true, default: false },
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  followers: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
  ],
  following: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
  ],
});

UserSchema.pre('save', function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }
          console.log(hash);
          user.password = hash;
          console.log(user.password);
          next();
        });
      }
    });
  } else {
    return next();
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
