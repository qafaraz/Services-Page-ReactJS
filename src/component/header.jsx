import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full">
        <nav className="mx-auto">
          <div className="md:hidden bg-[#0C2445] px-4 py-3 flex items-center justify-between">
            <a href="#!" className="w-16 h-12">
              <img src="/icon/logo.svg" alt="logo" className="w-full h-full object-contain" />
            </a>
            <div className="flex items-center gap-4">
              <img src="./icon/search.svg" alt="search" className="w-6 h-6 cursor-pointer" />
              <button onClick={() => setOpen(true)} className="flex flex-col gap-1">
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </button>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-12 items-center gap-8 lg:gap-9">
            <div className="col-span-4 lg:col-span-3 relative">
              <div className="flex flex-col">
                <div className="w-full h-20 lg:h-20 flex items-center justify-center bg-[#0C2445]">
                  <a href="#!" className="w-[100px] lg:w-[120px] h-full">
                    <img src="/icon/logo.svg" alt="logo" className="w-full h-full" />
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-6 bg-[#8B95AC] z-0"></div>
              </div>
              <div className="bg-[#8B95AC] -skew-x-35 w-14 lg:w-14 absolute top-0 -right-6 lg:-right-7 z-10 inset-y-0"></div>
            </div>
            <div className="col-span-8 lg:col-span-9 grid grid-cols-12">
              <div className="col-span-12 flex items-center justify-end gap-5 my-2 px-6 lg:px-10">
                <img src="./icon/email.svg" alt="email" className="w-6 h-6 cursor-pointer" />
                <img src="./icon/loc.svg" alt="loc" className="w-6 h-6 cursor-pointer" />
                <img src="./icon/phone.svg" alt="phone" className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="col-span-12 h-10 bg-[#8B95AC] w-full flex justify-between items-center px-6 lg:px-10">
                <div className='flex relative h-full w-full'>
                  <div className='bg-[#8B95AC] -skew-x-35 h-full w-[45px] absolute -left-[54px]'>
                  </div>
                  <div className="flex items-center gap-4 lg:gap-6">
                    <a href="#!" className="text-white hover:text-[#0C2445] text-sm lg:text-base whitespace-nowrap">
                      Ana səhifə
                    </a>
                    <a href="#!" className="text-white hover:text-[#0C2445] text-sm lg:text-base whitespace-nowrap">
                      Haqqımızda
                    </a>
                    <a href="#!" className="text-white hover:text-[#0C2445] text-sm lg:text-base whitespace-nowrap">
                      Xidmətlərimiz
                    </a>
                    <a href="#!" className="text-white hover:text-[#0C2445] text-sm lg:text-base whitespace-nowrap hidden lg:inline">
                      Kateqoriya
                    </a>
                    <a href="#!" className="text-white hover:text-[#0C2445] text-sm lg:text-base whitespace-nowrap hidden lg:inline">
                      Məhsullar
                    </a>
                    <a href="#!" className="text-white hover:text-[#0C2445] text-sm lg:text-base whitespace-nowrap hidden xl:inline">
                      Bloqlar
                    </a>
                    <a href="#!" className="text-white hover:text-[#0C2445] text-sm lg:text-base whitespace-nowrap">
                      Əlaqə
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src="./icon/web.svg" alt="web" className="w-5 h-5 cursor-pointer" />
                  <img src="./icon/search.svg" alt="search" className="w-5 h-5 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0C2445] z-50 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white text-2xl">✕</button>
        <div className="flex flex-col gap-6 p-8 mt-16">
          <a href="#!" className="text-white hover:text-[#8B95AC] text-lg">Ana səhifə</a>
          <a href="#!" className="text-white hover:text-[#8B95AC] text-lg">Haqqımızda</a>
          <a href="#!" className="text-white hover:text-[#8B95AC] text-lg">Xidmətlərimiz</a>
          <a href="#!" className="text-white hover:text-[#8B95AC] text-lg">Kateqoriya</a>
          <a href="#!" className="text-white hover:text-[#8B95AC] text-lg">Məhsullar</a>
          <a href="#!" className="text-white hover:text-[#8B95AC] text-lg">Bloqlar</a>
          <a href="#!" className="text-white hover:text-[#8B95AC] text-lg">Əlaqə</a>
          <div className="flex gap-4 mt-8 pt-8 border-t border-[#8B95AC]">
            <img src="./icon/email.svg" alt="email" className="w-6 h-6 cursor-pointer" />
            <img src="./icon/loc.svg" alt="loc" className="w-6 h-6 cursor-pointer" />
            <img src="./icon/phone.svg" alt="phone" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 bg-[#0C2445]/40 z-40" ></div>
      )}
    </>
  );
}
