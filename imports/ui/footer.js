import { Template } from 'meteor/templating';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

import { Messages } from '../api/messages.js';

import './footer.html'


Template.footer.events({
  "keypress input": function(e){
      let inputVal = $('.input-box_text').val();
      if (!!inputVal) {
        let charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        if (charCode == 13) {
          e.stopPropagation();

          check(inputVal, String);
          Messages.insert({
            text: inputVal,
            user: Meteor.userId(),
            username: Meteor.user().username,
            createdAt: Date.now()
          });


          $('.input-box_text').val("");
          return false;
        }
      }
  }
});
