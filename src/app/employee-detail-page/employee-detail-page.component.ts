import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employees } from '../datamodel';

@Component({
  selector: 'app-employee-detail-page',
  templateUrl: './employee-detail-page.component.html',
  styleUrls: ['./employee-detail-page.component.css'],
})
export class EmployeeDetailPageComponent implements OnInit {
  employee: any = {};
  constructor() {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employee = employees.find((m) => String(m.employeeID) === id);
  }
}
