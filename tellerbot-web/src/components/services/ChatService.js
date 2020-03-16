import axios from 'axios';

export default class ChatService {
    sendMessage(message) {
        return axios.post(`http://localhost:8181/api/chat`, { message });
    }
}
