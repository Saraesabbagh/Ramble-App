import User from "../models/user"
import test from "ava"
import mongoose from "mongoose"

test("User", t => {
  const user = new User({
    firstName: "Someone",
    lastName: "Surname",
    email: "example@email.com",
    password: "mypassword",
    preferences: {
      walk: true,
      run: true,
      cycle: true
    }
  })
  t.is(user.firstName, "Someone")
  t.is(user.lastName, "Surname")
  t.is(user.email, "example@email.com")
  t.is(user.password, "mypassword")
  t.is(user.preferences.walk, true)
  t.is(user.preferences.run, true)
  t.is(user.preferences.cycle, true)
})

test("User is saved", async t => {
  mongoose.connect("mongodb://0.0.0.0/Ramble")
  await mongoose.connection.collections.users.drop();
  
  const user = new User({
    firstName: "Someone",
    lastName: "Surname",
    email: "example@email.com",
    password: "mypassword",
    preferences: {
      walk: true,
      run: true,
      cycle: true
    }
  })
  await user.save();
  const users = await User.find({})
  t.is(users[0].firstName, "Someone")
  t.is(users.length, 1)

  mongoose.connection.close(true, () => {
    console.log("Connection Closed")
  });
})