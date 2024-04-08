import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { BinComponent } from '../bin/bin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, BinComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  bins = [
    {
        "id": 32143,
        "full": false,
        "location": "F Wing",
        "recycled": 23
    },

    {
        "id": 25789,
        "full": true,
        "location": "CSE Department",
        "recycled": 36
    },

    {
        "id": 38452,
        "full": false,
        "location": "Room 195",
        "recycled": 14
    },

    {
        "id": 40582,
        "full": true,
        "location": "Dean's Office",
        "recycled": 47
    },

    {
        "id": 51123,
        "full": false,
        "location": "North Entrance",
        "recycled": 3
    }
  ];
}
