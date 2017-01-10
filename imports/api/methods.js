import { Meteor } from 'meteor/meteor';

import { Messages } from './messages.js';

Meteor.methods({
  newMessage:function(message){
     message.createAt = Date.now();
     message.user = Meteor.userId();
     message.username = Meteor.user().username;
     Messages.insert(message);
  }
});
