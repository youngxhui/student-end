import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtUser } from '../domain/JwtUser';

// export class authInfo {
//   constructor(private jwtHelperService: JwtHelperService) {}
//   token: string;

//   getInfo(): JwtUser {
//     this.token = localStorage.getItem('token');
//     if (this.token !== null) {
//       const user = this.jwtHelperService.decodeToken(this.token);
//       const jwtUser = new JwtUser();
//       jwtUser.auth = user.auth;
//       jwtUser.exp = user.exp;
//       jwtUser.iat = user.iat;
//       jwtUser.sub = user.sub;
//       jwtUser.classId = user.classId;
//       jwtUser.userId = user.userId;
//       return jwtUser;
//     }
//     return null;
//   }
// }

export const authInfo = () => {
  const jwtHelperService = new JwtHelperService()
  let token = localStorage.getItem('token');

  if (token !== null) {
    const user = jwtHelperService.decodeToken(token);
    const jwtUser = new JwtUser();
    jwtUser.auth = user.auth;
    jwtUser.exp = user.exp;
    jwtUser.iat = user.iat;
    jwtUser.sub = user.sub;
    jwtUser.classId = user.classId;
    jwtUser.userId = user.userId;
    return jwtUser;
  }
  return null;
};
