import HeaderBg from '../assets/header-bg.png';

function Header() {
    return (
      <header
        className="h-72 w-full flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${HeaderBg})` }}
      >
        <h1 className='text-5xl sm:text-7xl font-bold [text-shadow:_4px_3px_0px_rgba(253,8,8,0.89)]'>MENU</h1>
        <p className='sm:w-xl text-center'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
      </header>
    );
  }
  
  export default Header;
  