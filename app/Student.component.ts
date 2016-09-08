import {Component} from 'angular2/core';

export class Student{

    StudentID: number;
    StudentFName: string;
    StudentLName: string;
    StudentFeesStatus:boolean;


}

const STUDENTS: Student[] = [
  { StudentID: 11, StudentFName: 'Agnel', StudentLName:'Amodia',StudentFeesStatus:true },
  { StudentID: 12, StudentFName: 'Sharada', StudentLName:'Rayekanti',StudentFeesStatus:false },
  { StudentID: 13, StudentFName: 'Arvind', StudentLName:'Challa',StudentFeesStatus:true },
  { StudentID: 14, StudentFName: 'Nishal', StudentLName:'Shah',StudentFeesStatus:false },
  { StudentID: 15, StudentFName: 'Jiger', StudentLName:'Mehta',StudentFeesStatus:true },
  ];

@Component
({
    selector: 'student-info',
    templateUrl:`app/Student.component.html`,
    styleUrls: ['app/Student.component.css']
})

export class StudentComponent{

title = 'My First Application';

 studentInfo = STUDENTS; 
 selectedStudent : Student;

 onSelect(student:Student):void {
     this.selectedStudent = student;
 }
}

