const mongoose = require("mongoose");

const academic = mongoose.Schema(
  {
    Skills: {
      type: String,
      required: true,
    },
    Work_History: {
      orgName: {
        type: String,
        required: true,
      },
      tenure: {
        start_month: {
          type: String,
          required: true,
        },
        start_year: {
          type: String,
          required: true,
        },
        end_month: {
          type: String,
          required: true,
        },
        end_year: {
          type: String,
          required: true,
        },
        isWorking: {
          type: String,
          required: true
        },
      },
      title: {
        type: String,
        required: true
      },
      Work: {
        Projectname: {
          type: String,
          required: true
        },
        Description: {
          type: String,
          required: true
        },
        Contribution: {
          type: String,
          required: true
        },
        Duration_from: {
          type: String,
          required: true
        },
        Duration_to: {
          type: String,
          required: true
        },
        other_comment: {
          type: String,

        },
      },
    },
    Education: {
      schoolName: {
        type: String,
        required: true
      },
      schoolBoard: {
        type: String,
        required: true
      },
      School_duration_from: {
        type: String,
        required: true
      },
      School_duration_to: {
        type: String,
        required: true
      },
      tenthResult: {
        type: String,
        required: true
      },
      twelveththResult: {
        type: String,
        required: true
      },
    },
    Social_Link: {
      Github:
      {
        type: String,
        required: true
      },
      Github_link:
      {
        type: String,
        required: true
      },
      Linkedin:
      {
        type: String,
        required: true
      },
      Linkedin_link:
      {
        type: String,
        required: true
      },

      TotalExperience:
      {
        type: String,
        required: true
      },
    }
  });

module.exports = mongoose.model("Academic", academic);
