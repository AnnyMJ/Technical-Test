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
                    <button>Find Out More</button>
                </div>
            </div>
            <img className="img" src={image} alt=''/>
        </div>
    )
};

export default MainContent;
