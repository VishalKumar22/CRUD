const express = require("express");
const app = express();
const Person = require("./model/Person");
const MenuItem = require("./model/MenuItem");
const router = require("./routes/personRoute");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
require("dotenv").config();
const connectDB = require("./config/db"); //2nd step(Import database connection functio
const port = process.env.PORT || 8080;

connectDB(); //2nd step(Connect to MongoDB)
app.use(express.json());

//middleware
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request made to :${req.originalUrl}`
  );
  next(); //Move on the next phase
};

app.use(logRequest);

// passport.use(
//   new LocalStrategy(async (USERNAME, PASSWORD, done) => {
//     try {
//       const user = await Person.findOne({ username: USERNAME });
//       if (!user) {
//         return done(null, false, { message: "Incorrect username" });
//       }
//       const isPasswordMatch = user.password === PASSWORD ? true : false;
//       if (isPasswordMatch) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: "Incorrect Password" });
//       }
//     } catch (error) {
//       return done(error);
//     }
//   })
// );

// app.use(passport.initialize());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
