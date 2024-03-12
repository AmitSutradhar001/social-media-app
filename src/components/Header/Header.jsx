import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, LogoutBtn, Logo } from "../c_index";
import { useState } from "react";

export default function Header() {
  const authStatus = useSelector((state) => state.status);
  const [isOn, setIsOn] = useState(false);
  const navegate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow-blue-500 shadow-lg bg-blue-400">
      <Container>
        <nav className="flex justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <div className="hidden md:block text-white font-bold">
            <ul className="flex ml-auto">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className="rounded-lg inline—bock m-3 w-24 pt-2 pb-2 duration-200 bg-yellow-300 hover:bg-orange-400 rounded—full"
                      onClick={() => navegate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
          <div className="md:hidden text-white font-bold flex flex-col items-end justify-end">
            <button className="text-4xl" onClick={() => setIsOn((p) => !p)}>
              &#8801;
            </button>
            {isOn && (
              <ul
                className={
                  " absolute right-0 top-12 bg-yellow-100 rounded-md z-10 transition-all duration-1000 ease-in-out"
                }
              >
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        className="rounded-lg inline-block m-2 w-24 pt-2 pb-2 duration-200 bg-yellow-300 hover:bg-orange-400"
                        onClick={() => navegate(item.slug)}
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}
