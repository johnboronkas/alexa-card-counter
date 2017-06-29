'use strict';

var APP_ID = 'amzn1.ask.skill.dc5fa280-1660-4aa3-aefb-d2f824ae60eb';
var Alexa = require('alexa-sdk');

var handlers = {
    'NewSession': function() {
        this.emit(':tell', 'Lets get started. I\'ll say a series of cards and you tell me what the card count is using the REKO method.');
        this.emit(':ask', '7, 3, Jack. What\'s the current count?'); // TODO
    },
    'AMAZON.StopIntent': function() {
        this.emit(':tell', 'Goodbye!');  
    },
    'AMAZON.CancelIntent': function() {
        this.emit(':tell', 'Goodbye!');  
    },
    'AMAZON.HelpIntent': function() {
        this.emit(':tell', 'I intend to help, but I don\'t know how to yet.');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AnswerIntent': function () {
        var answer = parseInt(this.event.request.intent.slots.number.value);
        if (answer == 1) {
            this.emit(':tell', 'You are correct!');
        } else {
            this.emit(':tell', 'Incorrect, the count is 1.');
        }

        // this.emit(':ask', ''); // TODO
    }
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
