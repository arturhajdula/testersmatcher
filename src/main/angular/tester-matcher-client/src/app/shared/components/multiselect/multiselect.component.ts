import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiSelectComponent implements OnInit {

  @Input() title: string;
  @Input() options: { key?: number, value: string };
  @Output() selectionChanged: EventEmitter<Set<String>> = new EventEmitter<Set<String>>();
  @ViewChild('select') select: MatSelect;

  prevSelectedOptions: Set<string>;
  allSelected: boolean;

  ngOnInit(): void {
    this.allSelected = false;
    this.prevSelectedOptions = new Set<string>();
  }

  toggleAllSelection() {
    if (this.allSelected) {
      this.selectAll();
    } else {
      this.delesectAll();
    }
  }

  optionClick() {
    this.allSelected = this.select.options.toArray().every((item: MatOption) => item.selected);
  }

  onSelectedOpenedChange(openSelection: boolean) {
    if (openSelection) {
      this.prevSelectedOptions = this.getSelectedOptions();
    } else {
      const selectedOptions: Set<string> = this.getSelectedOptions();
      const areSetsEqual = (a: Set<any>, b: Set<any>) => a.size === b.size && [...a].every(value => b.has(value));
      
      if (!areSetsEqual(selectedOptions, this.prevSelectedOptions)) {
        this.selectionChanged.emit(selectedOptions);
      }
    }
  }

  private selectAll() {
    this.select.options.forEach((item: MatOption) => item.select());
  }

  private delesectAll() {
    this.select.options.forEach((item: MatOption) => item.deselect());
  }

  private getSelectedOptions(): Set<string> {
    return new Set(this.select.options.filter((item: MatOption) => item.selected).map(item => item.value));
  }

}

