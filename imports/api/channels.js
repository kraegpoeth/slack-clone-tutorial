import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Channels = new Mongo.Collection("channels");
