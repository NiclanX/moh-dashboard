import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import UsersPage from "./Components/UsersPage";
import MainLayout from "./Components/MainLayout";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import NoWhere from "./Components/NoWhere";
import ProtectedRoute from "./services/ProtectedRoute";
import ApplicationsPage from "./Components/ApplicationsPage";
import ProfilePage from "./Components/ProfilePage";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NoWhere />} />
            </Route>
            <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
                <Route index element={<Dashboard />} />
                <Route path='applications' element={<ApplicationsPage/>} />
                <Route path="users" element={<UsersPage />} />
                <Route path="users/:id" element={<ProfilePage/>}/>
            </Route>
        </>
    )
)
