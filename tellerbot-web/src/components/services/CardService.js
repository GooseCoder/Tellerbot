export default class CardService {
    getCard(data) {
        switch (data.intent) {
            case 'login':
                return {
                    type: 'card',
                    content: {
                        title: 'Please Login',
                        type: 'login',
                        data: {}
                    },
                    id: Math.random()
                        .toString(36)
                        .substring(7)
                };
            case 'signup':
                return {
                    type: 'card',
                    content: {
                        title: 'SignUp Form',
                        type: 'signup',
                        data: {}
                    },
                    id: Math.random()
                        .toString(36)
                        .substring(7)
                };
            case 'exchange':
                return {
                    type: 'card',
                    content: {
                        title: 'Exchange Rates',
                        type: 'exchange',
                        data: data
                    },
                    id: Math.random()
                        .toString(36)
                        .substring(7)
                };
            case 'deposit':
                return {
                    type: 'card',
                    content: {
                        title: 'Deposit into account',
                        type: 'deposit',
                        data: data
                    },
                    id: Math.random()
                        .toString(36)
                        .substring(7)
                };
            case 'extract':
                return {
                    type: 'card',
                    content: {
                        title: 'Account balance',
                        type: 'extract',
                        data: data
                    },
                    id: Math.random()
                        .toString(36)
                        .substring(7)
                };
            case 'withdraw':
                return {
                    type: 'card',
                    content: {
                        title: 'Withdraw from account',
                        type: 'withdraw',
                        data: data
                    },
                    id: Math.random()
                        .toString(36)
                        .substring(7)
                };
            case 'help':
                return {
                    type: 'card',
                    content: {
                        title: 'How to use this bot',
                        type: 'help',
                        data: data
                    },
                    id: Math.random()
                        .toString(36)
                        .substring(7)
                };
            default:
                return {
                    type: 'card',
                    content: {
                        title: 'This is a message from you bank',
                        type: 'message',
                        data: {}
                    },
                    id: Math.random()
                        .toString(36)
                        .substring(7)
                };
        }
    }

    authorizedCard(data, configuration) {
        const guardedIntents = ['withdraw', 'extract', 'deposit'];
        const guarded = guardedIntents.find(element => element === data.intent);
        if (!guarded || (guarded && configuration.access_token)) {
            return true;
        }
        return false;
    }
}
