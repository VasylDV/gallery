import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { GalleryService } from '../services/gallery.service';
import { IPhoto } from '../interfaces/photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [NgbCarouselConfig],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {
  images$: Observable<IPhoto[]>;
  public images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/600`);
  constructor(config: NgbCarouselConfig, public galleryService: GalleryService) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    // this.images$ = this.getPhotos$();
    this.getPhotos$().subscribe((r) => console.log('RESP_]', r));
  }

  getPhotos$(): Observable<IPhoto[]> {
    return this.galleryService.getPhotos$();
}

}
