import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";
import {
  saveUserToDB,
  setAuthError,
  setLoading,
  setUser,
  upsertUser,
  checkAdminStatus,
} from "../store/user";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.entities.user.userInfo);
  const authError = useSelector((state) => state.entities.user.error);
  const loading = useSelector((state) => state.entities.user.loading);
  const admin = useSelector((state) => state.entities.user.admin);

  dispatch(checkAdminStatus(user.email));

  // Register new user
  const registerUser = (name, email, password, navigate, location) => {
    dispatch(setLoading({ loading: true }));
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Empty error for successfully register
        dispatch(setAuthError({ error: "" }));

        // Save user data to Database
        dispatch(saveUserToDB({ name, email }));

        // Update user's name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            dispatch(setAuthError({ error: "" }));
          })
          .catch((error) => {
            dispatch(setAuthError({ error: error.message }));
          });

        // Redirect user to the page where they come from
        redirectInitialPage(navigate, location);
      })
      .catch((error) => {
        // Set error
        dispatch(setAuthError({ error: error.message }));
      })
      .finally(() => {
        // update loading status
        dispatch(setLoading({ loading: false }));
      });
  };

  // Login with email and password
  const loginWithEmailAndPassword = (email, password, navigate, location) => {
    dispatch(setLoading({ loading: true }));
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Empty error for successfully login
        dispatch(setAuthError({ error: "" }));
        // Redirect user to the page where they come from
        redirectInitialPage(navigate, location);
      })
      .catch((error) => {
        // Set error to the error
        dispatch(setAuthError({ error: error.message }));
      })
      .finally(() => {
        // Update loading status
        dispatch(setLoading({ loading: false }));
      });
  };

  // Google sign in
  const signInWithGoogle = (navigate, location) => {
    const googleProvider = new GoogleAuthProvider();

    // Set Loading status to true
    dispatch(setLoading({ loading: true }));

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        // Set user data to store
        dispatch(
          setUser({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );

        // Empty error for succfully login
        dispatch(setAuthError({ error: "" }));

        // Upsert user data to database
        dispatch(
          upsertUser({
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );

        // Redirect user to the page where they come from
        redirectInitialPage(navigate, location);
      })
      .catch((error) => {
        // Set auth error for login error.
        dispatch(setAuthError({ error: error.message }));
      })
      .finally(() => {
        // Set Loading status to false
        dispatch(setLoading({ loading: false }));
      });
  };

  // Observing user state
  useEffect(() => {
    // dispatch(setLoading({ loading: true }));
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        // dispatch(setLoading({ loading: false }));
      } else {
      }
    });
    return () => unsubscribe;
  }, [auth]);

  // Log Out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Redirect Initial Page
  const redirectInitialPage = (navigate, location) => {
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return {
    user,
    authError,
    loading,
    admin,
    registerUser,
    loginWithEmailAndPassword,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
