import React, { useState } from 'react';


const Post = ({ postText }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  const handleShare = () => {
    alert('Post shared!');
  };

  return (
    <div className="post">
      <p>{postText}</p>
      <div className="actions">
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleComment}>Comment</button>
        <button onClick={handleShare}>Share</button>
      </div>
      <div className="comments">
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Post;
