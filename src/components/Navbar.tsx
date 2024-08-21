import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="relative z-[100] bg-blue-800 h-[70px] w-full px-10  ">
      <div className="h-full flex items-center justify-between text-white ">
        <div className="text-3xl">ERP System</div>
        <div className="text-xl">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
