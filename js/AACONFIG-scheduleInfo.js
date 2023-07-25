// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new DoubleTopic("How To Succeed in CS101", "success.html", "Lecture 1: printf, scanf, int variables", "lectures/lecture01.html","Week1", ["hello*","it goes to 11*","how many tacos?", "What day is it?"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=27,p=1280",
"https://cs.ycp.edu/cloudcoder/#exercise?c=27,p=1281", "https://cs.ycp.edu/cloudcoder/#exercise?c=27,p=1282", "https://cs.ycp.edu/cloudcoder/#exercise?c=27,p=1283"])
	},
	{
		topic: new Topic("Lecture 2: More data types, expressions", "lectures/lecture02.html","Week1",["hamster years*", "F to C*", "Mmmm, piece of candy!*","Cost of lunch"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=19,p=988", "https://cs.ycp.edu/cloudcoder/#exercise?c=19,p=989", "https://cs.ycp.edu/cloudcoder/#exercise?c=19,p=990", "https://cs.ycp.edu/cloudcoder/#exercise?c=19,p=991"])
	},

];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("101", new Date("12/10/2021 10:15:00")),
		new FinalExamDay("102", new Date("12/10/2021 12:45:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
