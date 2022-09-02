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
              <a>Our Work</a>
              <ul className="p-2 bg-base-100">
                <li><a href="/sustainability">Sustainability</a></li>
                <li><a href="/unhousedPopulations">Unhoused Populations</a></li>
                <li><a href="/education">Education</a></li>
              </ul>
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
