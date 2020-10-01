import { PostmanService } from './../postman/postman.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  posts: Array<any>;
  constructor(private postman: PostmanService) {this.posts = new Array<any>(); }

  ngOnInit(): void {
    this.postService();
  }
  
  postService() {
    this.postman.getData().subscribe((posts) => {
      this.posts = posts;
    });
  }

}
