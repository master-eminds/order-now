import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes("api")) {
      const apiRequest = req.clone({
        url: `${environment.backend}/${req.url}`,
      });
      return next.handle(apiRequest);
    } else {
      return next.handle(req);
    }
  }
}
