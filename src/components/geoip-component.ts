import { IHttpClient } from '@aurelia/fetch-client';

export class GeoipComponent {
    constructor(@IHttpClient private http: IHttpClient) {
    
    }
    
    getUserInfo() {
        return this.http.fetch('https://freegeoip.app/json/')
        .then(r => r.ok ? r.json() : (() => { throw new Error('Unable to contact API') }))
    }
}