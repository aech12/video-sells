{
  title: ""
  href: String,
  date: Date,
  girls: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Girl",
  }],
  likes: Number,
  picture: String
}