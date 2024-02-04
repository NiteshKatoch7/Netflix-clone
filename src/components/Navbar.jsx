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
                    <div className={`search ${showSearch ? "show-search" : ""}`}>
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
        position: sticky;
        position: fixed;
        width: 100%;
        top: 0;
        height: 4.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0 20px;
        padding: 0 4rem;
        z-index: 2;
        background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);

        &.scrolled{
            background-color: black;
        }

        .left-side{
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 0 40px;
        }

        .icon-box{
            max-width: 100px;

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

        .right-side{
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 0 20px;

            button{
                background-color: transparent;
                border: none;
                cursor: pointer;
                &:focus{
                    outline: none;
                }
                svg{
                    color: #f34242;
                    font-size: 1.2rem;
                }
            }

            .search-box{
                .search{
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    gap: 10px 0;
                }
                button{
                    background-color: transparent;
                    svg{
                        color: white;
                        font-size: 1.2rem;
                    }
                }

                input{
                    width: 0;
                    opacity: 0;
                    visibility: hidden;
                    transition: 0.3s ease-in-out;
                    background-color: transparent;
                    border: none;
                    color: white;
                    &:focus{
                        outline: none;
                    }
                }

                .show-search{
                    border: 1px solid white;
                    background-color: rgba(0,0,0,0.6);
                    border-radius: 4px;
                    padding: 0.3rem;
                    input{
                        width: 100%;
                        opacity: 1;
                        visibility: visible;
                        padding: 0 0.4rem; 
                    }
                }
            }
        }
    }
`;
