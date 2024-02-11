import { Route, Routes } from "react-router-dom"
import AdminHome from "../modules/Admin/Admin";
export const AdminRoutes: React.FC = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<AdminHome />} >
            </Route>
          </Routes>
        </>
      );
}