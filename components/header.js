"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  console.log("useRouter", router);

  return (
    <div className="flex items-center p-4 lg:w-[1024px] bg-orange-200 text-slate-500">
      <Link href='/' >Logo</Link>
      <nav className="ml-auto">
        <ul className="flex gap-4 p-2">
          <Link href='/myApp/infoPage' >Info page</Link>
          <Link href='/myApp/products' >Products</Link>
          <Link href='/myApp/orders' >Orders</Link>
        </ul>
      </nav>
    </div>
  )
}
export default Header;