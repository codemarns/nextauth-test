import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function UserSession() {
  const session = await getServerSession(options);

  const menuStyles =
    "cursor-pointer select-none px-3 py-1.5 bg-primary hover:bg-primary-600 rounded text-white leading-tight duration-150 ease-in-out transition-all";

  if (!session)
    return (
      <li className="list-none flex">
        <Link className={menuStyles} href={"/api/auth/signin"}>
          Sign In
        </Link>
      </li>
    );

  return (
    <li className="list-none flex">
      <Link className={menuStyles} href={"/api/auth/signout"}>
        Sign Out
      </Link>
    </li>
  );
}
