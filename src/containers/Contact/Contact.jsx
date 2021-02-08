import React from 'react';
import Header from '../../components/Header/Header';
import Description from '../../components/AbtDescription/Description';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <br />
                        <Description title={"Need To Contact Ashley?"}/>
                        <br />
                        <Header />
                        <br />
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;