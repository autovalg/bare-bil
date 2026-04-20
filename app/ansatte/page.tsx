"use client";

const employees = [
  {
    name: "MORTEN JOHANSEN",
    role: "Selger",
    phone: "900 15 542",
    email: "morten-barebil@hotmail.com",
    image: "/ansatt-morten.jpg",
  },
  {
    name: "ANDERS FLEINES",
    role: "Selger",
    phone: "451 40 000",
    email: "barebil@hotmail.com",
    image: "/ansatt-anders.jpg",
  },
  {
    name: "KNUT NESJE",
    role: "Innkjøp",
    phone: "930 61 987",
    email: "knut@bare-bil.no",
    image: "/ansatt-knut.jpg",
  },
  {
    name: "ROY JOHANSEN",
    role: "Innkjøp",
    phone: "900 78 111",
    email: "roy@bare-bil.no",
    image: "/ansatt-roy.jpg",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#ececec] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="mb-6 text-[22px] font-semibold uppercase tracking-[0.04em] text-[#1f1f1f]">
          ANSATTE
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {employees.map((employee) => (
            <div
              key={employee.name}
              className="bg-white px-6 py-6 text-center shadow-[0_0_0_1px_rgba(0,0,0,0.03)] sm:px-8"
            >
              <div className="mx-auto mb-6 h-[190px] w-[190px] overflow-hidden rounded-full sm:h-[210px] sm:w-[210px]">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="text-[17px] font-semibold uppercase tracking-[0.04em] text-[#3f4752]">
                {employee.name}
              </h2>

              <p className="mt-1 text-[14px] text-[#111]">{employee.role}</p>

              <p className="mt-7 text-[17px] font-semibold tracking-[0.08em] text-[#2b6fb2]">
                {employee.phone}
              </p>

              <a
                href={`mailto:${employee.email}`}
                className="mt-1 block break-all text-[14px] text-[#2b6fb2] hover:underline"
              >
                {employee.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}