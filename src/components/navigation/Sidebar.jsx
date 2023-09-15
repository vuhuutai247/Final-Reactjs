import { AiFillHome } from 'react-icons/ai';
import { FiMusic, FiUsers, FiRadio, FiHeart, FiLogIn } from 'react-icons/fi';
import { SiApplemusic } from 'react-icons/si';
import { PiPlaylist } from 'react-icons/pi'
import NavLink from './NavLink';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link className='app-logo' href='/' >
                <SiApplemusic />
                <span>Music Web</span>
            </Link>

            <div>
                <h2>DISCOVER</h2>

                <ul>
                    <li>
                        <NavLink slug=''>
                            <AiFillHome />
                            <span>Home</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='top_tracks'>
                            <FiMusic />
                            <span>Songs</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='top_artists'>
                            <FiUsers />
                            <span>Artists</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='radio'>
                            <FiRadio />
                            <span>Radio</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <h2>LIBRARY</h2>
                <ul>
                    <li>
                        <NavLink slug='favorites'>
                            <FiHeart />
                            <span>Favorites</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink slug='my-playlists'>
                            <PiPlaylist/>
                            <span>Playlists</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <NavLink slug='login'>
                    <FiLogIn/>
                    <span>Login</span>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Sidebar;
