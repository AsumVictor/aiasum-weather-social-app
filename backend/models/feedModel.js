const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedsSchema = new Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: false,
      },
    ],
    content_type: {
      type: String,
      enum: ["text", "images"],
      required: true,
    },
    caption: {
      type: String,
      required: false,
    },
    reaction: {
      type: String,
      enum: ["like", "love", "care", "funny", "surprise", "sad", "annoyed"],
      required: false,
    },
    comments: [
      {
        user: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
      {
        timestamps: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.Model("Feed", FeedsSchema);
