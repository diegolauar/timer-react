import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./style";

export function DeafaultLayout() {
    return (
        <LayoutContainer>
            <Header/>
            <Outlet/>
        </LayoutContainer>
    )
}