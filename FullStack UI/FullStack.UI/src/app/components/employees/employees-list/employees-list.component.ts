import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '24261cac-d5d2-4648-bff8-8ce46318a700',
      name: 'Leanne Graham',
      email: 'leanne.graham@april.biz',
      phone: 17707368031,
      salary: 124000,
      department: 'Human Resources'
    },
    {
      id: '30d67dd2-bbb9-474a-879e-b1fd72020da1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: 9876543000,
      salary: 540000,
      department: 'Information Technology'
    },
    {
      id: '24261cac-d5d2-4648-bff8-8ce46318a700',
      name: 'Stephen Roger',
      email: 'steve.roger@coaxis.co.nz',
      phone: 3242349121,
      salary: 934102,
      department: 'Inventory Manager'
    },
    {
      id: '4215a66d-5321-49f5-82b7-6a901261b599',
      name: 'Christiano Ronalod',
      email: 'christiano.ronaldo@futbol.com',
      phone: 9173010453,
      salary: 340324024,
      department: 'IT Support Desk'
    },
    {
      id: '98b8c8b7-0bad-4619-92fd-10709b80de8c',
      name: 'Lionel Messi',
      email: 'leo.messi@golden.com',
      phone: 45346646,
      salary: 675863432,
      department: 'Technology Support'
    }
  ];
  
  ngOnInit(): void {}
}
