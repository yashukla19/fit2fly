import { Route, Routes } from "react-router-dom"
import PassengersHome from "../modules/Passenger/PassengersHome";
import Passenger from "../modules/Passenger/Passenger";
import AddPassenger from "../modules/Passenger/AddPassenger";

export const PassengerRoutes: React.FC = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<PassengersHome />} >
              <Route path=":id" element={<Passenger />} />
              <Route path="addPassenger" element={<AddPassenger />} />
          </Route>
        </Routes>
      </>
    );
}