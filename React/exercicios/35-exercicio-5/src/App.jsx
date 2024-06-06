import { useState } from 'react';
import Form from './components/Form'
import CommentSection from './components/CommentSection'

function App() {

  const [comments, setComments] = useState([]);

  function addComment({email, comment}) {
    setComments([...comments, {email, comment}]);
  }

  return (
  <div className="page-div">
    <div className="form-div">
     <h2>Seção de Comentários</h2>
    <Form addComment={addComment}/>
     <hr />
     <CommentSection comments={comments}/>
    </div>
  </div>
  )
}

export default App
