import React from 'react';
import UserPicture from './UserPicture';

function OutgoingMessage({ content, publishDate, user }) {
    return (
        <div className="media">
            <div className="media-content">
                <div className="content box is-size-5">{content}</div>
                <div className="is-size-6 has-text-right">
                    Sent at: {publishDate}
                </div>
            </div>
            <div className="media-right has-text-centered">
                <UserPicture size="3x" user={user} />
                <div>{user.username}</div>
            </div>
        </div>
    );
}

export default OutgoingMessage;
