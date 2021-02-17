import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from 'react';
import { useDataLayerValue } from "./DataLayer";
import './Header.css';

function Header() {
    const [{ user }, dipatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search"
                    type="text" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="userIcon" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
