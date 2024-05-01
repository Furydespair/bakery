import React from 'react';
import './styles/footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <span>Created by @Furyxgood</span>
            <div className='text-decoraton-none footer_link_box'>
                <a className='text-decoration-none text-black' href='https://t.me/furyxgood'>Telegram</a>
                <a className='text-decoration-none text-black' href='https://www.twitch.tv/furyxgood'>Twitch</a>
                <a className='text-decoration-none text-black' href='https://www.instagram.com/zxceqiewu'>Instagram</a>
            </div>
        </div>
    );
};

export default Footer;