import React,{useState,useEffect} from 'react'
import './style.css'
import Card from '../../../components/UI/Card';
import {NavLink} from 'react-router-dom';
import blogPost from '../../../data/blog.json'



const RecentPosts=props=>{

  const posts = blogPost.data
  console.log(posts);

  return(
    <div style={props.style}>
      <Card style={{marginBottom:'20px'}}>
        <div className="postImageWrapper">
          <img src={require('../../../blogPostImages/fitt-.jpg')} alt="Image" />
        </div>

        <div style={{textAlign:'center'}}>
          <span>Featured</span>
          <h2>Fittness Mantra To Live Life</h2>
          <span>Posted on april 21, 2020 By Sahil Sharma</span>
          <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firmament doesn't land, isn't lesser creeping. Abundantly you called signs waters </p>
            {
                posts.map(post=>{
                  return(
                    <NavLink to={`/post/${post.id}`} key={post.id} >
                            <button className="btn">Read More</button>
                        </NavLink>
                  )
              })
            }



      </div>
      </Card>



    </div>
  )
}

export default RecentPosts
