function CommentSection({ comments }) {

   const date = new Date().toLocaleDateString();

  return (
   <div className="comments">
      {comments.length ? (
      comments.map((comment, index) => (
         <div key={index} className="comment">
            <p className="email-p">{comment.email}</p>
            <p className="date-p">{date}</p>
            <p>{comment.comment}</p>
         </div>
      ))
      ) : (
      <p>Sem comentários ainda.</p>
      )}
   </div>
  );
  
}

export default CommentSection;
