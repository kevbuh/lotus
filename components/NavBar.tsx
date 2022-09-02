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
              <div className="dropdown">
                <label className="btn m-1">Our Work</label>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
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
                <a className="">Donate</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
