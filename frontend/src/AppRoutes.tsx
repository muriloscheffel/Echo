import { Suspense } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import HomePage from "./pages/HomePage";
import SetUsernameScreen from "./pages/SetUsernameScreen";

function isAuthenticated() {
  return !!localStorage.getItem("authToken")
}

function AppRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={isAuthenticated() ? <Navigate to="/home" /> : <Navigate to="/auth" />} />
                    <Route path="/auth" element={<AuthenticationPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/set-username" element={<SetUsernameScreen />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes;