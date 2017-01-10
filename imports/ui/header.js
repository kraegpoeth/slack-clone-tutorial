import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './header.html';

Template.header.helpers({
  currentChannel(){
     return Session.get("channel");
  }
});
