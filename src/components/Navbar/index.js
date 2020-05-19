import React,{useState} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

const Navbar = props =>{

    const submitSearch=(e) =>{
      e.preventDefault();
      alert("search")
    }

    const[search,setSearch] = useState(false);

    const openSearch =() =>{
      setSearch(!search);
    }

    const searchClass = search ? 'searchInput active':'searchInput';



  return(
    <div className="navbar">
      <ul className="navbarMenu">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>
        <li><NavLink to='/post'>Posts</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>

      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
        <input type="text" placeholder="Search" className={searchClass} />
        <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.webp')} alt="search" />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
