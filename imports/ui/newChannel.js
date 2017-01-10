import { Template } from 'meteor/templating';
import {Session} from 'meteor/session';

import './newChannel.html';

Template.newChannel.events({
  "focus .newChannelName": function(e){
    e.target.value = '';
  },
  "blur .newChannelName": function(e){
    e.target.value = 'Create New Channel';
  },
  "submit .createNewChannel": function(e) {

    e.preventDefault();
    const name = e.target.newChannelName.value;
    Meteor.call("newChannel", name);

    //clear input
    e.target.newChannelName.value = 'Create New Channel';
    e.target.newChannelName.blur();

    Session.set("channel", name);
    FlowRouter.setParams({channel: name})
  }
});
