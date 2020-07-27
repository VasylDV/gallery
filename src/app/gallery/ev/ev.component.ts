import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ev',
  templateUrl: './ev.component.html',
  styleUrls: ['./ev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
