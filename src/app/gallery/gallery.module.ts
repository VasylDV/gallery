import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EvComponent } from './ev/ev.component';
import { SlideComponent } from './components/slide/slide.component';

@NgModule({
  declarations: [PhotosComponent, EvComponent, SlideComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgbModule
  ],
  exports: [PhotosComponent]
})
export class GalleryModule { }
