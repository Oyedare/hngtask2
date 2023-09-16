import Logo from '../assets/Logo.svg'
import Menu from '../assets/Menu.svg'
const Navbar = () => {
  return (
    <nav className='nav-container'>
        <img src={Logo} alt="" />
        <div className='nav'>
            <input type="text" placeholder='What do you want to watch?' />

            <div className='search'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

        </div>

        <div className='menu'>
            <h4>Sign in</h4>
            <img src={Menu} alt="Menu" />
        </div>
    </nav>
  )
}

export default Navbar