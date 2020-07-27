import { Observable } from 'rxjs';
import { IPhoto } from '../../interfaces/photo';

export interface GalleryServiceInterface {
  getPhotos$(): Observable<IPhoto[]>;
}
