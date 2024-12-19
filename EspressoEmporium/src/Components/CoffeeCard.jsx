import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CoffeeCard({ coffee, coffees, setCoffees }) {

    const { _id, name, chef, supplier, taste, category, price, photo } = coffee;

    const handelCoffeeDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_URL}/coffee/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const newCoffees = coffees.filter((coffee) => coffee._id !== _id);
                            setCoffees(newCoffees);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className="card card-side bg-[#ffeaabb6] p-4">
            <figure>
                <img src={photo} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{chef}</p>
                <p>{supplier}</p>
                <p>{taste}</p>
                <p>{category}</p>
                <h2 className="text-lg font-semibold">${price}</h2>
            </div>
            <div className="flex flex-col gap-2 justify-center">
                <button className="btn bg-[#D2B48C] text-2xl text-white"><FaEye /></button>
                <Link to={`/update-coffee/${_id}`}><button className="btn bg-[#3c393b] text-2xl text-white"><FaPencil /></button></Link>
                <button onClick={() => handelCoffeeDelete(_id)} className="btn bg-[#ea4744] text-2xl text-white"><MdDeleteOutline /></button>
            </div>
        </div>
    )
}

export default CoffeeCard
