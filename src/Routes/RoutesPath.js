import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Accommodation from '../Pages/Accommodation/Accommodation';
import APropos from "../Pages/A-propos/APropos";
import Error404 from "../Pages/Error/404";

/**
 * The `RoutesPath` function is a React component that defines the routes for the application using the `react-router-dom` library. 
 * It sets up the routing configuration for different paths and maps them to specific components.
 * 
 * @function
 * @name RoutesPath
 * @kind function
 * @returns {React.JSX.Element}
 */
function RoutesPath() {
    return (
        <Router>
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
        </Router>
    );
}

export default RoutesPath;
