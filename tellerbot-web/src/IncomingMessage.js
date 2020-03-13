import React from 'react';
import UserPicture from './UserPicture';

function IncomingMessage({ content, publishDate, user }) {
    return (
        <div className="media">
            <div className="media-left has-text-centered">
                <UserPicture size="3x" user={user} icon="robot" />
                <div>{user.username}</div>
            </div>
            <div className="media-content">
                <div className="content box is-size-5 has-background-light">
                    {content}
                </div>
                <nav className="is-size-6">Sent at: {publishDate}</nav>
            </div>
        </div>
    );
}

export default IncomingMessage;
