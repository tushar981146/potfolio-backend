// External Module
const express = require("express");
const formRouter = express.Router();

// Local Module
const formDataControllers = require("../controllers/formDataControllers");
formRouter.get("/", formDataControllers.giveFormData);
formRouter.post("/", formDataControllers.addFormData);
formRouter.get("/uniqueId", formDataControllers.uniqueId);
formRouter.post("/uniqueId", formDataControllers.specificMsg);

module.exports = formRouter;
