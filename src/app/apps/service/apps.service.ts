import { Injectable } from '@angular/core';
import { AppsViewModel } from '../viewmodel/apps-view-model';
import { HttpResponse } from '../../core/http/http-response';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  private _appsViewModel : AppsViewModel[];

  constructor(private _httpResponse : HttpResponse) { }

  public getApps(): AppsViewModel[] {
    this._httpResponse = this._httpResponse.get('urlApps');
    return this._appsViewModel = <AppsViewModel[]>this._httpResponse.data;
  }
}
