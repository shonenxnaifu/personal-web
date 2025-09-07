import Image from "next/image";

export default function CommingSoon() {
  return (
    <main className="bg-gradient-to-br from-indigo-900 via-fuchsia-400 via-80% to-gray-400 flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 className="text-lg text-gray-200 text-center md:hidden">
          Welcome to <br />
          <span className="text-xl font-semibold text-teal-400">
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
          (dev)
        </h1>
        <picture className="h-40 w-40 relative block rounded-full overflow-hidden mx-auto mt-20">
          <Image
            className="object-contain"
            src="/totoro_kawai.png"
            alt="Logo shonen-dev.xyz"
            layout="fill"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </picture>
        <p className="text-center text-xl text-white">
          will be launched soon...
        </p>
      </header>
    </main>
  );
}
