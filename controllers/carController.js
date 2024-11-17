const asyncHandler = require("express-async-handler");
const Car = require("../models/Car");

const createCar = asyncHandler(async (req, res) => {
  const { title, description, tags } = req.body;
  const images = req.body.images.split(",");

  const car = new Car({
    user: req.user._id,
    title,
    description,
    images,
    tags: tags.split(","),
  });

  const createdCar = await car.save();
  res.status(201).json(createdCar);
});

const getCars = asyncHandler(async (req, res) => {
  const cars = await Car.find({ user: req.user._id });
  res.json(cars);
});

const getCarById = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (car) {
    res.json(car);
  } else {
    res.status(404);
    throw new Error("Car not found");
  }
});

const updateCar = asyncHandler(async (req, res) => {
  const { title, description, tags } = req.body;
  const images = req.body.images.split(",");

  const car = await Car.findById(req.params.id);

  if (car) {
    car.title = title || car.title;
    car.description = description || car.description;
    car.images = images || car.images;
    car.tags = tags.split(",") || car.tags;

    const updatedCar = await car.save();
    res.json(updatedCar);
  } else {
    res.status(404);
    throw new Error("Car not found");
  }
});

const deleteCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);

  if (car) {
    await Car.deleteOne({ _id: req.params.id });
    res.json({ message: "Car removed" });
  } else {
    res.status(404);
    throw new Error("Car not found");
  }
});

module.exports = { createCar, getCars, getCarById, updateCar, deleteCar };
