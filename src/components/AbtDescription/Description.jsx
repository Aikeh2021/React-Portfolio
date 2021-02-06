import React from 'react';

const Description = ({title}) => {
    const styles = {
        descriptionDiv: {
            border: "thick solid #FF0000",
            textAlign: "center",
            borderRadius: 10,
            padding: 40,
            fontFamily: 'Amaranth, sans-serif'

        },
        h1: {
            fontSize: 64
        }
    }
    return (
        <div id="descriptionDiv" style={styles.descriptionDiv}>
            <h1 style={styles.h1}>{title}</h1>
        </div>

    );
};

export default Description;