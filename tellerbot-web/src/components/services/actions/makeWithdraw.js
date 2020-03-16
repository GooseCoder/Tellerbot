import axios from 'axios';
import BotService from '../BotService';

export default function makeWithdraw(data, state, setState) {
    return axios
        .post(
            `${state.configuration.api_url}/api/transaction`,
            {
                amount: data.amount,
                type: 'WITHDRAW',
                currency_code: data.currencyCode,
                account_id: data.accountId,
                user_id: state.loggedUser.id,
                code: data.id
            },
            {
                headers: {
                    Authorization: `Bearer ${state.configuration.access_token}`,
                    'content-type': 'application/json'
                }
            }
        )
        .then(res => {
            if (res.data.success) {
                const botService = new BotService();
                return setState({
                    ...state,
                    messages: [
                        ...state.messages.filter(message => {
                            return data.id !== message.id;
                        }),
                        botService.custom(
                            `You have successfully deposited ${data.amount} ${data.currencyCode} into your account!`
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
