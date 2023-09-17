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
		topic: new Topic("Workday", "","",[],[]),
	},	
	{
		topic: new Topic("Lecture 4: Conditions and decisions", "lectures/lecture04.html","Week3",["Basic Double Coupon*", "Simple Filter*", "Restaurant check calculator*", "Bank Balance*", "make change"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1878", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1879", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1881",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1880",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1915"]),
		lab: new NumberedLab(4, "Salary Calculator")
	},
	{
		topic: new Topic("Lecture 5: If/else if/else statements, random numbers", "lectures/lecture05.html","Week3",["Triple Coupon*", "member discount*", "Complex Filter*", "grading", "Smallest of 3", "happy birthday", "Median of three@", "buy 3, get 1 free", "Restaurant check calculator", "More Fleems"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1882", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1883", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1884",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1925",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1937",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1948",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1929",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1931", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1881", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1965"
]),
		lab: new DoubleNumberedLab(5, "Animal Classifier", "5b", "Checking the Weather")
	},
	{
		topic: new Topic("Lecture 6: For loops, loop recipes", "lectures/lecture06.html","Week4",["bananana*", "Eeeeeeek!*", "countdown*", "keep doubling*", "dice rolls@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1885", "https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1914", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1886",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1887",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1916"]),
		lab: new NumberedLabNoFile(6, "For loops")
	},
	{
		topic: new Topic("Lecture 7: While loops, coding style", "lectures/lecture07.html","Week4",["Check Input*", "squares*", "day numbers"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1888", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1889",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1890"]),
		lab: new NumberedLab(7, "Gone loopy")
	},
	{
		topic: new Topic("Lecture 8: Nested loops, char data types", "lectures/lecture08.html","Week5",["111222333444*", "multiplication table*", "which and how many?@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1891", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1930",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1892"]),
		lab: new DoubleNumberedLab(8, "Bar Graph", "8b", "Fancy Rectangle")
	},
	{
		topic: new Topic("Exam 1 Review", "","Exam1Review",["fleems", "plus four", "triangle counting", "First digit", "Perfect Number@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1926", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1953",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1854", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1943",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1938"]),
		lab: new NumberedLab("8c", "<b>Optional</b> Barn Door")
	},
	{
 		topic: new Topic("** Exam 1", "",[],[])
 	},
	{
		topic: new Topic("Lecture 9: Arrays", "lectures/lecture09.html","Week6",["Array Scanner*", "Pair sums*", "Exceeded Amount", "weighted average", "Not like the others@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1893", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1894",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1895", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1946",
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1896"]),
		lab: new NumberedLabNoFile(9, "Array Exercises")
	},
	{
		topic: new Topic("Lecture 9: Arrays, cont.", "lectures/lecture09.html","",[],[]),
		lab: new NumberedLab("9b", "Sorting and Finding Median of an Array")
	},
	{
		topic: new Topic("Lecture 10: Multidimensional arrays", "lectures/lecture10.html","Week7",["tic-tac-toe check*", "Magic Squares"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1924", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1935"]),
		lab: new NumberedLab(10, "<b>Optional</b> Kitten Pictures")
	},
	{
		topic: new Topic("Lecture 11: Functions, top-down design", "lectures/lecture11.html","Week8",["PrintSum*", "Deep Thought*", "Find Primes@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1897", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1898", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1899"]),
		lab: new NumberedLab(11, "Right Triangle")
	},
	{
		topic: new Topic("Lecture 12: Functions that return a value", "lectures/lecture12.html","Week9",["SumBetween*", "MaxOfThree*", "feetToMeters*", "inRange*", "ContainersNeeded", "WeeklyPay", "diamond@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1903", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1904", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1921", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1928", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1933", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1934", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1923"]),
		lab: new NumberedLab(12, "Simple Stats")
	},
	{
 		topic: new Topic("Exam 2 Review", "",[],[]),
 		lab: new NumberedLab("12b", "<b>Optional</b> Function Design")
 	},
	{
 		topic: new Topic("** Exam 2", "",[],[])
 	},
	{
		topic: new DoubleTopic("Lecture 13: Struct types", "lectures/lecture13.html","Lecture 14: Using structs with functions", "lectures/lecture14.html","Week10",["find_midpoint*"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1950"]),
		lab: new DoubleNumberedLab(13, "Fancy Output", 14, "Boing!")
	},
	{
		topic: new DoubleTopic("Lecture 15: Pointers, reference parameters", "lectures/lecture15.html","Lecture 16: Pointers to structs", "lectures/lecture16.html","Week11",["AddEmUp*", "area of Rectangle*", "quadrant*"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1905", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1906", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1932"]),
		lab: new DoubleNumberedLab(15, "Boing! revisited", 16, "Boing! with pointers")
	},
	{
		topic: new Topic("Lecture 17: Composition of structs", "lectures/lecture17.html","",[],[]),
		lab: new NumberedLab(17, "Mini Golf")
	},
	{
		topic: new Topic("Lecture 17: Composition of structs, cont.", "lectures/lecture17.html","",[],[]),
		lab: new NumberedLab(17, "Mini Golf")
	},
	{
		topic: new Topic("Lecture 18: Arrays and functions", "lectures/lecture18.html","Week12",["ArraySum*", "IsAscending*", "countOdd*", "Min Array Entry"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1900", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1902", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1901", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=35,p=1936"]),
		lab: new NumberedLab(18, "Grass Fire")
	},
	{
		topic: new Topic("Lecture 19: Arrays of structs", "lectures/lecture19.html","",[],[]),
		lab: new NumberedLab(19, "Boing! particle simulation")
	},
	{
		topic: new Topic("Lecture 19: Arrays of structs, cont.", "lectures/lecture19.html","",[],[]),
		lab: new NumberedLab(19, "Boing! particle simulation")
	},
	{
 		topic: new Topic("Assignment workday", "",[],[]),
 	},
	{
 		topic: new Topic("Exam 3 Review", "",[],[]),
 	},
	{
 		topic: new Topic("** Exam 3", "",[],[])
 	},

];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("101", new Date("12/07/2023 10:15:00")),
		new FinalExamDay("102", new Date("12/07/2023 12:45:00")),
		new FinalExamDay("103", new Date("12/09/2023 08:00:00")),
];

// vim:ts=2:
