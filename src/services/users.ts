import { Injectable } from '@angular/core';
import { Platform, AlertController, Events, Alert } from 'ionic-angular';

@Injectable()
export class UserService {
    constructor() {
    }
    getUser(userName): Promise<any> {
        return fetch(
            `https://api.github.com/users/${userName}`,
            {
                method: "GET"
            }
        ).then((response) => response.json());
    }
    loadRepos(userName): Promise<any> {
        return fetch(
            `https://api.github.com/users/${userName}/repos`,
            {
                method: "GET"
            }
        ).then((response) => response.json());
    }

}
