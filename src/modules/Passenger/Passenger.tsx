import { Link, useParams } from "react-router-dom";

const Passenger: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Hi I am passenger with id - {id}</h1>
      <Link to="/dashboard/passengers"> Go Back to List </Link>
      <br />
    </>
  );
}

export default Passenger
