const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// for using locally
// mongoose.connect('mongodb://localhost:27017/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

// for using EC2
mongoose.connect('mongodb://database/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

// schema for reviews

const reviewSchema = new mongoose.Schema({
  propertyId: Number,
  reviewId: Number,
  propertyName: String,
  username: String,
  avatar: String,
  review: String,
  dayPosted: Date,
  rating: {
    cleanliness: Number,
    communication: Number,
    accuracy: Number,
    checkIn: Number,
    location: Number,
    value: Number,
  },
  response: {
    hostname: String,
    avatar: String,
    response: String,
    dayCommented: Date,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

// probably want to use saveData for when we get to backend side

// var saveData = (data) => {
//   // console.log('getting to saveData');
//   // console.log(data);
//   for (var i = 0; i < data.length; i++) {
//     var review = new Review({
//       username: data[i].username
//     });
//     // console.log('getting to iteration');
//     review.save();
//   }
// };

// module.exports.saveData = saveData;
