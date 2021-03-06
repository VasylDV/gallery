import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then((m) => m.GalleryModule) },
  { path: '', redirectTo: 'gallery', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
