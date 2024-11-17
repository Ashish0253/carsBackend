const express = require("express");
const {
  createCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/carController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, createCar).get(protect, getCars);

router
  .route("/:id")
  .get(protect, getCarById)
  .put(protect, updateCar)
  .delete(protect, deleteCar);

module.exports = router;
