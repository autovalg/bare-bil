"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#ececec] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 lg:gap-10 xl:grid-cols-[1.25fr_0.8fr]">
        <div className="relative bg-white px-5 py-6 shadow-[0_0_0_1px_rgba(0,0,0,0.03)] sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="absolute left-0 top-0 h-[3px] w-full bg-[#1f63d8]" />

          <h1 className="text-[24px] font-semibold uppercase tracking-[-0.03em] text-[#151515] sm:text-[28px]">
            VI KJØPER DIN BRUKTBIL
          </h1>

          <p className="mt-5 max-w-[820px] text-[15px] leading-7 text-[#1b1b1b] sm:mt-6 sm:text-[16px] sm:leading-8">
            Spar deg for mye tid og la oss hjelpe deg med salget av din bruktbil.
            Fyll ut skjema, og vi vil ta kontakt med deg!
          </p>

          <form className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 md:gap-6 lg:mt-14 lg:gap-8">
            <input
              type="text"
              placeholder="Navn"
              className="h-[46px] border border-[#cfcfcf] bg-transparent px-4 text-[15px] font-medium tracking-[-0.01em] text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
            />
            <input
              type="text"
              placeholder="Telefon"
              className="h-[46px] border border-[#cfcfcf] bg-transparent px-4 text-[15px] font-medium tracking-[-0.01em] text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
            />
            <input
              type="email"
              placeholder="Epost"
              className="h-[46px] border border-[#cfcfcf] bg-transparent px-4 text-[15px] font-medium tracking-[-0.01em] text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
            />
            <input
              type="text"
              placeholder="Ditt område (by)"
              className="h-[46px] border border-[#cfcfcf] bg-transparent px-4 text-[15px] font-medium tracking-[-0.01em] text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
            />
            <input
              type="text"
              placeholder="Registreringsnummer"
              className="h-[46px] border border-[#cfcfcf] bg-transparent px-4 text-[15px] font-medium tracking-[-0.01em] text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
            />
            <input
              type="text"
              placeholder="Ønsket pris"
              className="h-[46px] border border-[#cfcfcf] bg-transparent px-4 text-[15px] font-medium tracking-[-0.01em] text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
            />
            <textarea
              placeholder="Feks: Bilen har gått 180 000, er i generelt god stand med noen kosmetiske merker. Nylig byttet..."
              className="min-h-[110px] border border-[#cfcfcf] bg-transparent px-4 py-4 text-[15px] font-medium tracking-[-0.01em] text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10 md:col-span-2"
            />

            <button
              type="submit"
              className="group relative h-[64px] overflow-hidden border border-[#1f63d8] bg-[#1f63d8] text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#174bb5] hover:shadow-[0_10px_30px_rgba(31,99,216,0.25)] active:scale-[0.995] md:col-span-2"
            >
              <span className="relative z-10">SEND INN SKJEMA</span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </button>
          </form>
        </div>

        <div className="h-fit bg-[#f1f1f1] px-5 py-6 shadow-[0_0_0_1px_rgba(0,0,0,0.03)] sm:px-8 sm:py-8 lg:px-12">
          <h2 className="text-[18px] font-semibold uppercase text-[#1f1f1f]">
            SLIK FUNGERER DET:
          </h2>

          <ul className="mt-6 space-y-3 text-[16px] leading-8 text-[#111] sm:mt-8">
            <li className="flex items-start gap-3">
              <span className="mt-[2px] text-[#1f63d8]">✓</span>
              <span>Fyll ut skjema</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[2px] text-[#1f63d8]">✓</span>
              <span>Vi kontakter deg for tilbud</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[2px] text-[#1f63d8]">✓</span>
              <span>Du får solgt bilen din!</span>
            </li>
          </ul>

          <h3 className="mt-8 text-[18px] font-semibold text-[#111] sm:mt-10">
            Hvorfor bruke oss?
          </h3>

          <p className="mt-3 text-[16px] leading-8 text-[#111]">
            Spar deg for mye tid og la oss hjelpe deg med salget av bruktbil.
            Fyll ut skjema, og vi vil ta kontakt med deg!
          </p>

          <ul className="mt-5 space-y-2 text-[16px] leading-8 text-[#111]">
            <li>• Bytt inn din gamle bil</li>
            <li>• Gode finansieringsmuligheter</li>
            <li>• Profesjonell hjelp</li>
            <li>• Trygghet til deg som kjøper/selger</li>
          </ul>
        </div>
      </div>
    </div>
  );
}