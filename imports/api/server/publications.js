import { Meteor } from 'meteor/meteor';

import { Messages } from '../messages.js';
import { Channels } from '../channels.js';


Meteor.publish("messages", function messagesPublication(channel){
  return Messages.find({channel: channel});
});
Meteor.publish("channels", function channelsPublication(){
  return Channels.find({});
});
