System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Student, STUDENTS, StudentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Student = (function () {
                function Student() {
                }
                return Student;
            }());
            exports_1("Student", Student);
            STUDENTS = [
                { StudentID: 11, StudentFName: 'Agnel', StudentLName: 'Amodia', StudentFeesStatus: true },
                { StudentID: 12, StudentFName: 'Sharada', StudentLName: 'Rayekanti', StudentFeesStatus: false },
                { StudentID: 13, StudentFName: 'Arvind', StudentLName: 'Challa', StudentFeesStatus: true },
                { StudentID: 14, StudentFName: 'Nishal', StudentLName: 'Shah', StudentFeesStatus: false },
                { StudentID: 15, StudentFName: 'Jiger', StudentLName: 'Mehta', StudentFeesStatus: true },
            ];
            StudentComponent = (function () {
                function StudentComponent() {
                    this.title = 'My First Application';
                    this.studentInfo = STUDENTS;
                }
                StudentComponent.prototype.onSelect = function (student) {
                    this.selectedStudent = student;
                };
                StudentComponent = __decorate([
                    core_1.Component({
                        selector: 'student-info',
                        templateUrl: "app/Student.component.html",
                        styleUrls: ['app/Student.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], StudentComponent);
                return StudentComponent;
            }());
            exports_1("StudentComponent", StudentComponent);
        }
    }
});
//# sourceMappingURL=Student.component.js.map