import { Component, OnInit, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../containers/services/auth/auth.service';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() username: string;
  @Input() isLoggedIn: boolean;
  @Input() imageRef: Observable<string | null>;


  constructor(
    private storage: AngularFireStorage,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

goToUserUpdate(): void{
    this.router.navigateByUrl('/user-update/' + this.username);
  }

  goToChangePass(): void{
    this.router.navigateByUrl('/user/change-pass/' + this.username);
  }

  logout(): void{
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }
}
