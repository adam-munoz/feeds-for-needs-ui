import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

const material = [
  MatToolbarModule,
  MatExpansionModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatGridListModule
];

@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
