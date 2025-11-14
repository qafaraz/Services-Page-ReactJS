import { useState } from "react"
import Footer from "./component/footer"
import Header from "./component/header"
import Categories from "./pages/categories"
import PhotoGallery from "./pages/photoGallery"
function App() {
  const [current, setcurrent] = useState(0);
  const toggle = (num) => {
    setcurrent(open === num ? null : num);
  };

  return (
    <>
      <Header />
      <main >
        <section className="bg-[url('/image/heroImage.png')] h-[500px] w-full bg-no-repeat bg-center bg-cover relative flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Korporativ Əməkdaşlıq
          </h1>
        </section>
        <section className="flex flex-col m-auto max-w-[1420px] py-4  px-2">
          <div className="flex pt-5 px-2">
            <a href="#!" className="text-[#8B95AC]">Ana səhifə</a>
            <a href="#!" className="text-[#8B95AC]">/ Xidmətlər /</a>
            <a href="#!" className="text-black">Korporativ Əməkdaşlıq</a>
          </div>
          <div className="w-full sm:text-[19px] text-[14px] my-1 px-2">
            Korporativ müştərilərimiz üçün xüsusi olaraq hazırlanmış əməkdaşlıq proqramımız bir sıra eksklüziv üstünlüklər və fərqli şərtlər təklif edir. Təmir-tikinti sahəsində layihələrinizin miqyasından asılı olmayaraq, sizin tələblərinizə uyğun çevik və peşəkar həllər təqdim edirik.
          </div>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-[#0C2445] -skew-x-12"></div>
              <h2 className="text-lg font-semibold text-[#0C2445]">Əlavə Məlumat</h2>
            </div>
            <div className="flex items-center text-sm text-[#8B95AC] gap-5">
              <button className={`${current === 0 ? " text-white bg-[#0C2445]" : "text-[#0C2445]"} border-2 border-[#0C2445] py-2 px-5`} onClick={() => toggle(0)}>Kateqoriyalar</button>
              <button className={`${current === 1 ? " text-white bg-[#0C2445]" : "text-[#0C2445]"} border-2 border-[#0C2445] py-2 px-5`} onClick={() => toggle(1)}>Mətin Variantı</button>
            </div>
          </div>
          {
            current === 0 ? <Categories /> : <PhotoGallery />
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
