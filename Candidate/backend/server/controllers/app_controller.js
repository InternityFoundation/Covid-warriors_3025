const Academic = require("../models/academic_model");
const Personal = require("../models/personal_model");
const Job = require("../models/job_model");
const Quiz = require("../models/quiz_model");
const multer = require("../node_modules/multer");
createAcademic = (req, res) => {
  const body = req.body;
  console.log(body);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Fill Required Details",
    });
  }

  const academic = new Academic(body);

  if (!academic) {
    return res.status(400).json({ success: false, error: err });
  }

  academic
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Academic Details Updated!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Academic Details not Updated!",
      });
    });
};

getAcademic = async (req, res) => {
  await Academic.find({}, (err, academicDetails) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!academicDetails.length) {
      return res
        .status(404)
        .json({ success: false, error: `Academic Details not found` });
    }
    return res.status(200).json({ success: true, data: academicDetails });
  }).catch((err) => console.log(err));
};

createPersonal = (req, res) => {
  const body = req.body;
  console.log(body);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Fill Required Details",
    });
  }

  const personal = new Personal(body);

  if (!personal) {
    return res.status(400).json({ success: false, error: err });
  }

  personal
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Personal Details Updated!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Personal Details not Updated!",
      });
    });
};

createJob = (req, res) => {
  const body = req.body;
  console.log(body);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Fill Required Details",
    });
  }

  const job = new Job(body);

  if (!job) {
    return res.status(400).json({ success: false, error: err });
  }

  job
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Job Details Updated!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Job Details not Updated!",
      });
    });
};

createScore = (req, res) => {
  const body = req.body;
  console.log(body);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Empty Form",
    });
  }

  const job = new Quiz(body);

  if (!job) {
    return res.status(400).json({ success: false, error: err });
  }

  job
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Quiz Score Updated",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Quiz Score not Updated",
      });
    });
};

module.exports = {
  createAcademic,
  getAcademic,
  createPersonal,
  createJob,
  createScore,
};
