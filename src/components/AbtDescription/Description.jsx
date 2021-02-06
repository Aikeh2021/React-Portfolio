import React from 'react';

const Description = () => {
    const styles = {
        descriptionDiv: {
            border: "thick solid #FFC0CB",
            textAlign: "center",
            borderRadius: 10,
            padding: 40,
            fontFamily: 'Amaranth, sans-serif',
            fontSize: "3rem"

        }
    }
    return (
        <div id="descriptionDiv" style={styles.descriptionDiv}>
            <h1>Meet Ashley! A Dev in the Making...</h1>
        </div>

    );
};

export default Description;