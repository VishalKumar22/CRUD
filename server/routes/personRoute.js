const express = require("express");
const addPersonData = require("../controller/addPersonData");
const {
  getPersonData,
  getDataByParams,
} = require("../controller/getPersonData");
const updatePersonData = require("../controller/updatePersonData");
const deletePersonData = require("../controller/deletePersonData");
const router = express.Router();

router.post("/person", addPersonData);
router.get("/getData", getPersonData);
router.get("/getData/:work", getDataByParams);
router.put("/person/:id", updatePersonData);
router.delete("/person/:id", deletePersonData);

module.exports = router;
