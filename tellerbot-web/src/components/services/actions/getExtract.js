import axios from 'axios';

export default function getExtract(state) {
    return axios.get(
        `${state.configuration.api_url}/api/account/${state.loggedUser.accounts[0].id}`,
        {
            headers: {
                Authorization: `Bearer ${state.configuration.access_token}`,
                'content-type': 'application/json'
            }
        }
    );
}
