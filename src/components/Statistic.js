import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({name, icon, progress}) => {
    return (
        <div className='statistic'>
            <div className='progress' style={{
                height: 1 + progress * 79,
                backgroundColor: ((progress < 0.1) || (progress > 0.9)) ? '#836333' : '#856c4d'
            }}>
            </div>
            <div className='icon'>
                {icon}
            </div>
        </div>
    );
};

Statistic.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.element,
    progress: PropTypes.number,
};

Statistic.defaultProps = {
    progress: 0.5,
}

export default Statistic;