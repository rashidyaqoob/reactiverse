/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import BlogsHeader from './BlogsHeader'
import BlogPost from './BlogPost'
import BlogNewPost from './BlogNewPost';
import axios from 'axios';

const Blogs = () => {
  const [isModel, setIsModel] = useState(false);
  const [author, setAuthor] = useState();
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  function authorEntered(e) {
    setAuthor(e.target.value)
  }
  function bodyEntered(e) {
    setBody(e.target.value)
  }
  function openModel() {
    setIsModel(true);
  }
  function closeModel() {
    setIsModel(false);
  }
  async function submitHandler(e) {
    e.preventDefault();
    closeModel();

    const newPost = {
      author: author,
      body: body,
    };
    setPosts([newPost, ...posts]); 
    try {
      await axios.post('http://localhost:8000/posts', newPost);
    }
    catch(err) {
      console.log(err)
    }

  }
  useEffect(()=> {
    async function fetchPosts() {
      const res = await axios.get('http://localhost:8000/posts', {author, body})
      const existingPosts = await res.data;
      setPosts(existingPosts, ...posts)
    }
    fetchPosts();
  },[])
  return (
    <div style={{ maxWidth: "1190px", margin: '70px auto' }}>
      <BlogsHeader modelHandler={openModel}/>
      <BlogNewPost isModel= {isModel} modelHandler={closeModel} authorEntered={authorEntered} bodyEntered={bodyEntered} submitHandler={submitHandler}/>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {posts.length === 0 && (<div style={{marginTop: '32px'}}>No posts yet. Please add new posts</div>) }
        {posts.map(post=> <BlogPost key={post.author} author={post.author} body={post.body}/> )}
      </div>
    </div>
  )
}
export default Blogs