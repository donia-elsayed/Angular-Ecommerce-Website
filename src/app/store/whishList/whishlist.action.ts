import { Action } from "@ngrx/store";

export const ADD_PRODUCT_WISH_LIST = "ADD_PRODUCT_WISH_LIST";
export class AddWishListAction implements Action{
  readonly type = ADD_PRODUCT_WISH_LIST ;
  constructor(public payload:Object){}
}

export const REMOVE_PRODUCT_WISH_LIST = "REMOVE_PRODUCT_WISH_LIST";
export class RemoveWishListAction implements Action{
  readonly type =  REMOVE_PRODUCT_WISH_LIST;
  constructor(public payload:Array<Object>){}
}

export type WishListActions = AddWishListAction | RemoveWishListAction;
