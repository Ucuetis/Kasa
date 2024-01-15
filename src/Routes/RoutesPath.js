import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Accommodation from '../Pages/Accommodation/Accommodation';
import APropos from "../Pages/A-propos/APropos";
import Error404 from "../Pages/Error/404";


/**
 * Represents the routing configuration for the application.
 * 
 * @type {HashRouter} The HashRouter instance.
 * @returns {JSX.Element} The JSX element representing the routing configuration.
 */
function RoutesPath() {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    {/* Default route for the Home component */}
                    <Route path="/" element={<Home />} />

                    {/* Route for the Accommodation component */}
                    <Route path="/logement/:id" element={<Accommodation />} />

                    {/* Route for the APropos component */}
                    <Route path="/a-propos" element={<APropos />} />

                    {/* Route for the Error404 component */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;
