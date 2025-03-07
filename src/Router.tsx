import { Route, Routes } from "react-router-dom";
import { History } from "./pages/History";
import { Home } from "./pages/Home";
import { DeafaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DeafaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/history" element={<History/>}/>
            </Route>
        </Routes>
    )
}