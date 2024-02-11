import { Link } from "react-router-dom";

const PassengerList = () => {
  return (
    <div>
      <Link to="/dashboard/passengers/1"> Passenger 1 </Link>
      <br />
      <Link to="/dashboard/passengers/2"> Passenger 2 </Link>
      <br />
      <Link to="/dashboard/passengers/3"> Passenger 3 </Link>
      <br />
      <br />
      <Link to="/dashboard/passengers/addPassenger"> Add A Passenger Form </Link>
      <br />
      <br />
    </div>
  );
}

export default PassengerList
