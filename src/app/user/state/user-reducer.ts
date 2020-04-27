import { UserActions, UserActionTypes } from './user.action';
import { User } from './../user';
import * as fromRoot from '../../state/app.State'
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    user: UserState
}

export interface UserState {
    maskUserName: boolean
    currentUser: User        
}

const initialState: UserState =  {
    maskUserName: true,
    currentUser:  null
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUsername = createSelector(
    getUserFeatureState,
    userState => userState.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureState,
    userState => userState.currentUser
);

export function userReduer(state: UserState = initialState , action : UserActions) {

    console.log('Initial user state :' + JSON.stringify(state));
    console.log('user payload  :' + action.payload);
    switch (action.type) {
        case UserActionTypes.MaskUserName:
            
        return {
            ...state,
            maskUserName:  action.payload
        }

        case UserActionTypes.SetCurrentUser:
            
        return {
            ...state,
            currentUser:  action.payload
        }

        case UserActionTypes.ClearCurrentUser:
            
        return {
            ...state,
            currentUser:  null
        }
    
        default:
        return {
            ...state
        }
    }
}