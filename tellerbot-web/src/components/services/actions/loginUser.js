import axios from 'axios';
import BotService from '../BotService';

export default function loginUser(data, state, setState) {
    return axios
        .post(
            `${state.configuration.api_url}/api/login`,
            {
                grant_type: 'password',
                client_id: state.configuration.client_id,
                client_secret: state.configuration.client_secret,
                email: data.email,
                password: data.password,
                scope: '*'
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
                            'Congrats, you have been logged in. ;)'
                        )
                    ]
                });
            }
        })
        .catch(error => {
            if (error.response) {
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
                                data: { errors: error.response.data.errors }
                            }
                        }
                    ]
                });
            }
        });
}
