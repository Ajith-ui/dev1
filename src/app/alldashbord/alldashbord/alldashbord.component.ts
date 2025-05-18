// src/app/alldashbord/alldashbord.component.ts
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Chart, registerables } from 'chart.js';
import { AddpageComponent } from '../addpage/addpage.component';
import { ContactService, Contact } from '../../dashbord.service';

Chart.register(...registerables);

@Component({
  selector: 'app-alldashbord',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './alldashbord.component.html',
  styleUrls: ['./alldashbord.component.css']
})
export class AlldashbordComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'address',
    'phoneNumber',
    'dob',
    'sex',
    'status'
  ];
  dataSource = new MatTableDataSource<Contact>([]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();

    const pieCtx = document.getElementById('categoryChart') as HTMLCanvasElement;
    new Chart(pieCtx, {
      type: 'pie',
      data: {
        labels: ['Active', 'Inactive', 'Pending'],
        datasets: [{
          data: [50, 30, 20],
          backgroundColor: ['#28A745', '#DC3545', '#FFC107'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { size: 10 }
            }
          }
        }
      }
    });

    const barCtx = document.getElementById('trendChart') as HTMLCanvasElement;
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Contacts Added',
          data: [120, 190, 300, 250, 400],
          backgroundColor: '#28A745',
          borderColor: '#218838',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { font: { size: 10 } }
          },
          x: {
            ticks: { font: { size: 10 } }
          }
        },
        plugins: {
          legend: {
            labels: { font: { size: 10 } }
          }
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe({
      next: (contacts) => {
        this.dataSource.data = contacts.map((item) => ({
          id: item.id,
          name: item.name,
          email: item.email,
          address: item.address,
          phoneNumber: item.phoneNumber,
          dob: new Date(item.dob),
          sex: item.sex,
          status: item.status
        }));
      },
      error: (error) => console.error('Error fetching contacts:', error)
    });
  }

  openAddContactDialog(): void {
    const dialogRef = this.dialog.open(AddpageComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newContact: Contact = {
          id: result.id,
          name: result.name,
          email: result.email,
          address: result.address,
          phoneNumber: result.phoneNumber,
          dob: new Date(result.dob),
          sex: result.sex,
          status: result.status
        };
        this.dataSource.data = [...this.dataSource.data, newContact];
      }
    });
  }
}