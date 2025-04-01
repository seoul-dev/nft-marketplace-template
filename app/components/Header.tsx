"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { injected } from 'wagmi/connectors';

export default function Header() {
  const pathname = usePathname();
  const { address } = useAccount();
  const { connect, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({
    address: address,
  });

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Mint", href: "/mint" },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-[200px]" />
          <div className="flex-1 flex items-center justify-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  pathname === item.href
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-[200px] flex justify-end">
            {address ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {balance ? `${balance.formatted} ETH` : 'Loading...'}
                </span>
                <button
                  onClick={() => disconnect({})}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                >
                  {address.slice(0, 6)}...{address.slice(-4)}
                </button>
              </div>
            ) : (
              <button
                onClick={() => connect({ connector: injected() })}
                disabled={isConnecting}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
              >
                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
