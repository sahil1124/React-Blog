import React,{useEffect,useState} from 'react';
import './style.css';
import  Card from '../UI/Card';
import blogPost from '../../data/blog.json'
import {NavLink} from 'react-router-dom';
import SocialMedia from '../SocialMedia'



const Sidebar = props =>{

  const[posts,setPosts]=useState([])

useEffect(()=>{

  const posts =blogPost.data;
  setPosts(posts)
},[posts]);


  return(
    <div className="sidebarContainer" style={{width:props.widh}}>
      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>About Us</span>

        </div>
        <div className="profileImagecontainer">
          <img src={require('../../blogPostImages/sahiljpg.jpg')} alt="sahil" />
        </div>
        <div className="cardBody">
          <p className="personalBio">My name is sahil sharma .i am a software developer specialized in both frontend and backend web development</p>
        </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <SocialMedia />
        </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">

          {
            posts.map(post=>{
              return(
                <NavLink to={`/post/${post.id}`} key={post.id}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
              )
            })
          }


        </div>
      </Card>
    </div>

  );
}

export default Sidebar;
