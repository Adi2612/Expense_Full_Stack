const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/QC', { useNewUrlParser: true });




// setInterval(function(){ console.log(mongoose.connection.readyState);
//  }, 3000);


console.log(mongoose.connection.readyState);

const db = mongoose.connection;

const UserSchema = new Schema({
  userName: String,
  name: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  emailId: String,
});

const User = mongoose.model('User', UserSchema)


const ExpenseSchema = new Schema({
  userName: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  type: String,
  amount: Number,
  amountPaid: Number,
  admin_status: {type: String, enum: ['rejected', 'accepted', 'pending']},
  subHead: String
});

const Expense = mongoose.model('Expense', ExpenseSchema)

// Expense.find({userName : "adi2612"}).exec((err, expenses) => {
//     console.log(expenses);
//   });

// var myobj = {
//  userName: "adi2612",
//   type: "Travel",
//   amount: 255,
//   amountPaid: 0,
//   admin_status: "pending",
//   subHead: "GandhiNagar"
// }  

// // const noti = new Expense(myobj);
// // noti.save();
// console.log("okay");
//   // Expense.insert(myobj, function(err, res) {
//   //   if (err) throw err;
//   //   console.log("1 document inserted");
//   //   db.close();
//   // });


module.exports.Expense = Expense;
module.exports.User = User;