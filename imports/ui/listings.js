//import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Channels } from '../api/channels.js';

import './listings.html';
import './channel.html';
import './newChannel.js';





Template.listings.helpers({
  channels: function(){
     return Channels.find()
  },
  active: function(){
    if (Session.get('channel') === this.name) {
      return 'active';
    } else {
      return '';
    }
  }
});


Template.listings.events({
  "click .channel": function(e){
    Session.set('channel', this.name);
    console.log(Session.get("channel"));
  }
});
