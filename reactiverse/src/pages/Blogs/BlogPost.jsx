import classes from './BlogPost.module.css'

const BlogPost = ({author, body}) => {
  return (
    <>
    {(body?.length > 0 || author?.length > 0) && (<div className={classes.post}>
      <p className={classes.body}>{body}</p>
      <p className={classes.author}>{author}</p>
    </div>) }
    </>
  )
}

export default BlogPost