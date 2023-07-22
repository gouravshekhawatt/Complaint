const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
   
    division: { // New field: division
      type: String,
      required: true
    },
   
    location: { // New field: location
      type: String,
      required: true
      
    },
    gender: { // New field: location
      type: String,
      required: true,
    },
    isadmin: {
      // For future
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: true,
      default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F05%2F17%2F79%2F88%2F360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg&tbnid=SCVcMOWuT1e_7M&vet=12ahUKEwiHjd27-J2AAxXeo2MGHdXHB7gQMygEegUIARD3AQ..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522user%2Bicon%2522&docid=JlYW2A9hErUsWM&w=407&h=360&q=user%20icon%20pic&ved=2ahUKEwiHjd27-J2AAxXeo2MGHdXHB7gQMygEegUIARD3AQ",
    },
  },
  {
    timestamps: true,
  }
);

// bycrypt for password safe
userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

// method to decrypt password

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;