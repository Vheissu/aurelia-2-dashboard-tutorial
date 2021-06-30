import { IHttpClient } from '@aurelia/fetch-client';

export class ExchangeComponent {
    constructor(@IHttpClient private http: IHttpClient) {
    
    }
    
    getExchangeData() {
        return this.http.fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(r => r.ok ? r.json() : (() => { throw new Error('Unable to fetch exchange rates') }))
    }
}