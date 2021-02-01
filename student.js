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

    constructor(ID, Name) {
        this.ID = ID;
        this.Name  = Name;
        this.programme = programme;
    }
        //
    tableRow() {
        return `<tr><td>${this.id}</td><td>${this.Name}</td><td>${this.programme.name}</td></tr>`;
    }

}

var programme = new Programme("123", "MSc Computing");

var students = [
    new Student("001", "Sandra","MSc Computing"),
    new Student("002", "Sally", programme),
    new Student("002", "Silvy", programme),
];
// to complete
function printstudents() {
    var html =
    `<table border="1">
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Programme</th>
    </tr>`;
    for (var student of student){
        html+=student.tableRow();
    }

    html +="</table>";

    var main = document.getElementByID ("main")
    main.innerHTML = html;



}