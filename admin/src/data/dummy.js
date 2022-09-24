import { MdScreenshot, MdInfoOutline, MdWorkOutline,
    MdOutlineCloudDownload, MdOutlineMessage} from 'react-icons/md'
import { AiOutlineDollarCircle, AiOutlinePicCenter, AiOutlineBlock } from 'react-icons/ai'
import { IoShareSocialOutline, IoEnterOutline } from 'react-icons/io5'
import React from 'react';

export const links = [

            {
                name: 'home/section-one',
                icon: <IoEnterOutline />,
                value: 'Section 1'
            },
            {
                name: 'home/about',
                icon: <MdInfoOutline />,
                value: 'About App'
            },
            {
                name: 'home/features',
                icon: <AiOutlineBlock />,
                value: 'Features'
            },
            {
                name: 'home/screenshot',
                icon: <MdScreenshot />,
                value: 'Screenshot'
            },
            {
                name: 'home/how-it-works',
                icon: <MdWorkOutline />,
                value: 'How It Works'
            },
            {
                name: 'home/download',
                icon: <MdOutlineCloudDownload />,
                value: 'Download'
            },
            {
                name: 'home/pricing-plan',
                icon: <AiOutlineDollarCircle />,
                value: 'Pricing Plan'
            },
            {
                name: 'home/socials',
                icon: <IoShareSocialOutline />,
                value: 'Socials'
            },
            {
                name: 'home/contact',
                icon: <MdOutlineMessage />,
                value: 'Contact Us'
            },
            {
                name: 'home/header&footer',
                icon: <AiOutlinePicCenter />,
                value: 'Header & Footer'
            }

];