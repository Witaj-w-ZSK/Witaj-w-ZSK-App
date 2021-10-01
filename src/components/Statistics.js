import React from 'react';
import PropTypes from 'prop-types';
import Statistic from "./Statistic";
import SupervisorAccountIconOutlined from '@mui/icons-material/SupervisorAccountOutlined';
import EmojiPeopleIconOutlined from '@mui/icons-material/EmojiPeopleOutlined';
import CalendarTodayIconOutlined from '@mui/icons-material/CalendarTodayOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

const Statistics = ({props}) => {
    return (
        <div className='statistics'>
            <Statistic name='teacher' icon={<SupervisorAccountIconOutlined />} progress={0.95}/>
            <Statistic name='student' icon={<EmojiPeopleIconOutlined />} progress={0.7}/>
            <Statistic name='attendance' icon={<CalendarTodayIconOutlined />} progress={0.05}/>
            <Statistic name='comfort' icon={<EmojiEmotionsOutlinedIcon />} progress={0.3}/>
        </div>
    );
};

Statistics.propTypes = {

};

export default Statistics;