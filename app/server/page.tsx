import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Card } from "@/components/card";

export default async function Server() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return <Card user={session?.user} pageType="Server" />;
}
