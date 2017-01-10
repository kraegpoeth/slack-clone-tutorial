import { Meteor } from 'meteor/meteor';
//import { Session } from 'meteor/session';
import { Messages } from './messages.js';

Meteor.methods({
  newMessage:function(message){
     message.createAt = Date.now();
     message.user = Meteor.userId();
     message.username = Meteor.user().username;
  //   message.channel = Session.get("channel");
     Messages.insert(message);
  }
});
