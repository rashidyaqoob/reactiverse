import BlogModel from './BlogModel';
import classes from './BlogNewPost.module.css';

const BlogNewPost = ({ isModel, modelHandler }) => {
  console.log(isModel)
  return (
    <>
      {isModel && (
        <BlogModel>
          <form className={classes.form}>
            <label htmlFor='body' className={classes.label}>Description</label>
            <input type='textarea' id='body' className={classes.description} />
            <label htmlFor='author' className={classes.label}>Author</label>
            <input type='text' id='author' className={classes.author} />
            <button onClick={modelHandler}>Close</button>
            <button>Submit</button>
          </form>
        </BlogModel>
      )}
    </>
  );
};

export default BlogNewPost;
