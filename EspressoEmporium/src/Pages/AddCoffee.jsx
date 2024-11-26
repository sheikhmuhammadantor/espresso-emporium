import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function AddCoffee() {

  const handelAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo }
    // console.log(newCoffee);

    fetch('http://localhost:5000/add-coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(date => {
        console.log(date);
        Swal.fire({
          title: 'Success !',
          text: 'New Coffee Added',
          icon: 'success',
          confirmButtonText: 'Close'
        })
      })
  }

  return (
    <section>
      <div className="my-6 ml-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold outline outline-1 w-max py-1 px-3 rounded-full cursor-pointer hover:outline-2 hover:shadow-xl"><FaArrowLeft /> Back to home</Link>
      </div>
      <div>
        <div className="bg-[#f4f3f0] w-full shadow-2xl border rounded-2xl py-6">
          <div className="text-center px-4">
            <h2 className="text-3xl font-semibold mb-3">Add New Coffee</h2>
            <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br /> As opposed to using Content here.</p>
          </div>
          <form onSubmit={handelAddCoffee} className="card-body ">
            {/* Name & Chef */}
            <div className="md:flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input type="text" name="chef" placeholder="Chef Name" className="input input-bordered" required />
              </div>
            </div>
            {/* Supplier & Taste */}
            <div className="md:flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input type="text" name="taste" placeholder="Coffee Taste" className="input input-bordered" required />
              </div>
            </div>
            {/* Category & Details */}
            <div className="md:flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input type="text" name="category" placeholder="Category Name" className="input input-bordered" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input type="text" name="details" placeholder="Coffee Details" className="input input-bordered" required />
              </div>
            </div>
            {/* Photo  */}
            <div className="md:flex justify-between gap-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
              </div>
            </div>
            {/* Update Button */}
            <div className="mt-8 mx-8 text-center">
              <button className="btn text-[#553b2f] text-lg bg-[#d2b48c] outline-2 outline outline-[#553b2f] outline-offset-0 w-full">Add New Coffee</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddCoffee
