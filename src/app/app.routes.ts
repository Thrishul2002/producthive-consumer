import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {path:'products',component:ProductComponent},
    {path:'add-product/:pid',component:CreateProductsComponent},
    {path:'product-details/:pid',component:ProductDetailsComponent}
];
