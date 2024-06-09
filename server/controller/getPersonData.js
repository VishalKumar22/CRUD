const Person = require("../model/Person");

//get Person data
const getPersonData = async (req, res) => {
  try {
    const getData = await Person.find();
    res.send(getData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//get data by params
const getDataByParams = async (req, res) => {
  try {
    const workType = req.params.work;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json("Invalid Work Type");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getPersonData, getDataByParams };
