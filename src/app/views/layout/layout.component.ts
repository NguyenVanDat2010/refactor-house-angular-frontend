import { Component, OnInit } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../containers/services/auth/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isLoggedIn: boolean;
  username: string;
  imageRef: Observable<string | null>;

  constructor(
    private storage: AngularFireStorage,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getUserName();

    this.getUserByUsername();
  }

  getUserByUsername = () => {
    this.authService.getUserByUsername(this.username).subscribe(
      (res) => {
        this.imageRef = this.storage.ref(res.image).getDownloadURL();
        // console.log(res);
      },
      (rej) => {
        console.log('Get user failed!');
      }
    );
  };

}
