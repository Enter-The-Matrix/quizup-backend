import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim:true
    },
    category: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
      trim:true

    },
    answer: {
      type: String,
      required: true,
      trim:true

    },
    level: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Question = mongoose.model("Question", questionSchema);
