import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function UserProfile()
{
    const navigate = useNavigate();

    return (
            <div className="flex-col r-02 user-profile-div">
                <h3>Welcome Back!</h3>
                <button onClick={() => {
                    localStorage.setItem("authenticated", false);
                    navigate("/");
                }}>Log Out</button>
            </div>
    );
}

export default UserProfile;