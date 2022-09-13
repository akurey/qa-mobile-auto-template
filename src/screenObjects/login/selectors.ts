export const login = {
  emailInput: {
    android: 'com.caremonster.appcelerator.qa:id/email',
    iOS: 'signInEmailTextField',
  },

  passwordInput: {
    android: 'com.caremonster.appcelerator.qa:id/editTextPassword',
    iOS: 'signInPasswordTextField',
  },

  loginBtn: {
    android: 'com.caremonster.appcelerator.qa:id/buttonSignIn',
    iOS: 'signInSignInButton',
  },
  wrongCredentialsMsg: {
    android: 'Your credentials are wrong!',
    iOS: 'Login Failed',
  },
  popUpOkBtn: {
    android: '',
    iOS: 'okButton',
  },
  failedLogInTxt: {
    android: 'Your credentials are wrong!',
    iOS: 'Login failed',
  },
};
