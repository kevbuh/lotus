import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="navbar bg-white">
        <div className="flex-1">
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">
              Lotus Foundation
            </a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>

            <li>
              <Link href="/volunteer">
                <a>Volunteer</a>
              </Link>
            </li>
            <li>
              <Link href="/donate">
                <a className="p-4 bg-red-50 rounded-xl font-bold">Donate</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
