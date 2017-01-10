import { Meteor } from 'meteor/meteor';

import { Messages } from './messages.js';
import { Channels } from './channels.js';

Meteor.methods({
  newMessage:function(message){
     message.createdAt = Date.now();
     message.user = Meteor.userId();
     message.username = Meteor.user().username;
  //   message.channel = Session.get("channel");
     Messages.insert(message);
  },
  /*
  newChannel:function(channel){
    channel.createdAt = Date.now();
    channel.owner = Meteor.userId();
    Channels.insert(channel);
  },
  */
  'newChannel'(name) {
    //check(name, String);
    //make sure the user is lgged in fefore inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    if (name !== ''){
      Channels.insert({
        name: name,
        createdAt: new Date(),
        owner: this.userId
      });
    } else {
      throw new Meteor.Error('Channel must have a name')
    }

  },
});
