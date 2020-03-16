import axios from 'axios';
import BotService from '../BotService';

export default function makeExchange(data, state, setState) {
    return axios
        .get(
            `${state.configuration.api_url}/api/exchange?from=${data.currencyCode}&to=${data.targetCurrencyCode}&amount=${data.amount}`,
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(res => {
            if (res.data.amount) {
                const botService = new BotService();
                return setState({
                    ...state,
                    messages: [
                        ...state.messages.filter(message => {
                            return data.id !== message.id;
                        }),
                        botService.custom(
                            `${data.amount} ${
                                data.currencyCode
                            } are ${parseFloat(res.data.amount).toFixed(2)} ${
                                data.targetCurrencyCode
                            } if converted.`
                        )
                    ]
                });
            } else {
                const message = state.messages.find(
                    message => message.id === data.id
                );
                return setState({
                    ...state,
                    messages: [
                        ...state.messages.filter(message => {
                            return data.id !== message.id;
                        }),
                        {
                            ...message,
                            content: {
                                ...message.content,
                                data: { errors: res.data.errors }
                            }
                        }
                    ]
                });
            }
        });
}
