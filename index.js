const alexa = require('alexa-sdk');

const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell', "Welcome to comedy central, I will share some jokes with you!");
    },
    'TellMeAJoke': function () {
        this.emit(':tell', "what is shark's favorite sandwich? A peanut butter and jellyfish sandwich!");
    }
};

exports.handler = (event, context) => {
    const handler = alexa.handler(event, context);
    handler.registerHandlers(handlers);
    handler.execute();
};
