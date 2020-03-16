import closeCard from './actions/closeCard';
import openCard from './actions/openCard';
import loginUser from './actions/loginUser';
import signupUser from './actions/signupUser';
import makeDeposit from './actions/makeDeposit';
import makeWithdraw from './actions/makeWithdraw';
import makeExchange from './actions/makeExchange';
import getExtract from './actions/getExtract';
import sendMessage from './actions/sendMessage';

export default class ActionService {
    processAction(action, data, state, setState) {
        switch (action) {
            case 'closeCard':
                return closeCard(data, state, setState);
            case 'openCard':
                return openCard(data, state, setState);
            case 'sendMessage':
                return sendMessage(data, state, setState);
            case 'loginUser':
                return loginUser(data, state, setState);
            case 'signupUser':
                return signupUser(data, state, setState);
            case 'makeDeposit':
                return makeDeposit(data, state, setState);
            case 'makeWithdraw':
                return makeWithdraw(data, state, setState);
            case 'makeExchange':
                return makeExchange(data, state, setState);
            case 'getExtract':
                return getExtract(data, state, setState);
            default:
                return state;
        }
    }
}
