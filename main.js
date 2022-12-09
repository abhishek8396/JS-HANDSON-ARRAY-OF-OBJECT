let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]


// let arrnew = studentRecords.map((n) => n.name.toUpperCase())
// console.log(arrnew); 

//  let result = studentRecords.filter(studentRecords => studentRecords.marks > 50);
// console.log(result);

// let result = studentRecords.filter(studentRecords => studentRecords.marks>50 && studentRecords.id>120);
// console.log(result);

// let result = studentRecords.reduce(((num1, num2)=> num1+num2.marks), 0)
// console.log(result);


// let name = studentRecords.filter(studentRecords=> studentRecords.marks>50) .map(studentRecords=> studentRecords.name);
// console.log(name);


// let id = studentRecords.filter(studentRecords=> studentRecords.id>120).reduce(((num3, num4) => num3 + num4.marks),0);
// console.log(id);

// let arrnew = studentRecords.map(function(stu){
//     if(stu.marks < 50){
//         stu.marks += 15;
        
// }return stu; 
// }).filter(stu => stu.marks > 50).reduce(((num1, num2) => num1+=num2.marks), 0);


let res6 = studentRecords.map (function(mark){
    if(mark.marks < 50){
        mark.marks +=15
    }
    return mark;
}).filter(c=>c.marks>50).reduce((acc,cur)=>acc+=cur.marks,0)
console.log(res6);
// let stunew = function(stu)
    
// }
// let stuarray= [];
// function Student(name, classname, rollno){
//     this.stuname = name;
//     this.stuname = classname
//     this.sturollno= rollno
// }
// let student1 = new Student("EA17", "sept", 1)
// let student2 = new Student("EA15", "july", 2)
// let student3 = new Student("EA13", "june", 3)
// let student4 = new Student("EA12", "nov", 4)
// let student5 = new Student("EA19", "oct", 5)
// let student6 = new Student("EA20", "aug", 6)

// stuarray.push(student1)
// stuarray.push(student2)
// stuarray.push(student3)
// stuarray.push(student4)
// stuarray.push(student5)
// stuarray.push(student6)

//