const Person = require("../model/Person");

const deletePersonData = async (req, res) => {
  try {
    const personId = req.params.id;
    // console.log(personId);
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json("Person not found");
    }
    console.log("Deleted successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = deletePersonData;
