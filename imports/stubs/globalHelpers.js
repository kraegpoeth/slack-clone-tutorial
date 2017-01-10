import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Moment } from 'meteor/momentjs:moment';
import { Accounts } from 'meteor/accounts-base';


import { Messages } from '../api/messages.js';


Template.registerHelper("timeFormatted", function(createdAt){
  return moment(createdAt).format('HH:mm:ss')
});
