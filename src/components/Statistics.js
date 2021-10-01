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
                progress={teacherProgress}
                onClick={() => {
                    setTeacherProgress(0.3)
                }}
            />
            <Statistic
                name='student'
                icon={<EmojiPeopleIconOutlined/>}
                progress={studentProgress}
                onClick={() => {
                    setStudentProgress(1.00)
                }}/>
            <Statistic
                name='attendance'
                icon={<CalendarTodayIconOutlined/>}
                progress={attendanceProgress}
                onClick={() => {
                    setAttendanceProgress(0.7)
                }}/>
            <Statistic
                name='comfort'
                icon={<EmojiEmotionsOutlinedIcon/>}
                progress={comfortProgress}
                onClick={() => {
                    setComfortProgress(0.05)
                }}/>
        </div>
    );
};

Statistics.propTypes = {};

export default Statistics;