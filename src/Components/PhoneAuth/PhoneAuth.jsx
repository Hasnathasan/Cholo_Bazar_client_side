import { useEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import "./PhoneAuth.css";

const PhoneAuth = () => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: "http://localhost:5173/",
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: "image", // 'audio'
            size: "normal", // 'invisible' or 'compact'
            badge: "bottomleft", //' bottomright' or 'inline' applies to invisible.
          },
        },
        {
          provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
        },
      ],
      tosUrl: "https://google.com",
      // Privacy policy url/callback.
      privacyPolicyUrl: "https://google.com",
    });
  }, []);
  return <div className="card" id="firebaseui-auth-container"></div>;
};

export default PhoneAuth;
