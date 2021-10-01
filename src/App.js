import { browserrouter as router } from "react-router-dom";
import Header from "./components/Header";
import Box from "./components/Box";
import AdminPanel from "./components/AdminPanel";
function App() {
    return (
        <AdminPanel />
        // <Router>
        //     <div className="container">
        //         <center>
        //             <Header title="Witaj w ZSK" />
        //             <Box />
        //         </center>
        //     </div>
        // </Router>
    );
}

export default App;
