import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../services/users';
import { PersonPage } from '../person/person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];
  githubIcon: string = "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png";
  constructor(public navCtrl: NavController, public userService: UserService) {
  }
  openPersonPage(user) {
    this.navCtrl.push(PersonPage, { user: user });
  }
}
