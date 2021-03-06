import { Template } from 'meteor/templating';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

import { Messages } from '../../api/messages.js';

import './footer.html';


Template.footer.events({
  /*
  "keypress input": function(e){
      let inputVal = $('.input-box_text').val();
      if (!!inputVal) {
        let charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        if (charCode == 13) {
          e.stopPropagation();

          check(inputVal, String);
          Meteor.call("newMessage", {
            text: inputVal,
            channel: Session.get('channel')

          });

          $('.input-box_text').val("");
          return false;
        }
      }
  },*/
  "submit .input-box":function(e){
    e.preventDefault();
    let inputVal = e.target.text.value;
    /*
    if (!Meteor.user) {
      const username = 'Anonymous';
      const user = 'Anonymous';

      check(inputVal, String);
      Meteor.call("newMessage", {
        text: inputVal,
        channel: Session.get('channel'),
        user: user,
        username: username
      });

      inputVal = '';

      return false;
    }
    */
    if (!!inputVal) {
      check(inputVal, String);
      Meteor.call("newMessage", {
        text: inputVal,
        channel: Session.get('channel')
      });

      e.target.text.value = '';
    }
  }
});

Template.footer.helpers({
  connectionStatus() {
    if (!!Meteor.userId()) {
      return 'online'
    } if (!Meteor.userId()) {
      return 'offline'
    } else {
      return 'pending'
    }
  }
});
