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
      <header className="w-screen h-1/6 p-8 bg-blue-600 flex justify-between items-center">
        <Link href="/election" className="text-white text-3xl font-semibold">
          DAOMOCRACY
        </Link>
        <ConnectButton />
      </header>

      {/* CONTENT */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <div className="w-1/6 bg-blue-600 text-white">
          <nav className="p-4">
            <ul>
              <li className="flex items-center p-2 text-blue-200 mb-4">DASHBOARD</li>
              <li className="mb-2">
                <Link href="/election" className="flex items-center p-2 hover:bg-blue-400">
                  ELECTIONS
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/daos" className="flex items-center p-2 hover:bg-blue-400">
                  DAO HUB
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/notifications" className="flex items-center p-2 hover:bg-blue-200">
                  NOTIFICATIONS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-10 w-5/6 max-h-screen bg-gradient-to-r from-blue-100 to-cyan-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
