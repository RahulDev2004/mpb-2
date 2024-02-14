import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
} from "../../data/menu";

import { useRouter } from "next/router";
import Image from "next/image";

const MainMenu = () => {
  const router = useRouter();

  const isActive = (link) => {
    return router.pathname.replace("/[id]", "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo_01.png"
                  alt="logo"
                  width={95}
                  height={30}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item dropdown mega-dropdown-md">
            <a
              // className="nav-link dropdown-toggle active-menu"
              href="#"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown"
              }

              // style={{color:'green'}}
            >
              Home
            </a>
            
          </li>
          {/* End li (home mega menu) */}

         
          {/* End li (portfolio) */}

          <li className="nav-item ">
          <a
              // className="nav-link dropdown-toggle active-menu"
              href="#"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown"
              }

              // style={{color:'green'}}
            >
              Handbook
            </a>
            
          </li>
          {/* End li (blog) */}

          <li className="nav-item dropdown">
          <a
              // className="nav-link dropdown-toggle active-menu"
              href="#"
              role="button"
              data-bs-auto-close="outside"
              aria-expanded="false"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown"
              }

              // style={{color:'green'}}
            >
              Join a Mentor
            </a>
           
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              href="/contact/contact-v1"
              className="btn-twentyOne fw-500 tran3s"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
