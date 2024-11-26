import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-12 pt-8 border">
      <section className="container mx-auto px-8">
        <div>
          <img src="" alt="" />
          <div className="my-4">
            <h2 className="text-3xl font-semibold mb-3">Update Existing Coffee Details</h2>
            <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br /> As opposed to using Content here.</p>
          </div>
          <div className="flex gap-2 items-center text-2xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <h2></h2>
          <div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <aside>
          <h1>Connect with Us</h1>
          <div>
            {/* From */}
            {/* Button */}
          </div>
        </aside>
      </section>
      <div className="bg-[#1e0e0e] flex justify-center text-gray-300 py-1">
        <h3>Copyright Espresso Emporium ! All Rights Reserved</h3>
      </div>
    </footer>
  )
}

export default Footer
