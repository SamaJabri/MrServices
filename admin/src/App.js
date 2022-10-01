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

function App(props) {
    const { activeMenu } = useStateContext();
    const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));

    useEffect(() => {
        const loggedUser = localStorage.getItem("authenticated");
        if(loggedUser === "true") {
            setAuthenticated(loggedUser);
        }
        else {
            navigate('/');
        }
    });

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
                            <Route path="/section-one" element={<SectionOne requestPath={props.requestPath} />}/>
                            <Route path="/about" element={(<AboutApp requestPath={props.requestPath} />)}/>
                            <Route path="/about-details" element={(<AboutAppDetails requestPath={props.requestPath} />)}/>
                            <Route path="/features" element={(<Features requestPath={props.requestPath} />)}/>
                            <Route path="/screenshot" element={(<Screenshot requestPath={props.requestPath} />)}/>
                            <Route path="/how-it-works" element={(<HowItWorks requestPath={props.requestPath} />)}/>
                            <Route path="/download" element={(<Download requestPath={props.requestPath} />)}/>
                            <Route path="/pricing-plan" element={(<PricingPlan requestPath={props.requestPath} />)}/>
                            <Route path="/socials" element={(<Socials requestPath={props.requestPath} />)}/>
                            <Route path="/contact" element={(<ContactUs requestPath={props.requestPath} />)}/>
                            <Route path="/header&footer" element={(<HeaderAndFooter requestPath={props.requestPath} />)}/>
                        </Routes>
                    </div>

            </div>
        );
    }
}

export default App;
