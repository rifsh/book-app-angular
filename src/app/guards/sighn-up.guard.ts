import { CanActivateFn, Router } from '@angular/router';
import { UserSrvcService } from '../services/user-srvc.service';
import { inject } from '@angular/core';



export const sighnUpGuard: CanActivateFn = () => {
  
  
  const  srvc:UserSrvcService = inject(UserSrvcService);
  const  route:Router = inject(Router);

   if (srvc.isLogged) {
    return true;
   }else {
    route.navigate(['sign-up']);
    return false;
   }

};
