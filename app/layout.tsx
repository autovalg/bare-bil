import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Bare Bil AS",
  description: "Bare Bil AS Fredrikstad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    {
      label: "BILER TIL SALGS",
      href: "https://www.finn.no/mobility/search/car?orgId=1268474825&sort=PUBLISHED_DESC",
      external: true,
    },
    {
      label: "VI KJØPER DIN BRUKTBIL",
      href: "/vi-kjoper-din-bruktbil",
      external: false,
    },
    {
      label: "ANSATTE",
      href: "/ansatte",
      external: false,
    },
    {
      label: "KONTAKT",
      href: "/kontakt",
      external: false,
    },
  ];

  return (
    <html lang="no">
      <body>
        <main className="min-h-screen bg-white md:flex">
          {/* Mobil-header */}
          <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111] md:hidden">
            <div className="flex items-center justify-between px-5 py-4">
              <Link href="/" className="block">
                <div className="leading-none">
                  <h1 className="text-[24px] font-bold tracking-wide text-[#1f63d8]">
                    BARE BIL AS
                  </h1>
                  <p className="mt-1 text-[10px] tracking-[0.25em] text-white">
                    FREDRIKSTAD
                  </p>
                </div>
              </Link>

              <details className="relative">
                <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded border border-white/15 text-white">
                  <span className="text-[22px] leading-none">☰</span>
                </summary>

                <div className="absolute right-0 mt-3 w-[260px] rounded border border-white/10 bg-[#111111] p-4 shadow-xl">
                  <nav className="flex flex-col gap-4">
                    {menuItems.map((item) =>
                      item.external ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] font-semibold uppercase text-white transition hover:opacity-75"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="text-[14px] font-semibold uppercase text-white transition hover:opacity-75"
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </nav>

                  <div className="mt-6 flex justify-center">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f63d8] transition hover:scale-105"
                    >
                      <span className="text-[22px] font-bold leading-none text-black">
                        f
                      </span>
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </header>

          {/* Desktop-sidebar = Bare Bil Ferdig 1 */}
          <aside className="hidden w-[295px] shrink-0 bg-[#111111] px-11 pb-10 pt-12 text-white md:flex md:min-h-screen md:flex-col">
            <div className="mb-16 leading-none">
              <Link href="/" className="block">
                <h1 className="text-[26px] font-bold tracking-wide text-[#1f63d8] transition hover:opacity-80">
                  BARE BIL AS
                </h1>
              </Link>
              <p className="mt-1 text-[11px] tracking-[0.25em] text-white">
                FREDRIKSTAD
              </p>
            </div>

            <nav className="flex flex-col gap-10">
              {menuItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-semibold uppercase text-white transition hover:opacity-75"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[15px] font-semibold uppercase text-white transition hover:opacity-75"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className="mt-12 flex justify-center">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f63d8] transition hover:scale-105"
              >
                <span className="text-[22px] font-bold leading-none text-black">
                  f
                </span>
              </a>
            </div>
          </aside>

          <section className="min-w-0 flex-1 bg-white">{children}</section>
        </main>
      </body>
    </html>
  );
}