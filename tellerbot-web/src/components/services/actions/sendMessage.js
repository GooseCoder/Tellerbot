import ChatService from '../ChatService';
import CardService from '../CardService';
import BotService from '../BotService';

export default function sendMessage(data, state, setState) {
    const chatService = new ChatService();
    const cardService = new CardService();
    const botService = new BotService();

    const newState = {
        ...state,
        messages: [
            ...state.messages,
            {
                user: { ...state.loggedUser },
                publishDate: new Date().toDateString('yyyy-MM-dd'),
                content: data.content,
                type: 'outgoing',
                id: Math.random()
                    .toString(36)
                    .substring(7)
            }
        ]
    };
    setState(newState);

    chatService.sendMessage(data.content).then(res => {
        if (res.data.success) {
            if (
                cardService.authorizedCard(
                    res.data.intent,
                    newState.configuration
                )
            ) {
                if (res.data.intent === 'extract') {
                    res.data.state = newState;
                }

                if (
                    res.data.intent === 'deposit' ||
                    res.data.intent === 'withdraw'
                ) {
                    res.data.accountId = newState.loggedUser.accounts[0].id;
                    res.data.currencyCode =
                        newState.loggedUser.accounts[0].currency_code;
                }

                const card = {
                    ...cardService.getCard(res.data),
                    publishDate: new Date().toDateString()
                };
                setState({
                    ...newState,
                    messages: [
                        ...newState.messages,
                        botService.custom(res.data.dialog),
                        card
                    ]
                });
            } else {
                setState({
                    ...newState,
                    messages: [
                        ...newState.messages,
                        botService.custom('Please Log into your account first')
                    ]
                });
            }
        }
        document
            .getElementById('chatbox')
            .scrollTo(0, document.getElementById('chatbox').scrollHeight);
    });
}
