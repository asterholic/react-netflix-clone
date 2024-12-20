import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
      });
    
      return () => {
        window.removeEventListener("scroll", () => {});
      }
    }, []);

    const handleChange = (e) => {
      setSearchValue(e.target.value);
      navigate(`/search?q=${e.target.value}`);
    }

    return <nav className={`nav ${show && "nav__black"}`}>
        <img 
            alt="Netflix Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
            className="nav__logo"
            onClick={() => window.location.reload()}
        />

        <input
          value={searchValue}
          onChange={handleChange}
          className="nav__input"
          type="text"
          placeholder="영화를 검색해주세요."
        />

        <img 
            alt="User logged"
            src="https://occ-0-1361-1360.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABWdQh6X0P3kueP_8-iTBltTJ1LczzcGLcmXpcm1LrBcEpZpYEO_K7E_DaSqXq3ze_7lRkH8ZtZMfkr2VdyKjVySml7dWQOo.png?r=72e"
            className="nav__avatar"
        />
    </nav>;
}
