import logo from '../assets/logo.jpg'

export const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 bg-white flex items-center justify-around shadow-2xl border  py-2'>
      <h1 className='flex items-center'>
        <a href="#home">
          <img
            src={logo}
            className='h-15'
          />
        </a>
        <span><b className='text-2xl'><a href="#home">UniCour</a></b></span>
      </h1>

      <a href="#register">
        <button className='cursor-pointer border border-orange-400 rounded-full px-5 h-10 bg-orange-200 transition-all hover:bg-orange-400 hover:border-orange-200'>
          Register
        </button>
      </a>

    </header>
  )
}
