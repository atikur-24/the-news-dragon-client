import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import news1 from '../../../assets/1.png';
import news2 from '../../../assets/2.png';
import news3 from '../../../assets/3.png';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div> 
      <div>
        <h5 className="fw-semibold">All Category</h5>
        <div className="mt-3 ps-3">
            {
                categories.map( category => <p key={category.id}>
                    <Link className='text-secondary text-decoration-none font-500' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
      </div>
      <div>
        <img src={news1} alt="Swimming" />
        <img src={news2} className='my-3' alt="Class" />
        <img src={news3} alt="PlayGround" />
      </div>
    </div>
  );
};

export default LeftNav;
