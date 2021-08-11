import React from 'react';
import image from '../../assets/images/image.png';

import './styles.scss';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="main-content__title">
                Web Software Developer
                <p>Working on a better me</p>
                <div className="btn"> 
                    <a href='https://www.linkedin.com/in/anny-moronta/'>Find Out More</a>
                </div>
            </div>
            <img className="img" src={image} alt=''/>
        </div>
    )
};

export default MainContent;
