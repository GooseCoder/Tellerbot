export default class BotService {
    greet() {
        return this.custom('Hello, How can I help you?');
    }

    defaultResponse() {
        return this.custom('Sure, let me see what can I do. :)');
    }

    custom(content) {
        const newDate = new Date();
        return {
            user: {
                id: '00001',
                username: 'TellerBot',
                type: 'tellerbot'
            },
            type: 'incoming',
            content: content,
            publishDate: newDate.toDateString(),
            id: Math.random()
                .toString(36)
                .substring(7)
        };
    }
}
