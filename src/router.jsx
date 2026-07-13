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
import AboutPage from "./Components/AboutPage";
import ReportsPage from "./Components/ReportsPage";
import ReportTest from "./Components/ReportTest";
import SettingsPage from "./pages/SettingsPage";
import MyApplicationsPage from "./Components/MyApplicationsPage";

let user = ['employee']


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        {/* Routes Accesible outside of app */}
            <Route>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="about" element={<AboutPage/>} />
            </Route>
        
        {/* Routes Accessible inside of app */}
            <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
        
                <Route index element={<Dashboard />} />
                <Route path='applications' element={<ApplicationsPage/>} />
                <Route path='myapplications' element={<MyApplicationsPage/>} />
                <Route path="users" element={<UsersPage />} />
                <Route path="users/:id" element={<ProfilePage/>}/>
                <Route path="settings" element={<SettingsPage/>}>
                    <Route index element={<NoWhere/>} />
                    <Route path="*" element={<NoWhere/>} />
                </Route>
                <Route path="reports" element={<ReportsPage/>}>
                    <Route index element={<ReportTest/>}/>
                    <Route path="*" element={<NoWhere />} />
                </Route>
                <Route path="*" element={<NoWhere />} />                
            </Route>
        </>
    )
)
