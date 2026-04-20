"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#ececec] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 lg:gap-10 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="relative bg-white px-5 py-6 shadow-[0_0_0_1px_rgba(0,0,0,0.03)] sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <div className="absolute left-0 top-0 h-[3px] w-full bg-[#1f63d8]" />

          <h1 className="text-[22px] font-semibold uppercase tracking-[0.04em] text-[#1f1f1f]">
            KONTAKT
          </h1>

          <form className="mt-8 space-y-6 sm:mt-10">
            <div>
              <label className="block text-[14px] font-medium text-[#111]">
                Ditt navn <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Skriv inn fullt navn"
                className="mt-2 w-full border border-[#cfcfcf] bg-transparent p-3 text-[15px] font-medium text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
              />
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#111]">
                E-post <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="f.eks. navn@epost.no"
                className="mt-2 w-full border border-[#cfcfcf] bg-transparent p-3 text-[15px] font-medium text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
              />
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#111]">
                Emne <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Hva gjelder henvendelsen?"
                className="mt-2 w-full border border-[#cfcfcf] bg-transparent p-3 text-[15px] font-medium text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
              />
            </div>

            <div>
              <label className="block text-[14px] font-medium text-[#111]">
                Melding <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Skriv meldingen din her..."
                className="mt-2 h-[140px] w-full border border-[#cfcfcf] bg-transparent p-3 text-[15px] font-medium text-[#111] outline-none transition duration-200 placeholder:text-[#a6a6a6] focus:border-[#1f63d8] focus:ring-2 focus:ring-[#1f63d8]/10"
              />
            </div>

            <button
              type="submit"
              className="group relative overflow-hidden border border-[#1f63d8] bg-[#1f63d8] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#174bb5] hover:shadow-[0_10px_30px_rgba(31,99,216,0.25)] active:scale-[0.995]"
            >
              <span className="relative z-10">SEND</span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </button>
          </form>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <div className="flex gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-start justify-center pt-1 sm:h-14 sm:w-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1f63d8"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 sm:h-9 sm:w-9"
              >
                <path d="M12 21s-6-5.4-6-11a6 6 0 1 1 12 0c0 5.6-6 11-6 11Z" />
                <circle cx="12" cy="10" r="2.2" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[#111]">
                ADRESSE
              </h3>
              <p className="text-[14px] text-[#111]">
                Råbekksvingen 13, 1617 Fredrikstad
              </p>
              <p className="text-[13px] text-[#1f63d8]">
                Klikk for å få veibeskrivelse
              </p>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-start justify-center pt-1 sm:h-14 sm:w-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1f63d8"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 sm:h-9 sm:w-9"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6.2 6.2l1.5-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[#111]">
                TELEFON
              </h3>
              <p className="text-[14px] text-[#111]">930 61 987</p>
              <p className="text-[13px] text-[#1f63d8]">Klikk for å ringe</p>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-start justify-center pt-1 sm:h-14 sm:w-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1f63d8"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 sm:h-9 sm:w-9"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[#111]">
                EPOST
              </h3>
              <p className="text-[14px] text-[#111]">roy@bare-bil.no</p>
              <p className="text-[13px] text-[#1f63d8]">
                Klikk for å sende epost
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#111]">
              ÅPNINGSTIDER
            </h3>

            <div className="space-y-2 text-[14px] text-[#111]">
              <div className="flex justify-between border-b py-1">
                <span>Mandag</span>
                <span>09.00 - 16.30</span>
              </div>
              <div className="flex justify-between border-b py-1">
                <span>Tirsdag</span>
                <span>09.00 - 16.30</span>
              </div>
              <div className="flex justify-between border-b py-1">
                <span>Onsdag</span>
                <span>09.00 - 16.30</span>
              </div>
              <div className="flex justify-between border-b py-1">
                <span>Torsdag</span>
                <span>09.00 - 18.00</span>
              </div>
              <div className="flex justify-between border-b py-1">
                <span>Fredag</span>
                <span>09.00 - 16.30</span>
              </div>
              <div className="flex justify-between border-b py-1">
                <span>Lørdag</span>
                <span>10.00 - 14.00</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Søndag</span>
                <span>Stengt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}