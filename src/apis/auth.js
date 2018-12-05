import * as firebase from "firebase/app";

const signup = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      return Promise.resolve(user);
    })
    .catch(function(error) {
      return Promise.reject(error);
    });
};

const login = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        return Promise.resolve(user);
      })
      .catch(function(error) {
        return Promise.reject(error);
      });
  };

export {
    signup,
    login
}
