import React from 'react';
import Header from '../../components/Header/Header';
import Description from '../../components/AbtDescription/Description';

const About = () => {

    return (
        <div>
            <br/>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Description />
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </div>

        </div>
    );
};

export default About;