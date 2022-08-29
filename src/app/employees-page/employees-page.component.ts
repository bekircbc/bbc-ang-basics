import { Component, OnInit } from '@angular/core';
import { employees } from '../datamodel';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css'],
})
export class EmployeesPageComponent implements OnInit {
  employees = employees;
  constructor() {}

  ngOnInit(): void {}
}
