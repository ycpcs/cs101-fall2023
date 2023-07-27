// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new DoubleTopic("How To Succeed in CS101", "success.html", "Lecture 1: printf, scanf, int variables", "lectures/lecture01.html","Week1", ["hello*","it goes to 11*","how many tacos?", "What day is it?"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1868",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1869", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1870", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1871"]),
		lab: new NumberedLab(1, "Hello CS101!")
	},
	{
		topic: new Topic("Lecture 2: More data types, expressions", "lectures/lecture02.html","Week1",["hamster years*", "F to C*", "Mmmm, piece of candy!*","Cost of lunch"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1872", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1873", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1874", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1875"]),
		lab: new NumberedLab(2, "Expensive Calculator")

	},
	{
		topic: new Topic("Lecture 3: More about variables and expressions", "lectures/lecture03.html","Week2",["quarters", "radius of circle*", "Divvy up the rice*"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1947", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1876", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1877"]),
		lab: new NumberedLabNoFile(3, "Math Functions")

	},
	{
		topic: new Topic("Lecture 4: Conditions and decisions", "lectures/lecture03.html","Week2",["Basic Double Coupon*", "Simple Filter*", "Restaurant check calculator*", "Bank Balance*", "make change"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1878", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1879", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1881",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1880",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1915"]),
		lab: new NumberedLab(4, "Salary Calculator")
	},
	{
		topic: new Topic("Lecture 5: If/else if/else statements, random numbers", "lectures/lecture03.html","Week3",["Triple Coupon*", "member discount*", "Complex Filter*", "grading", "Smallest of 3", "happy birthday", "Median of three@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1882", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1883", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1884",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1925",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1937",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1948",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1929"]),
		lab: new NumberedLab(5, "Animal Classifier")

	},
	{
		topic: new Topic("Conditions/decisions review", "","Week3",["buy 3, get 1 free", "Restaurant check calculator", "More Fleems"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1931", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1881", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1965"]),
	},

];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("101", new Date("12/09/2023 08:00:00")),
		new FinalExamDay("102", new Date("12/07/2023 10:15:00")),
		new FinalExamDay("103", new Date("12/07/2023 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
