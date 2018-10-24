import { Injectable } from '@angular/core';
import { HttpResponseMock } from '../../core/mocks/http-response-mock';

@Injectable({
    providedIn: 'root'
})
export class HttpResponse {
    message : string;
    data : object[];
    error : HttpResponseError;
    
    constructor (private _httpResponseMock : HttpResponseMock) {
    }

    public get(url :string) : HttpResponse {
        return this._httpResponseMock.getApps();
    }
}

export interface HttpResponseError {
    count : number;
    errors : string[];
}
