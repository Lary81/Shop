export class Api {

  baseUrl = 'http://localhost:8443/api-v1'
  oauthServer = 'http://localhost:8443/oauth/token'
  users = `http://localhost:8443/api-v1/users`;
  activeUser = `${this.baseUrl}/users/active`

}
