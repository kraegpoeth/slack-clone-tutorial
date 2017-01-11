import { Meteor } from 'meteor/meteor';

import { Messages } from './messages.js';
import { Channels } from './channels.js';

Meteor.methods({
  newMessage:function(message){
    message.user = 'Anonymous';
    message.username = 'Anonymous';
    message.createdAt = Date.now();

    if (Meteor.userId()) {
      message.user = Meteor.userId();
      message.username = Meteor.user().username;
    }


     Messages.insert(message);
  },
  'newChannel'(name) {
    //check(name, String);
    //make sure the user is lgged in fefore inserting a task
    if (!this.userId) {
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
