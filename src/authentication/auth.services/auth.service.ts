import { Injectable } from '@angular/core';
import { User } from '../auth.common/user';
import { OAuthSettings} from '../auth.common/oauth'

import { MsalService } from '@azure/msal-angular';
import { Client } from '@microsoft/microsoft-graph-client';

import { AlertService } from '../auth.services/alert.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authenticated: boolean;
  public user: User;

  constructor(private msalService: MsalService,
    private alertsService: AlertService) {
      this.authenticated = this.msalService.getAccount() != null;
      this.getUser().then((user) => {this.user = user});
     }

     async signIn(): Promise<void> {
      let result = await this.msalService.loginPopup(OAuthSettings)
        .catch((reason) => {
          this.alertsService.add('Login failed', JSON.stringify(reason, null, 2));
        });
  
      if (result) {
        this.authenticated = true;
        this.user = await this.getUser();
      }
    }

    signOut(): void {
      this.msalService.logout();
      this.user = null;
      this.authenticated = false;
    }

    async getAccessToken(): Promise<string> {
      let result = await this.msalService.acquireTokenSilent(OAuthSettings)
        .catch((reason) => {
          this.alertsService.add('Get token failed', JSON.stringify(reason, null, 2));
        });
  
      if (result) {
        return result.accessToken;
      }
      return null;
    }

    private async getUser(): Promise<User> {
      if (!this.authenticated) return null;
  
      let graphClient = Client.init({
        // Initialize the Graph client with an auth
        // provider that requests the token from the
        // auth service
        authProvider: async(done) => {
          let token = await this.getAccessToken()
            .catch((reason) => {
              done(reason, null);
            });
  
          if (token)
          {
            done(null, token);
          } else {
            done("Could not get an access token", null);
          }
        }
      });

      let graphUser = await graphClient.api('/me').get();
      let user = new User();
      user.displayName = graphUser.displayName;
      user.email = graphUser.mail || graphUser.userPrincipalName;
        console.log(user);
      return user;
    }
}
