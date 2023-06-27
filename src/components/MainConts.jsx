import React, { useState } from 'react';
import { Category, Videos } from './';

function MainConts() {
  const [selectCategory, setSelectCategory] = useState('코딩애플');

  return (
    <main id="main">
      <aside id="aside">
        <Category
          setSelectCategory={setSelectCategory}
          selectCategory={selectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory}</h2>
        <Videos />
      </section>
    </main>
  );
}

export default MainConts;
