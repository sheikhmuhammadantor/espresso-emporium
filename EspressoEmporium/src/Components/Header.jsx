import logo1 from '../assets/logo1.png'

function Header() {
  return (
    <section className="py-2 bg-[#372727]">
      <div className='flex items-center gap-3 text-white justify-center'>
        <img className='h-20' src={logo1} alt="Coffee Logo" />
        <h1 className="text-5xl">Espresso Emporium</h1>
      </div>
    </section>
  )
}

export default Header
