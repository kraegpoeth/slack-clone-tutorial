import { Accounts } from 'meteor/accounts-base';

Accounts.config({
  sendVerificationEmail: true,
});
Accounts.ui.config({

  passwordSignupFields: "USERNAME_AND_EMAIL",
});
