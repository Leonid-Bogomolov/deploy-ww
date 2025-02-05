import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"

const Layout = () => {
    return (
        <>
        <Header />
        <main>
            <Outlet />              {/* Это специальный компонент, импортируемый из библиотеки React-Router-Dom, который понимает, что нам нужно встроить в зависимости от маршрута. */}
        </main>
        <Footer />        
        </>
    )
}

export default Layout