import React from 'react';

const content = (props) => {
    return (
       <React.Fragment>
            {props.children}
       </React.Fragment>
    );
};

export default content;