import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input() label: string | null = null;
  @Input({ required: true }) type: 'input' | 'password' = 'input';

  #onChange: any = () => {};
  #onTouch: any = () => {};
  #val: any = null;

  set value(val: any) {
    this.#val = val;
    this.#onChange(val);
    this.#onTouch(val);
  }

  writeValue(obj: any): void {
    console.log(this.value);
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.#onTouch = fn;
  }
}
