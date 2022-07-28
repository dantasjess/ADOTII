import AppBar from "./AppBar";

const Layout = ({ children }) => {
    return (
        <>
            <AppBar />
            <main>{children}</main>
        </>
    )
};

export default Layout;