import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Reveal from 'react-reveal';
import 'animate.css/animate.css';

import DepositCard from './DepositCard';
import ExchangeCard from './ExchangeCard';
import ExtractCard from './ExtractCard';
import HelpCard from './HelpCard';
import LoginCard from './LoginCard';
import MessageCard from './MessageCard';
import SignUpCard from './SignUpCard';
import WithdrawCard from './WithdrawCard';

function Card({ id, title, dispatcher, type, data }) {
    let typedCard = <MessageCard />;

    switch (type) {
        case 'login':
            typedCard = (
                <LoginCard
                    id={id}
                    data={data}
                    loginHandler={dispatcher}
                    cancelHandler={dispatcher}
                />
            );
            break;
        case 'signup':
            typedCard = (
                <SignUpCard id={id} dispatcher={dispatcher} data={data} />
            );
            break;
        case 'help':
            typedCard = <HelpCard id={id} />;
            break;
        case 'withdraw':
            typedCard = (
                <WithdrawCard id={id} dispatcher={dispatcher} data={data} />
            );
            break;
        case 'deposit':
            typedCard = (
                <DepositCard id={id} dispatcher={dispatcher} data={data} />
            );
            break;
        case 'extract':
            typedCard = (
                <ExtractCard id={id} dispatcher={dispatcher} data={data} />
            );
            break;
        case 'exchange':
            typedCard = (
                <ExchangeCard id={id} dispatcher={dispatcher} data={data} />
            );
            break;
        default:
            typedCard = (
                <MessageCard id={id} dispatcher={dispatcher} data={data} />
            );
            break;
    }

    let errors = '';
    if (data.errors) {
        let errorList = [];
        for (let i in data.errors) {
            errorList.push(<ol key={i}>{data.errors[i]}</ol>);
        }
        errors = (
            <div className="notification is-danger">
                <ul>{errorList}</ul>
            </div>
        );
    }

    return (
        <Reveal effect="animated fadeInUp">
            <div className="card">
                {errors}
                <header className="card-header">
                    <p className="card-header-title">{title}</p>
                    <a
                        className="card-header-icon"
                        aria-label="more options"
                        onClick={() => dispatcher('closeCard', { id })}
                    >
                        <FontAwesomeIcon icon="times" size="1x" />
                    </a>
                </header>
                <div className="card-content">
                    <div className="content">{typedCard}</div>
                </div>
            </div>
        </Reveal>
    );
}

export default Card;
