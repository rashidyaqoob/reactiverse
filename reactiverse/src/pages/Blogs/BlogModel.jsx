import classes from './BlogModel.module.css';

const BlogModel = ({ children}) => {

  return (
    <>
      <div className={classes.modelOverlay} >
          <div className={classes.model}>{children}</div>
        </div>
    
    </>
  );
};

export default BlogModel;
