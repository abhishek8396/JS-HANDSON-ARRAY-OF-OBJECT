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

let arrnew = studentRecords.map(function(studentRecords){
    if(studentRecords.marks < 50){
        studentRecords.marks += 15;
        return studentRecords;
}
    
}).filter(studentRecords => studentRecords.marks > 50).reduce((num1, num2) => num1+num2.marks, 0);


