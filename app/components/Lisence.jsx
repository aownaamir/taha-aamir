function Lisence() {
  const year = new Date().getFullYear();
  return (
    <div className="w-full h-16 bg-slate-950 flex justify-center lg:justify-center items-center lg:px-20">
      <p className=" text-slate-300 text-xs ">
        All rights reserved © {year} &nbsp;|&nbsp;{" "}
        <a href="https://www.linkedin.com/in/aown-aamir/">
          Design by Aown Aamir
        </a>
      </p>
    </div>
  );
}

export default Lisence;
