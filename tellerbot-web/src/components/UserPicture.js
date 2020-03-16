import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserPicture({ size, icon, user }) {
    let iconSize = size ? size : '3x';
    let iconType = icon ? icon : 'user';
    return <FontAwesomeIcon icon={iconType} size={iconSize} />;
}

export default UserPicture;
