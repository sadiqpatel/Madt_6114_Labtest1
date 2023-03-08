import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleViewNotes() {
    navigate('/notes');
  }

  return (
    <div>
      <h1>Project Management Note Taking App</h1>
      <p>Welcome to our app!</p>
      <button onClick={handleViewNotes}>View Notes</button>
    </div>
  );
}

export default Home;
