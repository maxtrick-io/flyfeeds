import { Component, OnInit } from '@angular/core';
import { LoginComponent} from '../../authentication/login/login.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
