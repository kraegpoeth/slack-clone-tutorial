import { Email } from 'meteor/email';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function(){
  process.env.MAIL_URL = "smtp://postmaster%40sandbox10891399e7f74c75b7e4aea26d9f2e55.mailgun.org:c6f6b23c7ca0c03cabef3a84d28263a4@smtp.mailgun.org:587";
});

if(Meteor.isServer){


  Meteor.methods({
    sendEmail:function(email){
      Email.send({
        to: email,
        from: "mysecond@slacktutorial.com",
        subject: "Second email sent out",
        html: "<p>The is my second email sent from a web app!</p>"
      });
    }
  });
}
