import React from "react";
import Image from "next/image";

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

type CardProps = {
  user: User | undefined;
  pageType?: string;
};

export const Card: React.FC<CardProps> = ({ user, pageType }) => {
  return (
    <section className="h-auto w-full max-w-sm flex flex-col items-center justify-center bg-white rounded-md shadow-lg overflow-hidden">
      <div className="h-[150px] w-full px-6 bg-slate-100 flex items-end justify-end">
        <div className="h-24 w-24 -mb-8 bg-slate-200 border-4 border-white flex items-center justify-center rounded-full shadow overflow-hidden">
          <Image
            priority
            width="100"
            height="100"
            src={user?.image ?? "/mc-logo.svg"}
            alt="codemarn's profile"
            className="italic text-sm"
          />
        </div>
      </div>
      <div className="h-auto w-full flex flex-col gap-2 p-6 items-start justify-center">
        <span className="leading-tight font-mono text-lg">{user?.name}</span>
        <span className="leading-tight font-mono">{user?.email}</span>
        <span className="leading-tight font-mono">{pageType}</span>
      </div>
    </section>
  );
};
