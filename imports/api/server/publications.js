import { Meteor } from 'meteor/meteor';

import { Messages } from '../messages.js';

Meteor.publish("messages", function messagesPublication(){
  return Messages.find({});
});
