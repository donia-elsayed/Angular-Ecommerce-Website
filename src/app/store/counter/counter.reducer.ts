import { AddCounterAction } from "./counter.action";

export function AddCounterReducer(state = 0, action: AddCounterAction) {
  switch (action.type) {
    case 'ADD_COUNTER': {
      return action.payload;
    }
    default:
      return state;
  }
}
