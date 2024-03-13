import Link from "next/link";

const linkList = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
];

const Navbar = () => {
  return (
    <header>
      <ul className="py-5 flex justify-center">
        {linkList.map((linkItem) => {
          const { id, title, path } = linkItem;
          return (
            <li
              key={id}
              className="px-1 text-center text-white hover:underline"
            >
              <Link href={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
