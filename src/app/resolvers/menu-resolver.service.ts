import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class MenuResolver implements Resolve<any> {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getMenu(+route.paramMap.get('id'));
  }
}
