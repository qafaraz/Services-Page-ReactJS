function Footer() {
  return (
    <footer className="w-full bg-white  ">
      <div className="max-w-[1420px] m-auto py-12  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-between px-2">
          <ul className="flex flex-col gap-2">
            <h3 className="text-[#0C2445] font-semibold text-[18px]">Səhifələr</h3>
            <li>
              <a href="#!" className="text-[#8B95AC] hover:text-[#0C2445]">Ana Səhifə</a>
            </li>
            <li>
              <a href="#!" className="text-[#8B95AC] hover:text-[#0C2445]">Haqqımızda</a>
            </li>
            <li>
              <a href="#!" className="text-[#8B95AC] hover:text-[#0C2445]">Xidmətlərimiz</a>
            </li>
            <li>
              <a href="#!" className="text-[#8B95AC] hover:text-[#0C2445]">Məhsullar</a>
            </li>
            <li>
              <a href="#!" className="text-[#8B95AC] hover:text-[#0C2445]">Əlaqə</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-[#0C2445] font-semibold text-[18px]">Kateqoriyalar</h3>
            <li>
              <a className="text-[#8B95AC] hover:text-[#0C2445]">Elektrikli Alətlər</a>
            </li>
            <li>
              <a className="text-[#8B95AC] hover:text-[#0C2445]">Tikinti Materialları</a>
            </li>
            <li>
              <a className="text-[#8B95AC] hover:text-[#0C2445]">Xırdavat</a>
            </li>
            <li>
              <a className="text-[#8B95AC] hover:text-[#0C2445]">Santexnika</a>
            </li>
            <li>
              <a className="text-[#8B95AC] hover:text-[#0C2445]">Alətlər və Avadanlıq</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h3 className="text-[#0C2445] font-semibold text-[18px]">Bizimlə Əlaqə</h3>
            <li className="text-[#8B95AC] text-[15px]  flex gap-2">
              <img src="./icon/footerLoc.svg" alt="loc" />
              <p>
                Qələbə Residence, Abbas Mirza Şərifzadə küç. 144, Bakı, Azərbaycan.
              </p>
            </li>
            <li className="text-[#8B95AC] text-[15px] flex gap-2">
              <img src="./icon/footerPhone.svg" alt="phone" />
              <p>
                994508959737
              </p>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 sm:items-end items-start">
            <h3 className="text-[#0C2445] font-semibold text-[18px] mb-3 ">Sosial Media</h3>
            <li className="flex items-center gap-3 ">
              <img src="./icon/instagram.svg" alt="instagram" className="cursor-pointer" />
              <img src="./icon/facebook.svg" alt="facebook" className="cursor-pointer" />
              <img src="./icon/linkedin.svg" alt="linkedin" className="cursor-pointer" />
            </li>
          </ul>
        </div>
        <div className="w-full flex items-center justify-center m-auto py-5">
          <div className="border border-[#0C2445] w-full"></div>
          <img src="./icon/footerLogo.svg" alt="footerLogo" className="object-cover p-2" />
          <div className="border border-[#0C2445] w-full"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
