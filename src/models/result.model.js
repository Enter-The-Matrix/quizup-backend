import mongoose, { Schema } from "mongoose";

const resultSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    correctQuestionsIds: {
      type: [String],
      required: true,
    },
    totalQuestionIds: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Result = mongoose.model("Result", resultSchema);

module.exports = ExamResult;
