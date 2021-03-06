import { ProductActions, ProductActionTypes } from './product.action';
import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    products: ProductState
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[]
}

const initialState: ProductState = {
    showProductCode:  true,
    currentProduct: null,
    products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export function productReducer(state : ProductState = initialState, action: ProductActions): ProductState {

    console.log('Initial state :' + JSON.stringify(state));
   // console.log('payload  :' + action.payload);
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:

            return {
                ...state,
                showProductCode: action.payload
            }
        case ProductActionTypes.SetCurrentProduct:

        return {
            ...state,
            currentProduct: { ...action.payload}
        }
        case ProductActionTypes.ClearCurrentProduct:

        return {
            ...state,
            currentProduct: null
        }
        case ProductActionTypes.InitializeCurrentProduct:

        return {
            ...state,
            currentProduct: {
                id:0,
                productName: 'AKP',
                productCode: 'AKP01',
                description: "AKP Desc",
                starRating: 4
            }
        }
        default:

            return {
                ...state
            }
            break;
    }
}