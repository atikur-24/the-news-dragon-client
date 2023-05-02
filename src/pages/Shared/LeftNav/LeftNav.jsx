import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <h5 className="fw-semibold">All Caterogy</h5>
        <div className="mt-3 ps-3">
            {
                categories.map( category => <p key={category.id}>
                    <Link className='text-secondary text-decoration-none font-500' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
