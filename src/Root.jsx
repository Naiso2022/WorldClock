
import {Outlet, Link} from "react-router-dom";

function Root() {
  return (
    <div>
      <nav className="flex justify-between p-8 bg-blue-400 items-center">
        <h1 className="text-4xl font-extrabold text-white">World Time</h1>

        <ul className="flex space-x-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"./About"}>About</Link>
          </li>
          <li>
            <Link to={"./Contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <div>
          
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Root;
