
import classes from './BlogsHeader.module.css'

const BlogsHeader = ({modelHandler}) => {
  return (
    
    <button className={classes.btnNewPost} onClick={modelHandler}>Add new post</button>
    
  )
}

export default BlogsHeader