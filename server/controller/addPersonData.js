const Person = require("../model/Person");

//create
const addPersonData = async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save(); //save the newPerson to the database
    console.log("Data saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = addPersonData;
