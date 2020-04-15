import React from 'react';

const IconSeparate = ({icon, color, inlineStyle}) => {
    return (
        <div className="section-seprate">
        <div className={`btn-diamond ` + (color === 'blue' ? 'blue' : 'black')}>
          <img src={icon} alt="icon" className={(color === 'blue' ? 'blue' : 'black')}/>
        </div>
      </div>
    );
};

export default IconSeparate;