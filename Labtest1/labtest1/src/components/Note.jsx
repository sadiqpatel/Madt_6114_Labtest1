import { useParams, useNavigate } from 'react-router-dom';

function Note() {
  const { noteId } = useParams();
  const navigate = useNavigate();

  function handleGoBack() {
    navigate('/notes');
  }

  return (
    <div>
      <h1>Note {noteId}</h1>
      <p>This is the content of note {noteId}.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default Note;
