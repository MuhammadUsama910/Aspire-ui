import { navLinks } from '../constants/constant';

const Navbar = () => {
  return (
    <>
    <header className="container">

      <div className="px-32">
        <div className="flex justify-between">

          <img
            src='/src/assets/Logo.png'
            alt='logo'
          />

          <ul className="flex gap-x-10">
            {
              navLinks?.map((link, index) => (
                <li key={index}>
                  {link}
                </li>
              ))
            }
          </ul>

          <div className='flex gap-x-5'>

          </div>

        </div>
      </div>

    </header>
    </>
  )
}

export default Navbar;
