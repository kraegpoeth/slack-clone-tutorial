import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { moment } from 'meteor/momentjs:moment';

import { Messages } from '../api/messages.js';

import './messages.html';
import './message.html';


Template.messages.helpers({
  messages: function(){
     return Messages.find({});
  },
});

/*
Template.registerHelper("timestampToTime", function(timestamp){
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});
*/

Template.registerHelper("timeFormatted", function(createdAt){
  return moment(createdAt).format('HH:mm:ss')
});
