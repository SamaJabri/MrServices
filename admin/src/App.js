import React, {useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Navbar from './Components/Navbar';
import SectionOne from './pages/SectionOne';
import Header from './Components/Header';
import HeaderAndFooter from './pages/HeaderAndFooter';
import ContactUs from './pages/ContactUs';
import Socials from './pages/Socials';
import PricingPlan from './pages/PricingPlan';
import Download from './pages/Download';
import HowItWorks from './pages/HowItWorks';
import Screenshot from './pages/Screenshot';
import Features from './pages/Features';
import AboutApp from './pages/AboutApp';
import { useStateContext } from './contexts/ContextProvider';
import AboutAppDetails from './pages/AboutAppDetails';

function App() {
    const { activeMenu } = useStateContext();
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));

    useEffect(() => {
        const loggedUser = localStorage.getItem("authenticated");
        if(loggedUser === "true") {
            setAuthenticated(loggedUser);
        }
        else {
            navigate('/')
        }
    }, []);

    const navigate = useNavigate();

    if(!authenticated) {
        return navigate('/');
    }

    else {
        return (
            <div>
                    {
                        activeMenu ? (
                            <div>
                                <Navbar display="1" width="16rem" />
                                <Header margin="16rem" />
                            </div>
                        ) : (
                            <div>
                                <Navbar display="0" width="0"/>
                                <Header />
                            </div>
                        )
                    }

                    <div>
                        <Routes>
                            <Route path="/section-one" element={<SectionOne />}/>
                            <Route path="/about" element={(<AboutApp />)}/>
                            <Route path="/about-details" element={(<AboutAppDetails />)}/>
                            <Route path="/features" element={(<Features />)}/>
                            <Route path="/screenshot" element={(<Screenshot />)}/>
                            <Route path="/how-it-works" element={(<HowItWorks />)}/>
                            <Route path="/download" element={(<Download />)}/>
                            <Route path="/pricing-plan" element={(<PricingPlan />)}/>
                            <Route path="/socials" element={(<Socials />)}/>
                            <Route path="/contact" element={(<ContactUs />)}/>
                            <Route path="/header&footer" element={(<HeaderAndFooter />)}/>
                        </Routes>
                    </div>

            </div>
        );
    }
}

export default App;
