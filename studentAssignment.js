// importing readline 
const readline = require("readline-sync");

// students records

let students = [
    {
        Roll_no: 501,
        Name: "Liam Garcia",
        Class: 5,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 502,
        Name: "Ava Robinson",
        Class: 5,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 503,
        Name: "Lucas Cooper",
        Class: 5,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 504,
        Name: "Emma Reed",
        Class: 5,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 505,
        Name: "Mia Hughes",
        Class: 5,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 601,
        Name: "Sophia Smith",
        Class: 6,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 602,
        Name: "Ethan Johnson",
        Class: 6,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 603,
        Name: "Ava Williams",
        Class: 6,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 604,
        Name: "Noah Brown",
        Class: 6,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 605,
        Name: "Olivia Jones",
        Class: 6,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 701,
        Name: "Liam Davis",
        Class: 7,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 702,
        Name: "Emma Martinez",
        Class: 7,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 703,
        Name: "Mia Wilson",
        Class: 7,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 704,
        Name: "Lucas Taylor",
        Class: 7,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 705,
        Name: "Aiden Anderson",
        Class: 7,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 801,
        Name: "Isabella Thomas",
        Class: 8,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 802,
        Name: "James White",
        Class: 8,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 803,
        Name: "Avery Clark",
        Class: 8,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 804,
        Name: "Mason Turner",
        Class: 8,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 805,
        Name: "Charlotte Harris",
        Class: 8,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 801,
        Name: "Evelyn Scott",
        Class: 9,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 802,
        Name: "Logan King",
        Class: 9,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 803,
        Name: "Harper Turner",
        Class: 9,
        Gender: "Female",
        test_score: []
    },
    {
        Roll_no: 804,
        Name: "Jackson Lee",
        Class: 9,
        Gender: "Male",
        test_score: []
    },
    {
        Roll_no: 805,
        Name: "Abigail Baker",
        Class: 9,
        Gender: "Female",
        test_score: []
    }	
]  

let cond = true;
while(cond){
    let userInput = readline.question("select one from these three statements:\n 1. Take Test\n 2. Generate Result\n 3. View Students Result\n 4. Exit\n");
    if(userInput == 1){
        takeTest();
    }
    if(userInput == 2){
        generateResult();
    }
    if(userInput == 3){
        viewresults();
    }
    if(userInput == 4){
        console.log("Thank you");
        cond = false;
    }

}

// adding 3 subjects and generating random marks from 1 to 100 for each student in students
function takeTest(){
    students.forEach((obj)=>{
        let randomMarks = Math.round(Math.random()*100);
        let subjects = ["maths","science","english"];
        count = 0;
        while(count<3){
            obj.test_score.push({subject:subjects[count],marks:randomMarks});
            count++;
        }
    });
    console.log("Students are taken test.\n");
}

// generating result for all students

function generateResult(){
    students.forEach((obj)=>{
        obj.result = [];                //added a property result for each student with value empty array inorder to store marks and percentage 
        let totalMarks = 0;
        let percentage = 0;
        let array = obj.test_score;
        array.forEach((obj)=>{
            totalMarks += obj.marks;
        
        });
        percentage = Math.round((totalMarks/300) * 100);
        obj.result.push({marks: totalMarks, percent: percentage});   //pushing an object with key:value as marks and percentage inside the result property.
    });

    console.log("Results are generated\n");

}


// displaying students results funciton

function viewresults(){
    let userInput = readline.question("Enter the roll no above 500 and below 906:");

    students.forEach((obj)=>{
        let array = obj.result;
        let marks = obj.result[0].marks;
        let percentage = obj.result[0].percent;

        if(array.length == 0){
            console.log("student has not taken the test");
            console.log("would you like you take the test again?");
        }
        else if(obj.Roll_no == userInput){ 
            console.log(`RollNO: ${userInput} Name: ${obj.Name} Class: ${obj.Class} Gender: ${obj.Gender} Marks: ${marks} Percentage: ${percentage}`);              
        } 
        
    });
}