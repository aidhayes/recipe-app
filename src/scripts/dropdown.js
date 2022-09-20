import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootsrap/Image';
import React from 'react';
function ProfileDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic-button"
            title={
                <Image src=""/>
            }>
                Profile
            </Dropdown.Toggle>
        </Dropdown>
    );
}

export default ProfileDropdown;