import { Meteor } from 'meteor/meteor';
import { Messages } from '../../api/messages.js';

Meteor.startup(function(){
  if (Messages.find().count() === 0) {
    for (var i = 0; i < 10; i++) {
      Messages.insert({text: " A stupid dummy message"});
    }
  }
});
