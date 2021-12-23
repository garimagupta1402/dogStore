import axios from "axios";
import { DOG_BREED_FAILURE , DOG_BREED_SUCCESS } from "./actionNames";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase";

export const dogApi = (breed) => {
  console.log('api Working');
  return async (dispatch) => {

    const response = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
   console.log(response, 'response');
    dispatch({ type: DOG_BREED_SUCCESS, payload: response.data.message });
  };
};

export const Register = (values) => {
  console.log(values);
  createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      console.log(values.name, values.lastname);
      //dm = `${values.name} ${values.lastname} `;
      const user = userCredential.user;
      console.log("user", userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const SignIn = (values) => {
  console.log(values);
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      const user = userCredential.user;
      return true;    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return false;
    });
};

