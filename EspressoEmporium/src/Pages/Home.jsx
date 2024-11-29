import { Link, useLoaderData } from "react-router-dom"
import CoffeeCard from "../Components/CoffeeCard";
import { FiCoffee } from "react-icons/fi";
import { useState } from "react";

function Home() {

  const coffeesData = useLoaderData() || [];
  const [coffees, setCoffees] = useState(coffeesData);

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
    </section>
  )
}

export default Home
