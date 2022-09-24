import React from 'react';

function NavbarItem (props)
{
    return (
        <li className="r-02">
            <a className="purple" href={ props.linkTo } >
               <span> { props.icon } </span>
                { props.value }
            </a>
        </li>
    );
};

export default NavbarItem;