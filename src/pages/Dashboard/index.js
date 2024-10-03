import { useNavigate } from "react-router-dom";

function DashBoard() {

  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/resumes/edit');
  }

  return (
    <>
      <button className="btn btn-success" onClick={handleClick}>Create your resume</button>
    </>
  );
}

export default DashBoard;
