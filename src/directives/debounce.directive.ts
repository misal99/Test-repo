import { Directive, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[debouncedInput]',
})
export class DebounceDirective implements OnInit {
  private change = new Subject();
  @Output() debouncedChange = new EventEmitter();
  @Input() debounceTime: number;
  constructor() { }

  ngOnInit() {
    this.change.pipe(debounceTime(this.debounceTime))
      .pipe(distinctUntilChanged()).subscribe((event: any) => {
        this.debouncedChange.emit(event);
      });
  }

  @HostListener('keyup', ['$event'])
  changeEvent(event: any) {
      this.change.next(event.target.value);
  }
}
