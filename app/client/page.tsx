"use client";
// Remember you must use an AuthProvider for
// client components to useSession
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card } from "@/components/card";

export default function Client() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  if (!session) return null;

  return <Card user={session?.user} pageType="Client" />;
}
