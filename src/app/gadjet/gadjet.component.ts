import { Component, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TesComponent } from '../tes/tes.component';

@Component({
  selector: 'app-gadjet',
  templateUrl: './gadjet.component.html',
  styleUrls: ['./gadjet.component.scss']
})
export class GadjetComponent implements OnInit {
  private _removeListener = () => {};

  private clicking = false;
  private targetId: string;

  public gadjetMap = {
    hoge: {
      width: 30,
      height: 30
    },
    moge: {
      width: 30,
      height: 30
    }
  }

  public gadjetKeyList = Object.keys(this.gadjetMap);
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, private _zone: NgZone, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._zone.runOutsideAngular(() => {
      this._removeListener = this._renderer.listen('window', 'mousemove', (event: MouseEvent) => {
        this._zone.run(() => console.log(event));
      })
    })
  }

  onClickResize($event) {
    console.log($event)
  }

  onClick() {
    const dialogRef = this.dialog.open(TesComponent)
  }
}
