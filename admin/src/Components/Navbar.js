import React from 'react';
import Logo from '../data/MrServiceLogo.svg';
import { Link, NavLink } from 'react-router-dom';
import { links } from "../data/dummy"
import { useStateContext } from '../contexts/ContextProvider';

function Navbar ( props )
{
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSideBar = () => {
        if(activeMenu && screenSize <= 900) {
            setActiveMenu(false);
        }
    }

    return (
        <div style={{opacity: props.display, width: props.width}}
             className="flex-col navbar">

            <div className="flex justify-center navbar__upper-part">
                <Link className="flex items-center"
                      to="/" onClick={ handleCloseSideBar }>
                    <img className="r-3 bg-purple" src={ Logo } alt="Mr Service Logo" />
                    <h3 className="purple">Mr Service</h3>
                </Link>

                {/*<button*/}
                {/*type="button"*/}
                {/*onClick={ () => {*/}
                {/*    setActiveMenu(!activeMenu);*/}
                {/*} }*/}
                {/*className="navbar__close-button">*/}
                {/*    <MdOutlineCancel />*/}
                {/*</button>*/}
            </div>

            <ul className="flex-col navbar__lower-part">
                {links.map((link) => (
                    <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={ handleCloseSideBar }
                        className={({ isActive }) =>
                            (isActive ? 'activeLink normalLink' : 'normalLink')}
                    >
                        <span>{link.icon}</span>
                        {link.value}
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;