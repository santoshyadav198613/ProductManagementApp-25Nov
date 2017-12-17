import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductFilterPipe } from '../custom/product-filter.pipe';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ProductFilterPipe,
    MatButtonModule,
    MatDialogModule,
    NavbarComponent],
  declarations: [ProductFilterPipe,NavbarComponent]
})
export class SharedModule { }
