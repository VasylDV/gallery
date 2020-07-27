import {Observable} from 'rxjs';

export interface BaseHttpClientServiceInterface<T> {
  getData$(url: string): Observable<T>;
}
