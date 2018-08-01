import { Injectable, Injector } from '@angular/core';
import { 
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class BackendInterceptor implements HttpInterceptor{
    constructor(public injector: Injector) {}
    intercept(originalRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const http: HttpClient = this.injector.get(HttpClient);
        let request;

        if(environment.dummy && 
            originalRequest.url.indexOf('/assets/dummy/') < 0){
            console.log('using Interceptor...');
            request = originalRequest.clone({
                url: originalRequest.url.startsWith('http') ? 
                    originalRequest.url : environment.url + originalRequest.url,
                withCredentials: true
            });

            const path: string = request.url;
            const dummyPath: string = `/assets/dummy/api${path.substring(path.lastIndexOf('/'))}.json`;

            console.log(dummyPath)

            return http.get<any>(dummyPath);
        }else{
            return next.handle(originalRequest);
        }
    }
}
