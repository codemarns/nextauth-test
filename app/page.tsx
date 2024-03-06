import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Card } from "@/components/card";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) return <h1 className="text-xl font-bold">Home Page!</h1>;

  return <Card user={session?.user} pageType="Home" />;
}
