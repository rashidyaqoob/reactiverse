import BlogModel from './BlogModel';
import classes from './BlogNewPost.module.css';

const BlogNewPost = ({ isModel, modelHandler, bodyEntered, authorEntered, submitHandler}) => {
  return (
    <>
      {isModel && (
        <BlogModel>
          <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor='body' className={classes.label}>Description</label>
            <input type='textarea' id='body' className={classes.description} onChange={bodyEntered} />
            <label htmlFor='author' className={classes.label}>Author</label>
            <input type='text' id='author' className={classes.author} onChange={authorEntered} />
            <button onClick={modelHandler}>Close</button>
            <button>Submit</button>
          </form>
        </BlogModel>
      )}
    </>
  );
};

export default BlogNewPost;
