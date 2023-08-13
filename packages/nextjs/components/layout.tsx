// pages/dashboard.js
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const isLandingPage = router.pathname === "/";

  const isLinkActive = (href: string) => {
    return router.pathname === href;
  };

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
        <div className="flex flex-col justify-between w-1/6 bg-blue-600 text-white">
          <nav className="p-4">
            <ul>
              <li className="flex items-center p-2 text-blue-200 mb-4">DASHBOARD</li>
              <li className="mb-2">
                <Link
                  href="/election"
                  className={`flex items-center p-2 hover:bg-blue-400 ${
                    isLinkActive("/election") ? "bg-blue-400 cursor-default" : ""
                  }`}
                >
                  ELECTIONS
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/daos"
                  className={`flex items-center p-2 hover:bg-blue-400 ${
                    isLinkActive("/daos") ? "bg-blue-400 cursor-default" : ""
                  }`}
                >
                  DAO HUB
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="flex items-center p-2 hover:bg-blue-200">
                  NOTIFICATIONS
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mb-10">
            <div className=" text-white mt-10 mb-5">Powered by</div>
            <div className="flex justify-between p-2 ml-6  mr-3">
              <Image alt="eth logo" src="/assets/eth_logo.png" width={40} height={30} />
              <Image className="ml-4" alt="optimism logo" src="/assets/op_logo.svg" width={40} height={30} />
              <Image alt="worldcoin logo" src="/assets/worldcoin_logo.png" width={70} height={30} />
            </div>
            <div className="flex justify-around p-2 ml-8 mr-8">
              <Image alt="chainlink logo" src="/assets/chainlink_logo.png" width={40} height={20} />
              <Image alt="graph logo" src="/assets/graph_logo.png" width={40} height={30} />
            </div>
          </div>
        </div>
        <div className="p-10 w-5/6 max-h-screen bg-gradient-to-r from-blue-100 to-cyan-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
