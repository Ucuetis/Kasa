import React from "react";
import "./Layout.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

/**
 * The `function Layout({ children }) {` block is defining the functional component `Layout`. 
 * It takes an object as a parameter and destructures the `children` property from that object. 
 * The `children` property represents the content that will be rendered inside the `Layout` component.
 * 
 * @function
 * @name Layout
 * @kind function
 * @param {{ children: any }} { children }
 * @returns {React.JSX.Element}
 */
function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
