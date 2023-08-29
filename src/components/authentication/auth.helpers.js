import {
  createUser,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

export const signInWith = {
  google: signInWithGooglePopup,
  emailAndPassword: signInAuthWithEmailAndPassword,
};

export const signUpWith = {
  google: async () => {
    const response = await signInWithGooglePopup();

    await createUser(response.user);
  },
  emailAndPassword: async (email, password, displayName) => {
    const response = await createAuthUserWithEmailAndPassword(email, password);

    await createUser(response.user, { displayName });
  },
};
