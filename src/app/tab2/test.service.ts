import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TestService {
    url: string = 'http://192.168.1.3:8181/mitza';

    constructor(private httpClient: HttpClient) {}

    getMenu() {
        return this.httpClient.get(this.url).subscribe((res) => {
            console.log(res);
        });
    }
}