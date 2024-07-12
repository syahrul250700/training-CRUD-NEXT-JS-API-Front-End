import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Header = ({ title }) => {
  const router = useRouter();
  const access_token = getCookie("access_token");
  const logout = async () => {
    try {
      await fetch("api/v1/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (error) {
      console.error("error:", error);
    }
  };
  return (
    <header className="flex justify-between items-center w-full h-16 bg-blue-900 px-4 ">
      <Image
        src="/nash_logo-removebg.png"
        width={50}
        height={50}
        alt="logo"
        priority={false} // {false} | {true}
        className="pt-1 "
      />
      {/* <h1 className="text-lg text-white font-bold">{title}</h1> */}
      <ul className="flex">
        <li className="mr-6 text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-6 text-white ">
          <Link href="/lifecycle">Lifecycle</Link>
        </li>
        <li className="mr-6 text-white ">
          <Link href="/context">Context</Link>
        </li>
        <li className="mr-6 text-white ">
          <Link href="/product">Product</Link>
        </li>
        <li className="mr-6 text-white ">
          <Link href="/reducer">Reducer</Link>
        </li>
        <li className="mr-6 text-white ">
          <Link href="/fetch">Fetch Data</Link>
        </li>
        <li
          className="mr-6 text-white cursor-pointer"
          onClick={() => (access_token ? logout() : router.push("/login"))}
          suppressHydrationWarning={true}
        >
          {access_token ? "Logout" : "Login"}
        </li>
      </ul>
    </header>
  );
};

export default Header;
