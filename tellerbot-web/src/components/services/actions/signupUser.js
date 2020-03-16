import axios from 'axios';
import BotService from '../BotService';

export default function signupUser(data, state, setState) {
    data.name = data.username;
    data.type = 'customer';
    data.accounts[0].code = Math.random()
        .toString(36)
        .substring(7);
    data.accounts[0].type = 'savings';
    console.log('data', data);
    //    delete data.account;
    //  console.log('data2', data);

    return axios
        .post(
            `${state.configuration.api_url}/api/register`,
            {
                ...data
            },
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
        .then(res => {
            if (res.data.success) {
                const botService = new BotService();
                return setState({
                    configuration: {
                        ...state.configuration,
                        access_token: res.data.access_token
                    },
                    loggedUser: res.data.user,
                    messages: [
                        ...state.messages.filter(message => {
                            return data.id !== message.id;
                        }),
                        botService.custom(
                            `User ${data.email} created successfully!`
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
