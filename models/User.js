import mongoose from 'mongoose'
const { Schema, model } = mongoose

const UserSchema = new Schema({
  name: String,
  email: String,
  username: String,
  profilepic: String,
  coverpic: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.models.User || model('User', UserSchema)
