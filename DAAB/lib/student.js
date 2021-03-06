import { student } from "/lib/collections.js"
student.schema = new SimpleSchema({
	grade: {
		type: "Integer",
		max: 2
	},
	name: {
		type: "String"
	},
	studentId: {
		type: "String"
	},
	assignedSurveys: {
		type: ["String"]
	},
	completedSurveys: {
		type: ["String"]
	}
});
