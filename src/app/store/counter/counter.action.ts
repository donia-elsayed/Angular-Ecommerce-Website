import { Action } from "@ngrx/store";
export class AddCounterAction implements Action{
  readonly type = "ADD_COUNTER";
  constructor(public payload:number){}
}
