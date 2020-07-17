import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCheck, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
  @Input() options: Array<string>;
  @Input() selectedValue: string;
  @Output() selectedOption: EventEmitter<string> = new EventEmitter();

  public faCheck = faCheck;
  public faChevronDown = faChevronDown;
  public faChevronUp = faChevronUp;
  public selectedElement;
  public selectedNameElement: string;
  public showDropDown = false;

  constructor() { }

  ngOnInit(): void {
    if (this.selectedValue) {
      const index = this.options.indexOf(this.selectedValue);
      this.selectedNameElement = this.selectedValue;
      this.selectedElement = index;
    }
  }

  onSelect(option: string, index: number) {
    this.selectedElement = index;
    this.selectedNameElement = option;
    this.selectedOption.emit(option.replace( /\s/g, ''));
  }

  showHideDropDown() {
    this.showDropDown = !this.showDropDown;
  }

}
