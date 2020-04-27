import { Product } from './../product';
import { Action } from '@ngrx/store';


export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set currrent Product',
    ClearCurrentProduct = '[Product] clear current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product'
}

export class ToggleProductCode implements Action {
    readonly type: string = ProductActionTypes.ToggleProductCode;
    constructor(public payload: boolean) {}
}


export class SetCurrentProduct implements Action {
    readonly type: string = ProductActionTypes.SetCurrentProduct;
    constructor(public payload: Product) {}
}


export class ClearCurrentProduct implements Action {
    readonly type: string = ProductActionTypes.ClearCurrentProduct;
    public payload;
}


export class InitializeCurrentProduct implements Action {
    readonly type: string = ProductActionTypes.InitializeCurrentProduct;
    public payload;
}

export type ProductActions = ToggleProductCode 
| SetCurrentProduct 
| ClearCurrentProduct 
| InitializeCurrentProduct

