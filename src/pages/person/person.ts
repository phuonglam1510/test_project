import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/users';

/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  userName: string;
  user: any;
  loading: boolean = false;
  loadingRepo: boolean = false;
  repos: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    this.userName = this.navParams.get("user");
    this.loadUser();
  }
  loadUser() {
    this.loading = true;
    this.loadingRepo = true;
    this.userService.getUser(this.userName).then(user => {
      this.loading = false;
      this.user = user;
      this.loadRepos();
    });
  }
  loadRepos() {
    this.userService.loadRepos(this.userName).then(repos => {
      this.loadingRepo = false;
      this.repos = repos;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

}
