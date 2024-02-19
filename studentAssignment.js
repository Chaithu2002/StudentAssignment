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
    let userInput = readline.question("select one from these three statements:\n 1. Take Test\n 2. Generate Result\n 3. View Students Result\n 4. display classwise result\n 5. Detail Analysis of result\n 6. Exit\n");
    if(userInput == 1){
        takeTest();
        generateResult();
    }
    if(userInput == 2){
        if(students[0].test_score.length == 0){
            console.log("students haven't taken the test, please take the test first");
            continue;
        }
        generateResult();
    }
    if(userInput == 3){
        viewresults();
    }
    if(userInput == 4){
        displayClassWise();
    }
    if(userInput == 5){
        detailAnalysisOfStudent();
    }
    if(userInput == 6){
        console.log("Thank you");
        cond = false;
    }

}

// adding 3 subjects and generating random marks from 1 to 100 for each student in students
function takeTest(){
    students.forEach((obj)=>{
        let randomMarks = Math.round(Math.random()*(100-30)+30);
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

        let totalMarks = 0;
        let percentage = 0;
        let array = obj.test_score;
        array.forEach((obj)=>{
            totalMarks += obj.marks;
        
        });
        percentage = Math.round((totalMarks/300) * 100);
        obj.Total = totalMarks;
        obj.Percentage = percentage;
    });

    console.log("Results are generated\n");

}


// displaying students results funciton

function viewresults(){
    console.table(students,["Name","Roll_no","Class", "Gender","Total","Percentage"]);
}

// displaying class wise results

function displayClassWise(){
    let classValue = students[0].Class;    //storing default first object class value for checking other class values
    let classes = [classValue];
    students.forEach((obj)=>{
        if(obj.Class != classValue ){       //for loop for iterating through each obj and if any class value != current classValue we are pushing new number into classes and updating the classValue
            classes.push(obj.Class);
            classValue = obj.Class;
        }
    })

    //storing the details of the students class wise in filteredClasses through filter method 
    let filteredClasses = [];
    for(let cls of classes){
        filteredClasses.push(students.filter((obj)=> obj.Class == cls));
    }

    //printing the details of the students class wise using console.table 

    //console.log(filteredClasses);
    for(let obj in filteredClasses){
        console.table(filteredClasses[obj],["Roll_no","Name","Class","Gender","Total","Percentage"]);
    }

    return filteredClasses;

}

function detailAnalysisOfStudent(){
    let resultArray = [];
    let classes = displayClassWise();
    let totalMarks = 0;
    let averageTotalMarks = 0;
    let failedStudentsCount = 0;
    let eachClass = 0;

    for(let array of classes){
        //creating empty object for holding all the calculating properties
        let resultClassObject = {};
        let denominator = 0;
        let totalStudents = 0;
        let totalPercentage = 0;
        array.forEach((obj)=>{
            totalMarks += obj.Total;
            totalPercentage += obj.Percentage;
            denominator++;
            totalStudents++;
            let arr = obj.test_score;
            for(let obj of arr){
                if(obj.marks <= 44){
                    failedStudentsCount++;
                    break;
                }
            }
            // passedStudentsCount++;     //calculating passed students count
            eachClass = obj.Class;
        });

        // computing average percentage 
        let classAveragePercent = Math.round(totalPercentage/denominator);
        let classAverageGrade = overallGradeForEachClass(classAveragePercent);   // calling overall grade for each class function;
        resultClassObject.overallGrade = classAverageGrade;

        //computing average total marks and adding to object value
        averageTotalMarks = Math.round(totalMarks / denominator);
        resultClassObject.averageTotalMarks = averageTotalMarks;
        // adding average percentage to object value
        resultClassObject.averagePercentage = classAveragePercent;
        // calculating failed students percentage
        let failedStudentsPercentage = Math.round((failedStudentsCount / totalStudents) * 100);
        // calculating passed students percentage
        let passedStudentsPercentage = 100 - failedStudentsPercentage;

        //adding failed and passed students count and percentage to object values
        resultClassObject.failedStudentsCount = failedStudentsCount;
        resultClassObject.passedStudentsCount = totalStudents - failedStudentsCount;
        resultClassObject.failedStudentsPercentage = failedStudentsPercentage;
        resultClassObject.passedStudentsPercentage = passedStudentsPercentage;
        //adding each class value in class object 
        resultClassObject.class = eachClass;
        resultClassObject.totalStudents = totalStudents;
        //pushing each class object with all the calculated values into result Array
        resultArray.push(resultClassObject);

    }
    // console.log(resultArray);
    console.table(resultArray,["class","totalStudents","averageTotalMarks","averagePercentage","overallGrade"]);
    console.table(resultArray,["failedStudentsCount","passedStudentsCount","failedStudentsPercentage"]);
    console.table(resultArray,["passedStudentsPercentage"]);
}

function overallGradeForEachClass(averagePercentage){
    if(averagePercentage >= 80){
        return "A+"; 
    }
    else if(averagePercentage >= 70){
        return "A";
    }
    else if(averagePercentage >= 65){
        return "B+";
    }
    else if(averagePercentage >= 60){
        return "B";
    }
    else if(averagePercentage >= 55){
        return "C+";
    }
    else if(averagePercentage >= 50){
        return "C";
    }
    else if(averagePercentage >= 45){
        return "D";
    }
    else{
        return "F";
    }
}



