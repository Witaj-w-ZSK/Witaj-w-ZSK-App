import React from "react";
import Card from "./Card";
import Statistics from "./Statistics";
import PropTypes from "prop-types";

const Box = ({
                 person,
                 quote,
                 image,
                 teacherDiff,
                 studentDiff,
                 attendanceDiff,
                 comfortDiff,
                 teacherProgress,
                 studentProgress,
                 attendanceProgress,
                 comfortProgress
             }) => {
    return (
        <div className="box">
            <Statistics
                teacherDiff={teacherDiff}
                studentDiff={studentDiff}
                attendanceDiff={attendanceDiff}
                comfortDiff={comfortDiff}
                teacherProgress={teacherProgress}
                studentProgress={studentProgress}
                attendanceProgress={attendanceProgress}
                comfortProgress={comfortProgress}
            />
            <Card person={person} quote={quote} image={image}/>
        </div>
    );
};

Box.propTypes = {
    teacherDiff: PropTypes.number,
    studentDiff: PropTypes.number,
    attendanceDiff: PropTypes.number,
    comfortDiff: PropTypes.number,
    teacherProgress: PropTypes.number,
    studentProgress: PropTypes.number,
    attendanceProgress: PropTypes.number,
    comfortProgress: PropTypes.number,
};

Box.defaultProps = {
    teacherDiff: 0.0,
    studentDiff: 0.0,
    attendanceDiff: 0.0,
    comfortDiff: 0.0,
    teacherProgress: 0.5,
    studentProgress: 0.5,
    attendanceProgress: 0.5,
    comfortProgress: 0.5,
}

export default Box;
