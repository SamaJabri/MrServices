import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';

import Logo from '../data/MrServiceLogo.svg';
import Messages from './Messages';
import UserProfile from './UserProfile';
import { useStateContext } from '../contexts/ContextProvider';


const NavButton = (props) => {
    return (
        <button type="button" onClick={props.customFunc}
        className="header__buttons">
            {props.icon}
        </button>
    )
}

function Header(props)
{
    const { setActiveMenu, screenSize, setScreenSize} = useStateContext();

    const [userProfile, setUserProfile] = useState(false);

    useEffect( () => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        handleResize()

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect( () => {
        if(screenSize <= 900) {
            setActiveMenu(false);
        }
        else {
            setActiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className="flex header" style={{marginLeft: props.margin}}>
            <NavButton icon={<AiOutlineMenu />}
                title="Menu" customFunc={ () => {
                setActiveMenu((prevActiveMenu) => !prevActiveMenu)
            }} />

            <div className="flex items-center header__right">
                {/*<NavButton icon={<BsChatLeft />}*/}
                {/*           title="Message" customFunc={ () => {*/}
                {/*    handleClick('message')*/}
                {/*}} />*/}

                <div className="flex items-center header__user"
                     onClick={ () => {
                         setUserProfile(!userProfile);
                     }}>
                    <img src={ Logo } alt="User Profile"
                         className="r-3"/>
                </div>

                {/*{isClicked.message && <Messages />}*/}
                {userProfile && <UserProfile />}
            </div>

        </div>
    );
}

export default Header;