import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
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
const requestPath = "http://localhost:3001/";

root.render(
  <ContextProvider>
      <BrowserRouter basename="https://samajabri.github.io/MrServices" >
          <div>
              <Routes>
                  <Route path="/" element={<Login requestPath={requestPath} />}/>
                  <Route path="/home" element={<App requestPath={requestPath} />}>
                      <Route exact={false} path="/home/section-one" element={<SectionOne requestPath={requestPath} />}/>
                      <Route path="/home/about" element={(<AboutApp requestPath={requestPath} />)}/>
                      <Route path="/home/about-details" element={(<AboutAppDetails requestPath={requestPath} />)}/>
                      <Route path="/home/features" element={(<Features requestPath={requestPath} />)}/>
                      <Route path="/home/screenshot" element={(<Screenshot requestPath={requestPath} />)}/>
                      <Route path="/home/how-it-works" element={(<HowItWorks requestPath={requestPath} />)}/>
                      <Route path="/home/download" element={(<Download requestPath={requestPath} />)}/>
                      <Route path="/home/pricing-plan" element={(<PricingPlan requestPath={requestPath} />)}/>
                      <Route path="/home/socials" element={(<Socials requestPath={requestPath} />)}/>
                      <Route path="/home/contact" element={(<ContactUs requestPath={requestPath} />)}/>
                      <Route path="/home/header&footer" element={(<HeaderAndFooter requestPath={requestPath} />)}/>
                  </Route>
              </Routes>
          </div>

      </BrowserRouter>
  </ContextProvider>
);

