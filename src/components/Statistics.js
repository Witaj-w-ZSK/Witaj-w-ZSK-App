import React, {useState} from 'react';
import Statistic from "./Statistic";
import SupervisorAccountIconOutlined from '@mui/icons-material/SupervisorAccountOutlined';
import EmojiPeopleIconOutlined from '@mui/icons-material/EmojiPeopleOutlined';
import CalendarTodayIconOutlined from '@mui/icons-material/CalendarTodayOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

const Statistics = ({props}) => {
    const [teacherProgress, setTeacherProgress] = useState(0.05)
    const [studentProgress, setStudentProgress] = useState(0.7)
    const [attendanceProgress, setAttendanceProgress] = useState(0.95)
    const [comfortProgress, setComfortProgress] = useState(0.3)
    return (
        <div className='statistics'>

            <Statistic
                name='teacher'
                icon={<SupervisorAccountIconOutlined/>}
                progress={teacherProgress}/>
            <Statistic
                name='student'
                icon={<EmojiPeopleIconOutlined/>}
                progress={studentProgress}/>
            <Statistic
                name='attendance'
                icon={<CalendarTodayIconOutlined/>}
                progress={attendanceProgress}/>
            <Statistic
                name='comfort'
                icon={<EmojiEmotionsOutlinedIcon/>}
                progress={comfortProgress}/>
        </div>
    );
};

Statistics.propTypes = {};

export default Statistics;