import { PostmanService } from './../postman/postman.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../authentication/auth.services/auth.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  posts: Array<any>;
  constructor(private postman: PostmanService,
              private auth: AuthService) {this.posts = new Array<any>(); }

  ngOnInit(): void {
    this.postService();
  }

  postService(): void {
    this.postman.getData().subscribe((posts) => {
      this.posts = posts;
    });
  }

  signout(): void{
    this.auth.signOut();
  }
}
