import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src={`/nft-${item}.jpg`}
                  alt={`NFT ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-800">NFT #{item}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-blue-500 text-sm font-medium">
                  1.5 ETH
                </span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
