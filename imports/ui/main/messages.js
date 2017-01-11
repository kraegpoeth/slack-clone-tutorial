import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Messages } from '../../api/messages.js';

import './message.html';
import './messages.html';


Template.messages.onCreated(function() {
  Tracker.autorun(function(){
     Meteor.subscribe("messages", Session.get('channel'));
  });


});


Template.messages.helpers({
  messages: function(){
    $('.message-history').scrollTop($('.message-history').prop('scrollHeight'));
     return Messages.find({}, {sort: { createdAt: 1}});
  },
});
