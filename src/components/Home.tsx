import React, { ReactElement } from 'react';

import Images from './Images';
import Error from './Error';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Home(): ReactElement {
  return <div>{firebase.auth().currentUser ? <Images /> : <Error />}</div>;
}
