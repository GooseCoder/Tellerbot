import React from 'react';
import UserPicture from './UserPicture';

function UserMenu({ user }) {
    const { type, username } = user;
    const { displayUsername } = type === 'guest' ? '' : username;
    return (
        <span className="media ">
            <div className="media-left">
                <UserPicture user={user} />
            </div>
            <div className="media-content">
                <div className="is-size-6">{displayUsername}</div>
                <div className="is-size-6">{type}</div>
            </div>
        </span>
    );
}

export default UserMenu;
