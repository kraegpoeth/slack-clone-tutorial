import { Meteor } from 'meteor/meteor';
import { Messages } from '../../api/messages.js';
import { Factory } from 'meteor/dburles:factory';
import { Fake } from 'meteor/anti:fake';
import { _ } from 'meteor/underscore';

Meteor.startup(function(){
  Factory.define('message', Messages, {
    text: function() {
      return Fake.sentence();
    }
  });

  if (Messages.find({}).count() === 0) {
    const seeder = _(10).times(function(n) {
      Factory.create('message');
    });
    return seeder;
  }
});
