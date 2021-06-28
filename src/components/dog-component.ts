import { IHttpClient } from '@aurelia/fetch-client';

export class DogComponent {
    constructor(@IHttpClient private http: IHttpClient) {
    
    }
    
    fetchDog() {
        return this.http.fetch('https://random.dog/woof.json');
    }
}