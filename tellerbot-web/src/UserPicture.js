import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserPicture({ size, icon, user }) {
    let iconSize = size ? size : '3x';
    let iconType = icon ? icon : 'user';
    let image =
        user.type === 'guest' || user.type === 'tellerbot' ? (
            <FontAwesomeIcon icon={iconType} size={iconSize} />
        ) : (
            <img src="/user.png" alt="User profile" />
        );
    return <div className="is-circle">{image}</div>;
}

export default UserPicture;
