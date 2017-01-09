import { Template } from 'meteor/templating';
import { Messages } from '../api/messages.js';

import './messages.html';
import './message.html';


Template.messages.helpers({
  messages: function(){
     return Messages.find({});
  },
});
