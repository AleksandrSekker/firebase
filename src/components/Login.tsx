import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { app } from 'firebase/app';
import { Redirect } from 'react-router-dom';
import '../firebase';

app();
export default class Login extends Component {
  state = {
    isSignedIn: false,
  };

  uiConfig = {
    signInFlow: 'popup',

    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => this.setState({ isSignedIn: !!user }));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  unregisterAuthObserver() {
    throw new Error('Method not implemented.');
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      );
    }
    return <Redirect to="home" />;
  }
}
