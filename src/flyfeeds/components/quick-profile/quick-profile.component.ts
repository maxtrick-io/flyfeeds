import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AuthService } from 'src/authentication/auth.services/auth.service';

@Component({
  selector: 'app-quick-profile',
  templateUrl: './quick-profile.component.html',
  styleUrls: ['./quick-profile.component.scss']
})
export class QuickProfileComponent implements OnInit {
  isDisabled = true;
  option = 'sign-in';
  access = 'publicly';
  _imgUrl: string;
  constructor(private auth: AuthService) {
    // this._imgUrl = 'data:image/bmp;base64,'+Base64.encode(auth.pImg);
   }
  
  ngOnInit(): void {
  }
  changeSign(value) {
    this.option = value;
  }
  // disabled: any = false;

  onChange(ob: MatSlideToggleChange) {
    if (ob.checked) {
      this.access = 'private';
    }
    if (!ob.checked) {
      this.access = 'publicly';
    }
  }
  signout(event: Event){
    this.auth.signOut();
  }

  // createImageUrlBlob(image: Blob){
  //   let Reader = new FileReader();
  //   Reader.addEventListener("load", () =&gt;  {
  //     this.imagBlobUrl = Reader.result
  //   }, false;)

  //   if(image){
  //     Reader.readAsDataURL(image);
  //   }
  // }
}
