import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { survey } from "/lib/collections.js";
import { student } from "/lib/collections.js";

import "./homepage.html"

Template.homepage.helpers({
    list: function(){
      var currentStudent = student.findOne({studentId: "oYxje296j82vuHLAp"});
      var master = [];
      currentStudent.assignedSurveys.forEach(function(element, index){
        var currentSurveyId = survey.findOne({surveyId: element});
        master.push({assigned: currentSurveyId.title, assignedLength: currentSurveyId.surveyLength, assignedLink: "/response/" + currentSurveyId.surveyId});
      });
      currentStudent.completedSurveys.forEach(function(element, index){
        var currentSurveyId = survey.findOne({surveyId: element});
        if(master[index] == undefined){
          master[index] = {}
          master[index]["completed"] = currentSurveyId.title;
          master[index]["completedLength"] = currentSurveyId.surveyLength;
        }else{
          master[index]["completed"] = currentSurveyId.title;
          master[index]["completedLength"] = currentSurveyId.surveyLength;
        }
      });
      return master;
    }
});

Template.homepage.events({

})