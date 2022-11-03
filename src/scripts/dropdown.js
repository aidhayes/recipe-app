import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
//import {BsPersonCircle} from 'react-icons/bs';
/**
 * Creates a profile dropdown menu when a user will be able to login or sign up.
 * @returns Profile dropdown menu
 */
function ProfileDropdown() {
    return (
        //TODO: Make default icon as profile icon
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" />
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Sign Up</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ProfileDropdown;