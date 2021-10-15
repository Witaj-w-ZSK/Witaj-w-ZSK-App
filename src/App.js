import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Box from "./components/Box";
import AdminPanel from "./components/AdminPanel";
import {useState} from "react";

function App() {

    const [person, setPerson] = useState("Uczen ZSK");
    const [quote, setQuote] = useState(
        "Stało się właśnie nawiększa rzecz w szkole i nikt nie wie co to."
    );
    const [image, setImage] = useState(
        `${process.env.PUBLIC_URL}/images/uczen_ZSK.png`
    );
    const [teacherDiff, setTeacherDiff] = useState(1.0)
    const [studentDiff, setStudentDiff] = useState(-0.5)
    const [attendanceDiff, setAttendanceDiff] = useState(0.0)
    const [comfortDiff, setComfortDiff] = useState(0.5)

    const [teacherProgress, setTeacherProgress] = useState(0.05)
    const [studentProgress, setStudentProgress] = useState(0.7)
    const [attendanceProgress, setAttendanceProgress] = useState(0.95)
    const [comfortProgress, setComfortProgress] = useState(0.3)

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <center>
                        <div className="container" onClick={{/*() => {
                            setComfortDiff(0.0)
                            setComfortProgress(comfortProgress+comfortDiff/10)
                            setStudentDiff(0.0)
                            setStudentProgress(studentProgress+studentDiff/10)
                            setTeacherDiff(0.0)
                            setTeacherProgress(teacherProgress+teacherDiff/10)
                        }*/}}>
                            <Header title="Witaj w ZSK"/>
                            <Box person={person}
                                 quote={quote}
                                 image={image}
                                 teacherDiff={teacherDiff}
                                 studentDiff={studentDiff}
                                 attendanceDiff={attendanceDiff}
                                 comfortDiff={comfortDiff}
                                 teacherProgress={teacherProgress}
                                 studentProgress={studentProgress}
                                 attendanceProgress={attendanceProgress}
                                 comfortProgress={comfortProgress}
                            />
                        </div>
                    </center>
                </Route>
                <Route path="/admin" exact>
                    <AdminPanel/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
