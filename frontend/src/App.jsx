import { BrowserRouter,Route, Routes } from "react-router-dom"
import './App.css'
import { Signup } from "./routes/signup";
import { Signin } from "./routes/signin";
import { Dashboard } from "./routes/dashboard";
import { Blog } from "./routes/blog";

function App() {
    return <>

        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/Blog" element={<Blog/>}/>
                {/* <Route path="./routes/Create" element={<Create/>}/> */}
            </Routes>
        </BrowserRouter>
    </>
}

export default App
