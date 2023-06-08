import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    @ViewChild('inputElement') inputElement!: ElementRef;
    displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4'];
    dataSource: Element[] = [
      { column1: 'Value 1', column2: 10, column3: 'Value 3', column4: 'Value 4', isEditing: false },
      { column1: 'Value 1', column2: 20, column3: 'Value 3', column4: 'Value 4', isEditing: false },
      { column1: 'Value 1', column2: 30, column3: 'Value 3', column4: 'Value 4', isEditing: false },
      { column1: 'Value 1', column2: 40, column3: 'Value 3', column4: 'Value 4', isEditing: false },
    ];

    editValue(element: Element, index: number) {
      element.isEditing = true;
      setTimeout(() => {
        this.inputElement.nativeElement.focus();
        // this.inputElement.nativeElement.select();
      });
    }

    saveValue(element: Element) {
      element.isEditing = false;
      console.log('blured');
    }

}

interface Element {
    column1: string;
    column2: number;
    column3: string;
    column4: string;
    isEditing: boolean;
  }
