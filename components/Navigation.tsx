import {
  CircleUserRound,
  MessageSquareText,
  Package,
  ShoppingCart,
  SquareGanttChart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Navigation = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path ? "bg-gray-400" : "hover:bg-gray-200";
  };
  return (
    <div>
      <aside className="w-64 bg-[#FCFBF4]  text-white fixed left-0 top-0 bottom-0">
        <div className="p-4 text-2xl font-bold border border-black h-[65px] bg-[#F5F7FD] text-black shadow-lg">
          CucCung
        </div>
        <nav className="mt-6">
          <Link
            href="/"
            className={`p-4 text-black flex  ${getLinkClass("/")}`}
          >
            <SquareGanttChart className="mr-1" />
            Dashboard
          </Link>
          <Link
            href="/productManagement"
            className={`flex p-4 text-black ${getLinkClass("/productManagement")}`}
          >
            <Package className="mr-1" />
            Product Management
          </Link>
          <Link
            href="/orders"
            className={`flex p-4 text-black ${getLinkClass("/orders")}`}
          >
            <ShoppingCart className="mr-1" />
            Orders
          </Link>
          <Link
            href="/feedback"
            className={`flex p-4 text-black ${getLinkClass("/feedback")}`}
          >
            <MessageSquareText className="mr-1" />
            Feedback
          </Link>
          <Link
            href="/accounts"
            className={`flex p-4 text-black ${getLinkClass("/accounts")}`}
          >
            <CircleUserRound className="mr-1" />
            Accounts
          </Link>
        </nav>
      </aside>
    </div>
  );
};