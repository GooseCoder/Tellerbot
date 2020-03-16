export default function closeCard(data, state, setState) {
    return setState({
        ...state,
        messages: state.messages.filter(message => {
            return data.id !== message.id;
        })
    });
}
