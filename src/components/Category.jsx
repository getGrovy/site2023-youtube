import React from 'react';
import { categories } from '../utils/content';

const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categories.map(category => (
        <button
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
          style={{
            boxShadow:
              selectCategory === category.name
                ? 'inset 0 0 20px 2px #ff000096'
                : 'none',
          }}
        >
          <span className="category__icon">
            <category.icon />
          </span>
          <span className="title">{category.name}</span>
          <span className="category__icon">
            <category.icon />
          </span>
        </button>
      ))}
    </div>
  );
};

export default Category;
