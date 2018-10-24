import { HttpResponse } from '../http/http-response';

export class HttpResponseMock {
    public getApps(): HttpResponse {
        var response = {
            message : '',
            data : [
              {id: 1, name: 'ClienteAPI', methods : [
                {id: 1, name: 'ClienteGet', status: true},
                {id: 2, name: 'ClientePost', status: true},
                {id: 3, name: 'ClienteDelete', status: false},
                {id: 4, name: 'ClientePut', status: true},
              ]},
              {id: 2, name: 'SalesforceAPI', methods : [
                {id: 5, name: 'AccountGet', status: true},
                {id: 6, name: 'AccountPost', status: false},
                {id: 7, name: 'AccountDelete', status: false},
                {id: 8, name: 'AccountPut', status: false},
              ]}
            ],
            error : {
              count : 0,
              errors: []
            }
        };

        return <HttpResponse>response;
    }
}
