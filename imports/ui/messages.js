import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { moment } from 'meteor/momentjs:moment';

import { Messages } from '../api/messages.js';

import './message.html';

import './messages.html';



Template.messages.helpers({
  messages: function(){
     return Messages.find({});
  },
});


Template.registerHelper("timeFormatted", function(createdAt){
  return moment(createdAt).format('HH:mm:ss')
});
