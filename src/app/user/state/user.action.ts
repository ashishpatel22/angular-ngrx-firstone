import { User } from './../user';
import { Action } from '@ngrx/store';


export enum UserActionTypes {
    MaskUserName = 'Mask [User] name',
    SetCurrentUser = 'Set current [User]',
    ClearCurrentUser = 'Clear current [User]'
}

export class MaskUserName implements Action {
    readonly type: string = UserActionTypes.MaskUserName;

    constructor(public payload: boolean) {}    
}

export class SetCurrentUser implements Action {
    readonly type: string = UserActionTypes.SetCurrentUser

    constructor(public payload: User) {}    
}

export class ClearCurrentUser implements Action {
    readonly type: string = UserActionTypes.ClearCurrentUser
    public payload: string = '';

    constructor() {}    
}

export type UserActions = MaskUserName 
| SetCurrentUser
| ClearCurrentUser

