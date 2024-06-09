const Person = require("../model/Person");
const updatePersonData = async (req, res) => {
  try {
    const personID = req.params.id;
    const updatedData = req.body;
    console.log(updatedData, "updatedData");
    const response = await Person.findByIdAndUpdate(personID, updatedData, {
      new: true, // Return the updated Document
      runValidators: true, //Run mongoose validation
    });

    if (!response) {
      return res.status(404).json("Person not found");
    }

    console.log("Data Updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};
module.exports = updatePersonData;
