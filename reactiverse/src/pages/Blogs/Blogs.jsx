import React, { useState } from 'react'
import BlogsHeader from './BlogsHeader'
import BlogPost from './BlogPost'
import BlogNewPost from './BlogNewPost'

const Blogs = () => {
  const [isModel, setIsModel] = useState(false);
  function openModel(e) {
    setIsModel(true);
    console.log(isModel)
  }
  function closeModel(e) {
    setIsModel(false);
    console.log(isModel)
  }
  return (
    <div style={{ maxWidth: "1190px", margin: '70px auto' }}>
    <BlogsHeader modelHandler={openModel}/>
    <BlogNewPost isModel= {isModel} modelHandler={closeModel}/>
    <BlogPost/>
    </div>
  )
}

export default Blogs