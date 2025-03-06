import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-gradient-to-b from-blue-50 to-sky-50 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          NFT Marketplace
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-2xl p-4">
              <div className="aspect-square relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={`/nft-${item}.jpg`}
                  alt={`NFT ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                NFT #{item}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">1.5 ETH</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <button className="rounded-full bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-colors cursor-pointer">
            Connect Wallet
          </button>
        </div>
      </main>
    </div>
  );
}
