import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Channels } from '../api/channels.js'


import './messages.js';
import './footer.js';
import '../startup/client/accounts-config.js';
import '../stubs/globalHelpers.js';
import './listings.js';
import './header.js';

import './room.html';

Template.room.onCreated(function() {
  Meteor.subscribe("channels");
});
