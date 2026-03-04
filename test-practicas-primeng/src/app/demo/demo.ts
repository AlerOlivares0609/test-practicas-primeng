import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { DatePickerModule } from 'primeng/datepicker';
import { CheckboxModule } from 'primeng/checkbox';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-demo',
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    MultiSelectModule,
    DatePickerModule,
    CheckboxModule,
    ToggleButtonModule,
    SliderModule,
    RatingModule,
    ProgressBarModule,
    TagModule,
    TableModule,
    PanelModule,
    CardModule,
    MessageModule,
    ChipModule,
  ],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  cities = [
    { name: 'New York' },
    { name: 'London' },
    { name: 'Tokyo' },
    { name: 'Paris' },
  ];

  checked1 = false;
  checked2 = true;
  toggled = false;
  sliderValue = 40;
  rating = 3;
  tableData = [
    { name: 'Alice', country: 'USA', status: 'Active', severity: 'success' },
    { name: 'Bob', country: 'UK', status: 'Inactive', severity: 'danger' },
    { name: 'Carol', country: 'Japan', status: 'Pending', severity: 'warn' },
  ];
}
