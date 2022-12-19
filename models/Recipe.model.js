const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    unique: true,
    require: [true, 'Title is mandatory. Please add a title.']
  },
  level: {
    type: String,
    enum: {
      values: [ 'Easy Peasy', 'Amateur Chef', 'UltraPro Chef'],
    }    
  },
  ingredients: {
    type: [String],
  },
  cuisine: {
    type: String,
    require: true,
  },
  dishType: {
    type: String,
    enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert'],      
  },
  image: {
    type: String,
    default: " https://images.media-allrecipes.com/images/75131.jpg " 
  },
  duration: {
    type: String,
    min: 0,
  },
  creator: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.today,
  }

});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
