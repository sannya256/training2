"use strict";

class Programme{
    code;
    name;

    constructor(code,name){
        this.code = code;
        this.name = name;
    }
}


class Student{
    ID;
    Name;
    programme;

    constructor(ID, Name, programme) {
        this.ID = ID;
        this.Name  = Name;
        this.programme = programme;
    }
        //
    tableRow() {
        return `<tr><td>${this.ID}</td><td>${this.Name}</td><td>${this.programme.name}</td></tr>`;
    }

}

var programme = new Programme("123", "MSc Computing");

var students = [
    new Student("001", "Sandra","MSc Computing"),
    new Student("002", "Sally", programme),
    new Student("003", "Silvy", programme),
];
// to complete
function printStudents(){
    var html = 
    `<table border="1">
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Programme</th>
    </tr>`;
    for (var student of students) {
        html+=student.tableRow();
    }

    html +="</table>";

    var main = document.getElementById ("main");
    main.innerHTML = html;

}
