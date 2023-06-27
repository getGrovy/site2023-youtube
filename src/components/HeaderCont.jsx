import React from 'react';
import { Link } from 'react-router-dom';
import { ImYoutube } from 'react-icons/im';
function HeaderCont() {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <ImYoutube className="icon" />
          getgrovy Youtube
        </Link>
      </h1>
      <div className="search">
        <label className="glass" htmlFor="searchInput">
          <input
            type="text"
            id="searchInput"
            className="inputt__search"
            placeholder="코딩 유튜버를 검색하세요"
            title="검색"
          />
        </label>
      </div>
    </header>
  );
}

export default HeaderCont;
