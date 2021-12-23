import { DOG_BREED_FAILURE, DOG_BREED_SUCCESS } from "../Actions/actionNames";

const initialState = {
  breedImg: '',
};
export default function breedReducer(state = initialState, action) {
    console.log(action.payload);
  switch (action.type) {
    case DOG_BREED_SUCCESS: {
      state = {
        ...state,
        breedImg: action.payload,
        // ...action.payload.breed,
      };
      break;
    }
    case DOG_BREED_FAILURE: {
      state = {
        ...state,
        ...action.payload.error,
      };
      break;
    }
    default:
      state = { ...state };
  }
  return state;
}
