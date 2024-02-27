import classes from './BlogPost.module.css'

const BlogPost = () => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be</p>
      <p className={classes.body}>Ras</p>
    </div>
  )
}

export default BlogPost