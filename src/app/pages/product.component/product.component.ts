import { Component, signal, inject } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  Validators,
  NonNullableFormBuilder
} from '@angular/forms';

export interface ProductModel {
  productName?: string;
  productPrice?: number;
  productQuantity?: number;
  productCategory?: string;
  productDescription?: string;
}

@Component({
  selector: 'app-product.component',
  standalone: false,
  styleUrl: './product.component.css',
  templateUrl: './product.component.html',
})
export class ProductComponent {

  private readonly fb = inject(NonNullableFormBuilder);
  product = this.fb.group({
    productName: ['', Validators.required],
    productPrice: [0, Validators.required],
    productQuantity: [0, Validators.required],
    productCategory: ['', Validators.required],
    productDescription: ['']
  })

  displayedColumns: string[] = ['productName', 'productPrice', 'productQuantity', 'productCategory', 'productDescription'];
  dataSource: ProductModel[] = [];

  public productlist = signal<ProductModel[]>([]);

  public saveProduct() {
    const rawValue: ProductModel = this.product.getRawValue();
    this.productlist.update((currentProd) => [...currentProd, rawValue]);
    console.log(this.productlist())
    this.dataSource = this.productlist();
    this.product.reset();
  }
}