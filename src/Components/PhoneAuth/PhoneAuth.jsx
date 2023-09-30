import { useEffect } from "react";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'
import './PhoneAuth.css'


const PhoneAuth = () => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() ||  new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('.firebaseui-auth-container', {
          signInSuccessUrl: 'http://localhost:5173/',
          signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            {
              provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
              recaptchaParameters: {
                type: 'image', // 'audio'
                size: 'normal', // 'invisible' or 'compact'
                badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
              },
            }
          ],
          privacyPolicyUrl: '/'
        });
      },[])
    return (
        <div className="card firebaseui-auth-container ">
           
        </div>
    );
};

export default PhoneAuth;