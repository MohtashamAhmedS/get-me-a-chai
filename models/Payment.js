import mongoose from 'mongoose'
const { Schema, model } = mongoose

const PaymentSchema = new Schema({
  name: String,
  to_user: String,
  oid: String,
  message: String,
  amount: Number,
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.models.Payment || model('Payment', PaymentSchema)
