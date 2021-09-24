import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Box from "./components/Box";

function App() {
    return (
        <Router>
            <div className='container'>
                <center>
                    <Header title='Witaj w ZSK'/>
                    <Box />
                </center>
            </div>
        </Router>
    );
}

export default App;
