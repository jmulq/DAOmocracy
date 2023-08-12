// pages/dashboard.js
import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const isLandingPage = router.pathname === "/";
  return isLandingPage ? (
    <>{children}</>
  ) : (
    <div className="flex max-h-screen h-screen flex-col text-center">
      {/* HEADER */}
      <header className="w-screen h-1/6 p-8 bg-gray-800 flex justify-between items-center">
        <h1 className="text-white text-3xl font-semibold">DAOMOCRACY</h1>
        <ConnectButton />
      </header>

      {/* CONTENT */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <div className="w-1/6 bg-gray-800 text-white">
          <nav className="p-4">
            <ul>
              <li className="mb-2">
                <Link href="/election" className="flex items-center p-2 hover:bg-gray-700">
                  ELECTIONS
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/daos" className="flex items-center p-2 hover:bg-gray-700">
                  DAO HUB
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/notifications" className="flex items-center p-2 hover:bg-gray-700">
                  NOTIFICATIONS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-10 w-5/6 max-h-screen bg-cyan-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
