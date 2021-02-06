import React from 'react';
import Header from '../../components/Header/Header';
import Description from '../../components/AbtDescription/Description';

const About = () => {
    const styles = {
        descriptionDiv: {
            border: "thick solid #FF0000",
            textAlign: "center",
            borderRadius: 10,
            padding: 40

        }
    }
    return (
        <div>
            <br/>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12" id="descriptionDiv" style={styles.descriptionDiv}>
                        <Description />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;