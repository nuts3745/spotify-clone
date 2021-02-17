import HomeIcon from "@material-ui/icons/Home";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SearchIcon from "@material-ui/icons/Search";
import React from 'react';
import { useDataLayerValue } from "./DataLayer";
import './Sidebar.css';
import SidebarOption from './SidebarOption';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt='logo' />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
            <hr />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />

            {playlists?.items?.map(playlists => (
                <SidebarOption title={playlists.name} />
            ))}
        </div>
    )
}

export default Sidebar
