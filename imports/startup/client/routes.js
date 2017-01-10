import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';

FlowRouter.route("/", {
  triggersEnter: [function(context, redirect){
    redirect('/general');
  }],
  action: function(_params) {
    throw new Error('this should not get called');
  }
});

FlowRouter.route("/:channel", {
  triggersEnter: [function(context) {
    Session.set("channel", context.params.channel);
    console.log(Session.get("channel"));
  }],
  action: function(params) {

    BlazeLayout.render("room", {
      content: "messages",
      params: params
    });
  }
});
