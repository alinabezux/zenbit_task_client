import {BrowserRouter, Route, Routes} from "react-router-dom";

import {HomePage, LogInPage} from "./pages";
import {Header} from "./components";
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/logIn'} element={<LogInPage/>}/>
                <Route path={'/signUp'} element={<LogInPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
