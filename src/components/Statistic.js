import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({name, icon, progress, diff}) => {
    diff = diff<0 ? diff * -1 : diff
    return (
        <div className='statistic'>
            {diff !== 0.0 && <div className='dot' style={{
                transform: `translate(-50%, 0) scale(${(diff === 1.0) ? '2' : '1'})`
            }}/>}
            <div className='progress' style={{
                height: 1 + progress * 69,
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
    onClick: PropTypes.func,
    diff: PropTypes.number,
};

Statistic.defaultProps = {
    progress: 0.5,
    diff: 0.0
}

export default Statistic;