import { CanActivateFn, Router } from '@angular/router';
import { UserSrvcService } from '../services/user-srvc.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';




export const sighnUpGuard: CanActivateFn = () => {


  const srvc: UserSrvcService = inject(UserSrvcService);
  const toast: ToastrService = inject(ToastrService)
  const route: Router = inject(Router);

  if (srvc.isLogged) {
    return true;
  } else {
    toast.info('Please login');
    route.navigate(['sign-up']);
    return false;
  }

};
