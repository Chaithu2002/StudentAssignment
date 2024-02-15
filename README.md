1 => students list --> [{}]

student obj --> 
	{
		roll no: 101,
		name: "",
		class: ,
		gender: "",
		test score: [{sub name: "", marks: ""}] ==> initial 3 sub
	}
	
	
Display menu :-

1) Take Test
2) View Result
3) View Students Result

UC1 :-

1) Take Test
	- generate marks for 3 sub for each students
	 
2) View Result
	- generate result i.e calculate total marks & percentage
	
3) View Students Result
	- show students result --> check total marks & percentage is present / not --> if present --> show result  not present --> generate result for particular student
	
UC2 :-

- add one more option to display menu 4) View classwise result

4) View classwise result
	- display classwise result

	
UC3 :-

1) Take Test
	- along with genrating marks compute total & percentage & append this to student obj	

UC4 :-

- add one more option 5) Detail Analysis of Result

5) Details Analysis of Result
	- compute below fields for each class -> 
		- average total marks
		- average percentage
		- overall grade for class
		- failed students count
		- failed students percentage
		- passed students count
		- passed students percentage
	- display data.  header format --> class | total students count | & above computed field
	  
	  
UC5 :-

- add one more option 6) View Top Performer

6) View Top Performer
	- display classwise top three performer
	
		  				
