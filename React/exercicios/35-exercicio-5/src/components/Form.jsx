import { useState } from "react";

function Form({ addComment }) {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim() && comment.trim()) {
      addComment({email, comment});
      setEmail("");
      setComment("");
    }
  }

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />

      <label htmlFor="comment">Comentário:</label>
      <textarea
        name="comment"
        id="comment"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>

      <button type="submit">Enviar Comentário!</button>
    </form>
  );
}

export default Form;
