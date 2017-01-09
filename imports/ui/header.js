import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Email } from 'meteor/email';

//import '../startup/server/email.js';

import './header.html';

Template.header.events({
  "submit .email": function(e){
    e.preventDefault();
    const target = e.target;
    const email = target.text.value;

     Meteor.call("sendEmail", email);
     console.log("email sent to" + " " + email);
  }
});
