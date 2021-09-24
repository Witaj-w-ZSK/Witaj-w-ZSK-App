import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <div className='container'>
                <center>
                    <Header title='Witaj w ZSK'/>
                </center>
            </div>
        </Router>
    );
}

export default App;
