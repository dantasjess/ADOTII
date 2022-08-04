import AppBar from "./AppBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <AppBar />
            <main>{children}</main>
            <Footer />
        </>
    )
};

export default Layout;