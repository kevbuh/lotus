import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="navbar bg-white md:text-xl font-semibold pt-4">
        <div className="flex-1">
          <Link href="/">
            <a className="btn btn-ghost  md:text-2xl">Lotus Foundation</a>
          </Link>
        </div>
        <div className="grid grid-cols-4 md:gap-4 mr-2 md:mr-8">
          <Link href="/about">
            <a>About</a>
          </Link>

          {/* <li>
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
            </li> */}
          <Link href="/donate">
            <a className="">Donate</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>

          <Link href="/volunteer">
            <a>Volunteer</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
