function Lisence() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full h-16 bg-slate-950 flex justify-center lg:justify-center items-center lg:px-20">
      <p className=" text-slate-300 text-xs ">
        All rights reserved © {year} &nbsp;|&nbsp; Design by Aown Aamir
      </p>
    </div>
  );
}

export default Lisence;
