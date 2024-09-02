function Lisence() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full h-16 bg-slate-950 flex justify-center lg:justify-between items-center lg:px-20">
      <p className=" text-slate-300 text-sm ">
        Taha Aamir © {year} &nbsp;|&nbsp; All rights reserved
      </p>
      <p className="hidden lg:block text-slate-300 text-sm">
        Design by Aown Aamir
      </p>
    </div>
  );
}

export default Lisence;
