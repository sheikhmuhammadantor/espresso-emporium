import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

function MainLayout() {
    return (
        <>
            <Header />
            <main className="container mx-auto my-12 px-5">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
