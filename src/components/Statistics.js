import Statistic from "./Statistic";
import SupervisorAccountIconOutlined from '@mui/icons-material/SupervisorAccountOutlined';
import EmojiPeopleIconOutlined from '@mui/icons-material/EmojiPeopleOutlined';
import CalendarTodayIconOutlined from '@mui/icons-material/CalendarTodayOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import PropTypes from "prop-types";

const Statistics = (
    {
        teacherDiff,
        studentDiff,
        attendanceDiff,
        comfortDiff,
        teacherProgress,
        studentProgress,
        attendanceProgress,
        comfortProgress
    }
) => {
    return (
        <div className='statistics'>
            <Statistic
                name='teacher'
                icon={<SupervisorAccountIconOutlined/>}
                progress={teacherProgress}
                diff={teacherDiff}/>
            <Statistic
                name='student'
                icon={<EmojiPeopleIconOutlined/>}
                progress={studentProgress}
                diff={studentDiff}/>
            <Statistic
                name='attendance'
                icon={<CalendarTodayIconOutlined/>}
                progress={attendanceProgress}
                diff={attendanceDiff}/>
            <Statistic
                name='comfort'
                icon={<EmojiEmotionsOutlinedIcon/>}
                progress={comfortProgress}
                diff={comfortDiff}/>
        </div>
    );
};

Statistics.propTypes = {
    teacherDiff: PropTypes.number,
    studentDiff: PropTypes.number,
    attendanceDiff: PropTypes.number,
    comfortDiff: PropTypes.number,
    teacherProgress: PropTypes.number,
    studentProgress: PropTypes.number,
    attendanceProgress: PropTypes.number,
    comfortProgress: PropTypes.number,
};

Statistic.defaultProps = {
    teacherDiff: 0.0,
    studentDiff: 0.0,
    attendanceDiff: 0.0,
    comfortDiff: 0.0,
    teacherProgress: 0.5,
    studentProgress: 0.5,
    attendanceProgress: 0.5,
    comfortProgress: 0.5,
}

export default Statistics;