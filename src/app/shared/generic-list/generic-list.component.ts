import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css'],
  standalone:false
})
export class GenericListComponent {
  @Input() title: string = ''; // Title of the list
  @Input() data: any[] = []; // Array of data to display
  @Input() fields: string[] = []; // Fields to display in each item
  @Input() headers: string[] = []; // Headers for the table columns
}