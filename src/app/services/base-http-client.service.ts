import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseHttpClientServiceInterface } from './base-http-client-service.interface';

export abstract class BaseHttpClientService<T> implements BaseHttpClientServiceInterface<T> {
  apiUrl = 'http://localhost:3000';
  protected constructor(public http: HttpClient) {}
  getData$(url: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${url}`);
  }
}
