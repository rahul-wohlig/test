const asynchandler = require('express-async-handler');
const Student = require('../models/studentModel');

//register student
const registerStudent = asynchandler(async (req, res) => {
  //requesting the information from the client
  const { name, registerNo, className, rollNo, division } = req.body;

  //checking if something missing
  if (!name || !registerNo || !className || !rollNo || !division) {
    res.status(400);
    throw new Error('Enter all fields');
  }

  //if user is exists
  const userExits = await Student.findOne({ registerNo });

  if (userExits) {
    res.status(400);
    throw new Error('Student already exists');
  }

  //creating the user
  const student = await Student.create({
    name,
    registerNo,
    className,
    rollNo,
    division,
  });

  if (student) {
    res.status(201);
    res.json({
      message: `Student named as ${student.name} has been registerd!`,
    });
  }
});

//list student
const listStudent = async (req, res) => {
  const allStudent = await Student.find();

  if (allStudent) {
    res.status(200);
    res.json(allStudent);
  } else {
    res.status(400);

    throw new Error('Something went wrong');
  }
};

//update student

const updateStudent = asynchandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  //check if student is present or not
  if (!student) {
    res.status(400);
    throw new Error('Please check the id number properly');
  }

  const updateStudent = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({
    message: 'Student data updated',
    data: updateStudent,
  });
});

const deleteStudent = asynchandler(async (req, res) => {
  const student = await Student.findById(req.params.id);

  //check if student is present or not
  if (!student) {
    res.status(400);
    throw new Error('Please check the id number properly');
  }

  const deletedStudent = await Student.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: `${deletedStudent.name} has been removed`,
    info: deletedStudent,
  });
});

module.exports = {
  listStudent,
  registerStudent,
  updateStudent,
  deleteStudent,
};
