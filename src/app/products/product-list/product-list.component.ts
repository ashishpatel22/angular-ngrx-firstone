
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import {Store, select} from '@ngrx/store'
import * as fromProduct from '../../products/state/product.reducer';
import * as productActions from '../state/product.action';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(private productService: ProductService, private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
   /* this.sub = this.productService.selectedProductChanges$.subscribe(
      selectedProduct => this.selectedProduct = selectedProduct
    );  */

     // TODO unsubscribe
    this.store.pipe(select(fromProduct.getCurrentProduct)).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: (err: any) => this.errorMessage = err.error
    });

    // TODO unsubscribe
    this.store.pipe(select(fromProduct.getShowProductCode)).subscribe(
      showProductCode =>  this.displayCode = showProductCode
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(value: boolean): void {
    
     /* this.store.dispatch({
      type: 'TOGGLE_PRODUCT_CODE',
      payload: value
    });  */

    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
   // this.productService.changeSelectedProduct(this.productService.newProduct());
   this.store.dispatch(new productActions.InitializeCurrentProduct())
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }
}
