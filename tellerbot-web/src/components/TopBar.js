import React from 'react';
import UserMenu from './UserMenu';

function TopBar({ loggedUser }) {
    return (
        <nav
            className="navbar is-primary is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <div className="navbar-item">
                    <span className="is-size-4">Tellerbot</span>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <UserMenu user={loggedUser} />
                </div>
            </div>
        </nav>
    );
}

export default TopBar;
