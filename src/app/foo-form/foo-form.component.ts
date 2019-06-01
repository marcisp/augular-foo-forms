import { Component } from '@angular/core';

import { Foo } from '../foo'

@Component({
  selector: 'app-foo-form',
  templateUrl: './foo-form.component.html',
  styleUrls: ['./foo-form.component.scss']
})
export class FooFormComponent {

  model = new Foo('');

  output = ''
  submitted = false;
  isInvalid = false;

  onKey(event: any) {
    const input = event.target.value
    if (this.isValidNumber(input)) {
      this.calculateOutput(input)
      this.removeError()
    } else {
      this.showError()
    }
  }

  isValidNumber(value) {
    return +value && !isNaN(value)
  }

  calculateOutput(input) {
    if (input % 15 === 0) {
      this.output = 'FooBar' // is divisible by 15
    } else if (input % 5 === 0) {
      this.output = 'Bar' // is divisible by 5
    } else if (input % 3 === 0) {
      this.output = 'Foo' // is divisible by 3
    } else {
      this.output = '' // is not divisible by 5 nor by 3
    }
  }

  showError() {
    this.isInvalid = true
    this.output = ''
  }

  removeError() {
    this.isInvalid = false
  }
}
