import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import SectionOne from './pages/SectionOne';
import AboutApp from './pages/AboutApp';
import AboutAppDetails from './pages/AboutAppDetails';
import Features from './pages/Features';
import Screenshot from './pages/Screenshot';
import HowItWorks from './pages/HowItWorks';
import Download from './pages/Download';
import PricingPlan from './pages/PricingPlan';
import Socials from './pages/Socials';
import ContactUs from './pages/ContactUs';
import HeaderAndFooter from './pages/HeaderAndFooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
      <BrowserRouter>
          <div>
              <Routes>
                  <Route path="/" element={<Login />}/>
                  <Route path="/home" element={<App />}>
                      <Route exact={false} path="/home/section-one" element={<SectionOne />}/>
                      <Route path="/home/about" element={(<AboutApp />)}/>
                      <Route path="/home/about-details" element={(<AboutAppDetails />)}/>
                      <Route path="/home/features" element={(<Features />)}/>
                      <Route path="/home/screenshot" element={(<Screenshot />)}/>
                      <Route path="/home/how-it-works" element={(<HowItWorks />)}/>
                      <Route path="/home/download" element={(<Download />)}/>
                      <Route path="/home/pricing-plan" element={(<PricingPlan />)}/>
                      <Route path="/home/socials" element={(<Socials />)}/>
                      <Route path="/home/contact" element={(<ContactUs />)}/>
                      <Route path="/home/header&footer" element={(<HeaderAndFooter />)}/>
                  </Route>
              </Routes>
          </div>

      </BrowserRouter>
  </ContextProvider>
);

