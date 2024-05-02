import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogoutMutation } from '../features/auth/authSlice';

const Navbar = () => {
  const [logout] = useLogoutMutation();
  const isLoggedIn = useSelector((state) => state.auth.token);

  return (
    <header className="py-8 px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" to="/">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-[3.75rem] 2xl:text-6xl">
          Fitness Trackr
        </h1>
        <span className="sr-only">
          Fitness Trackr
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/activities">
          Activities
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="/routines">
          Routines
        </Link>
        {
          (isLoggedIn)
            ? (
              <>
                <Link className="text-sm font-medium hover:underline underline-offset-4" to="/profile">
                  Profile
                </Link>
                <button onClick={logout} className="text-sm font-medium hover:underline underline-offset-4">Sign Out</button>
              </>
            )
            : (
              <Link className="text-sm font-medium hover:underline underline-offset-4" to="/login">
                Login
              </Link>
            )
        }
      </nav>
    </header>
  );
}

export default Navbar;
