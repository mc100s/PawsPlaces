const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  name: String,
  location: {
    type: String,
    required: false
  },
  description: String,
  role:{
    type: String,
    default: "User"
    // mais tarde podemos adicionar ADMIN
  },
  picture: {
    type: String,
    default: "imagemACriar",

  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
