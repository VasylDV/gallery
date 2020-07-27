import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/photo';
import { GalleryServiceInterface } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpClientService} from '../../services/base-http-client.service';

@Injectable({ providedIn: 'root' })
export class GalleryService extends BaseHttpClientService<IPhoto[]> implements GalleryServiceInterface {
  constructor(public http: HttpClient) { super(http); }

  public getPhotos$(): Observable<IPhoto[]> {
    return this.getData$('reqtwo');
  }
}
