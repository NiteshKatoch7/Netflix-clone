import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/background/logo.svg'
import { Link } from 'react-router-dom';
import { FaPowerOff, FaSearch } from 'react-icons/fa'
import { auth } from '../utils/firebase-authentication';

export default function Navbar({isScrolled}) {
    const links = [
        { name:"Home", link: "/" },
        { name:"TV Shows", link: "/tv" },
        { name:"Movies", link: "/movies" },
        { name:"My List", link: "/mylist" },
    ];

    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);

  return (
    <Container>
        <nav className={`${isScrolled ? "scrolled" : ""} `}>
            <div className="left-side">
                <div className="icon-box">
                    <img src={logo} alt="" />
                </div>
                <ul className="menu-box">
                    {links.map((link,index) => (
                        <li key={index}>
                            <Link to={link.link}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right-side">
                <div className="search-box">
                    <div className={`search ${showSearch ? "show-search" : null}`}>
                        <button onFocus={()=> setShowSearch(true)} onBlur={
                            ()=> {
                                if (!inputHover) setShowSearch(false);
                            }
                        }>
                            <FaSearch />
                        </button>
                        <input 
                            type="text"
                            placeholder='Search'
                            onMouseEnter={()=> setInputHover(true)}
                            onMouseLeave={()=> setShowSearch(false)}
                            onBlur={()=>{
                                setShowSearch(false);
                                setInputHover(false);
                            }}
                         />
                    </div>
                </div>
                <button onClick={() => auth.signOut()}>
                    <FaPowerOff />
                </button>
            </div>

        </nav>
    </Container>
  )
}

const Container = styled.div`
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0 20px;
        padding: 20px;

        .left-side{
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 0 40px;
        }

        .icon-box{
            max-width: 150px;

            img{
                width: 100%;
                object-fit: cover;
            }
        }

        .menu-box{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0 25px;

            li{
                list-style: none;
                font-size: 14px;
                font-weight: 400;

                a{
                    cursor: pointer;
                    text-decoration: none;
                    color: #e5e5e5;

                    &:hover{
                        color: #b3b3b3;
                    }
                }
            }
        }
    }
`;
