import { PostmanService } from '../../services/postman/postman.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../authentication/auth.services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfigComponent } from '../settings/config.component';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  posts: Array<any>;
  constructor(private postman: PostmanService,
              private auth: AuthService,
              public dialog: MatDialog) {this.posts = new Array<any>(); }

  ngOnInit(): void {
    this.postService();
  }

  postService(): void {
    this.postman.getData().subscribe((posts) => {
      this.posts = posts;
    });
  }
  openDialog(e: Event): void {
    const dialogRef = this.dialog.open(ConfigComponent, {
      width: '80vw',
      height: '90vh'
    });
  }
}
