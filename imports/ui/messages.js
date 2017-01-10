import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Messages } from '../api/messages.js';

import './message.html';
import './messages.html';


Template.messages.onCreated(function() {
  Meteor.subscribe("messages");
});


Template.messages.helpers({
  messages: function(){
     return Messages.find({});
  },
});
