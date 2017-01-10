import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { Fake } from 'meteor/anti:fake';
import { _ } from 'meteor/underscore';

import { Messages } from '../../api/messages.js';
import { Channels } from '../../api/channels.js';

Meteor.startup(function(){
  //define fake messages
  Factory.define('message', Messages, {
    text: function() {
      return Fake.sentence();
    },
    username: function() {
      return Fake.word();
    },
    user: Meteor.users.findOne()._id,
    createdAt: Date.now(),
    channel: 'general'
  });


  //seed db with initial messages
  if (Messages.find({}).count() === 0) {
    const seeder = _(10).times(function(n) {
      Factory.create('message');
    });
    return seeder;
  };

  //Seed db with initial channels
  if (Channels.find().count() === 0) {
    const data = [
      {
        name: 'general'
      },
      {
        name: 'random'
      }
    ];



    data.forEach((channel) => {
      const channelId = Channels.insert({
        name: channel.name
      });

    });
  };



});
