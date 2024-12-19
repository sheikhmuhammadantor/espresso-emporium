import { Link, useLoaderData } from "react-router-dom"
import CoffeeCard from "../Components/CoffeeCard";
import { FiCoffee } from "react-icons/fi";
import { useEffect, useState } from "react";

function Home() {

  const [coffees, setCoffees] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/coffeeCount`)
      .then(res => res.json())
      .then(({ count }) => setItemCount(count))
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/coffee?skip=${(currentPage - 1) * itemPerPage}&limit=${itemPerPage}`)
      .then(res => res.json())
      .then(data => setCoffees(data))
  }, [currentPage, itemPerPage]);

  const numberOfPage = Math.ceil(itemCount / itemPerPage);
  const pages = [...Array(numberOfPage).keys()];

  const handelItemParPage = e => {
    setItemPerPage(parseInt(e.target.value))
    setCurrentPage(1)
  }

  const handelPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handelNextPage = () => {
    if (currentPage < numberOfPage) setCurrentPage(currentPage + 1)
  }

  return (
    <section>
      <div className="text-center my-12">
        <p>--- Sip & Savor ---</p>
        <h2 className="text-4xl font-semibold text-[#331a15] my-4">Our Popular Products</h2>
        <Link to="/add-coffee"><button className="outline outline-2 outline-[#331a15] bg-[#e3b577] px-8 btn text-xl text-[#331a15]"><span>Add Coffee</span><FiCoffee /></button></Link>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 p-6 rounded-xl">
        {
          coffees?.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />)
        }
      </div>
      <p className="text-center text-xl my-8">Current Page : {currentPage}</p>
      <div className="text-center flex justify-center gap-2">
        <button onClick={handelPrevPage} className="btn btn-sm btn-outline px-6">Prev</button>
        {
          pages?.map(page =>
            <button onClick={() => setCurrentPage(page + 1)} className={`btn btn-sm btn-outline ${currentPage === page + 1 ? 'bg-teal-500' : ''}`} key={page}>
              {page + 1}
            </button>)
        }
        <button onClick={handelNextPage} className="btn btn-sm btn-outline px-6">Next</button>
        <select value={itemPerPage} onChange={handelItemParPage} className="btn btn-sm btn-outline btn-accent">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </section>
  )
}

export default Home
