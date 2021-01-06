import { takeLatest, call, all, put } from 'redux-saga/effects';
import UserActionTypes from 'redux/user/user.types';
import {
  googleSignInSuccess,
  googleSignInFailure,
} from 'redux/user/user.action';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from 'firebase/firebase.utils';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );

    console.log(userRef);
  } catch (err) {
    yield put(googleSignInFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
