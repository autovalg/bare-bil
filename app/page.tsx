"use client";

export default function Page() {
  return (
    <div>
      <div className="w-full bg-white">
        <img
          src="/hero.jpg"
          alt="Bare Bil AS bygg og bilpark"
          className="block h-auto w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="bg-white p-6 text-center sm:p-8 lg:p-10">
          <h3 className="mb-6 text-[17px] font-bold uppercase text-[#222]">
            OM OSS
          </h3>
          <p className="mx-auto max-w-[420px] whitespace-pre-line text-[15px] leading-8 text-[#333]">
            {`Bare Bil AS er den største bruktbilforhandleren i Fredrikstad, over 700 solgte pr år. Vi har alltid over 100 biler på lager, samt godt utvalg av varebiler og firehjulstrekkere. Vårt varemerke er pene velholdte biler i alle prisklasser til beste pris.

Vi har eget verksted og alle våre biler blir grundig sjekket før de går ut for salg. Vi hjelper deg med gunstige finansiering- og forsikringsløsninger. Tar også innbytte. Vi kjøper også nyere bruktbiler.

Du finner oss på Råbekksvingen 13 i Fredrikstad`}
          </p>
        </div>

        <div className="bg-white">
          <div className="h-[260px] w-full overflow-hidden sm:h-[320px]">
            <img
              src="/grid2.jpg"
              alt="Bare Bil AS utebilde"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white p-6 text-center sm:p-8 lg:p-10">
          <h3 className="mb-6 text-[17px] font-bold uppercase text-[#222]">
            KUNDESERVICE
          </h3>
          <p className="mx-auto max-w-[420px] whitespace-pre-line text-[15px] leading-8 text-[#333]">
            {`Vi i Bare Bil AS har alltid et stort fokus på at deg som kunde skal ha en god opplevelse når du handler av oss. Kom innom for en hyggelig prat - vi byr deg gjerne på en kopp kaffe!`}
          </p>
        </div>

        <div className="bg-white">
          <div className="h-[260px] w-full overflow-hidden sm:h-[320px]">
            <img
              src="/grid1.jpg"
              alt="Bare Bil AS innendørs bilhall"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white p-6 text-center sm:p-8 lg:p-10">
          <h3 className="mb-6 text-[17px] font-bold uppercase text-[#222]">
            HISTORIEN
          </h3>
          <p className="mx-auto max-w-[420px] whitespace-pre-line text-[15px] leading-8 text-[#333]">
            {`Bare Bil AS startet opp i Volvos gamle lokaler på Mosseveien 16 i Fredrikstad i 2008. Vi flyttet til Råbekksvingen 13 høsten 2012, hvor vi har plass til 100 biler innendørs. Våre ansatte har tilsammen 125 år erfaring med bil.`}
          </p>
        </div>

        <div className="bg-white">
          <div className="h-[260px] w-full overflow-hidden sm:h-[320px]">
            <img
              src="/grid3.jpg"
              alt="Bare Bil AS interiør og logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}