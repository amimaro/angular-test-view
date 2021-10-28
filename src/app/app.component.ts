import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('btn') btn: ElementRef | undefined;
  @ViewChildren('btn') btnChildrens: QueryList<ElementRef> | undefined;

  ngAfterViewInit(): void {
    console.log('btn', this.btn);
    console.log('btnChildrens', this.btnChildrens);

    this.btnChildrens?.forEach((child) => {
      console.log('child', child);
      console.log('childInnerText', child.nativeElement.innerText);
    });
  }
}
