import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 className="text-2xl text-gray-200 text-center md:hidden">
          Welcome to <br />
          <span className="text-3xl font-semibold text-teal-400">
            shonen-dev
          </span>
          <span className="text-teal-400">.xyz</span>
        </h1>
        <h1 className="text-4xl text-gray-200 hidden md:block text-center">
          Welcome to <br className="lg:hidden" />
          <span className="text-6xl font-semibold text-teal-400">
            shonen-dev
          </span>
          <span className="text-teal-400">.xyz</span>
        </h1>
        <picture className="h-40 w-40 relative block rounded-full overflow-hidden mx-auto mt-20">
          <Image
            className="object-contain"
            src="/totoro_kawai.png"
            alt="Logo shonen-dev.xyz"
            layout="fill"
          />
        </picture>
        <p className="text-center text-xl text-white">
          will be launched soon...
        </p>
      </header>
    </main>
  );
}
