import { useState } from "react";

function Categories() {
    const [open, setOpen] = useState(null);
    const toggle = (num) => {
        setOpen(open === num ? null : num);
    };
    return (
        <div className="mt-4 bg-[#091A3A]" >
            <div className="grid grid-cols-12 border-b border-[#ffffff]">
                <div
                    className="col-span-6 flex items-center gap-4 px-6 py-5 cursor-pointer" onClick={() => toggle(1)}>
                    <img src="/icon/build.svg" className="w-6 h-6 transition" />
                    <span className="text-white text-[17px]">İmkanlarımız</span>
                </div>
                <div className="col-span-4 px-6 py-5"></div>
                <div className="col-span-2 flex justify-end items-center px-6 py-5 " onClick={() => toggle(1)}>
                    <button className="text-white text-3xl leading-none cursor-pointer">
                        {open === 1 ? "-" : "+"}
                    </button>
                </div>
                {open === 1 && (
                    <div className="col-span-12 py-6 bg-white  text-black text-[15px]">
                        <div className="px-2">
                            TTM inşaat sənayesinin istənilən məhsul və materiallarının beynəlxalq və yerli daşınmasını həyata keçirir:
                            <ul className="list-disc px-6">
                                <li>Tikinti texnikası</li>
                                <li>Ekskavatorlar, buldozerlər və digər ağır maşınlar</li>
                                <li>Beton və dəmir-beton konstruksiyalar</li>
                                <li>Tikinti materialları (sement, qum, çınqıl və s.)</li>
                                <li>Metal konstruksiyalar və profillər</li>
                                <li>Şüşə panellər və fasad materialları</li>
                                <li>İnşaat üçün elektrik və su təchizatı sistemləri</li>
                                <li>Mühəndis avadanlıqları</li>
                            </ul>
                            <p>
                                Bəzi tikinti materiallarının və texnikasının daşınması xüsusi şərtlərə əməl etməyi tələb edir. Məsələn, iri həcmli texnika çəki və ölçülərinə görə yol hərəkəti normalarını üstələyə bilər. Bu cür hallarda daşınma prosesində nəqliyyat vasitəsi, sürücü və digər yol iştirakçıları üçün təhlükəsizlik riskləri yaranır.
                            </p>
                            <p>
                                TTM, ölçüləri və çəkisi normadan artıq olan yüklərin daşınmasını həyata keçirmək üçün zəruri dövlət icazələrini alır, marşrutun əvvəlcədən razılaşdırılmasını təmin edir və konvoy müşayiəti, texniki dəstək kimi təşkilati tədbirləri vaxtında həyata keçirir.
                            </p>
                            <p>
                                Bundan əlavə, inşaat avadanlıqları və materialları bəzən yüksək dəyərə malik olduğuna görə xüsusi qoruma və diqqət tələb edir. TTM, bu cür yüklərin daşınması zamanı bütün riskləri nəzərə alır, yalnız etibarlı logistika tərəfdaşları ilə əməkdaşlıq edir, daşınan mallar üçün “bütün risklərə qarşı” tam sığorta təmin edir və onların salamat şəkildə çatdırılmasına zəmanət verir.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 w-full py-4">
                            <div className="w-full">
                                <img src="./image/peoples.png" className="w-full" />
                                <p className="mt-2">
                                    Yeni layihə çərçivəsində görüş keçirilib və təmir-tikinti sahəsində qazandığımız uğurlardan bəhs edilib.
                                </p>
                            </div>
                            <div className="w-full">
                                <img src="./image/peoples.png" className="w-full" />
                                <p className="mt-2">
                                    Yeni layihə çərçivəsində görüş keçirilib və təmir-tikinti sahəsində qazandığımız uğurlardan bəhs edilib.
                                </p>
                            </div>
                            <div className="w-full relative">
                                <img src="./image/peoples.png" className="w-full" />
                                <p className="mt-2">
                                    Yeni layihə çərçivəsində görüş keçirilib və təmir-tikinti sahəsində qazandığımız uğurlardan bəhs edilib.
                                </p>
                                <a href="#!" target="_blank">
                                    <img src="./icon/videoPlay.svg" alt="videoPlay" className="absolute top-5 right-10 cursor-pointer" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-12 border-b border-[#ffffff]">
                <div
                    className="col-span-6 flex items-center gap-4 px-6 py-5 cursor-pointer" onClick={() => toggle(2)}>
                    <img src="/icon/quality.svg" className="w-6 h-6 transition" />
                    <span className="text-white text-[17px]">Üstünlüklərimiz</span>
                </div>
                <div className="col-span-4 px-6 py-5"></div>
                <div className="col-span-2 flex justify-end items-center px-6 py-5 " onClick={() => toggle(2)}>
                    <button className="text-white text-3xl leading-none cursor-pointer">
                        {open === 2 ? "-" : "+"}
                    </button>
                </div>
                {open === 2 && (
                    <div className="col-span-12 py-6 bg-white  text-black text-[15px]">
                        <div className="px-2">
                            Dziyner qaqas hecne vermeyib!
                        </div>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-12 border-b border-[#ffffff]">
                <div
                    className="col-span-6 flex items-center gap-4 px-6 py-5 cursor-pointer" onClick={() => toggle(3)}>
                    <img src="/icon/builder.svg" className="w-6 h-6 transition" />
                    <span className="text-white text-[17px]">Təkliflərimiz</span>
                </div>
                <div className="col-span-4 px-6 py-5"></div>
                <div className="col-span-2 flex justify-end items-center px-6 py-5 " onClick={() => toggle(3)}>
                    <button className="text-white text-3xl leading-none cursor-pointer">
                        {open === 3 ? "-" : "+"}
                    </button>
                </div>
                {open === 3 && (
                    <div className="col-span-12 py-6 bg-white  text-black text-[15px]">
                        <div className="px-2">
                            Dziyner qaqas hecne vermeyib!
                        </div>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-12 border-b border-[#ffffff]">
                <div
                    className="col-span-6 flex items-center gap-4 px-6 py-5 cursor-pointer" onClick={() => toggle(4)}>
                    <img src="/icon/customer-service.svg" className="w-6 h-6 transition" />
                    <span className="text-white text-[17px]">Xidmətlərimiz</span>
                </div>
                <div className="col-span-4 px-6 py-5"></div>
                <div className="col-span-2 flex justify-end items-center px-6 py-5 " onClick={() => toggle(4)}>
                    <button className="text-white text-3xl leading-none cursor-pointer">
                        {open === 4 ? "-" : "+"}
                    </button>
                </div>
                {open === 4 && (
                    <div className="col-span-12 py-6 bg-white  text-black text-[15px]">
                        <div className="px-2">
                            Dziyner qaqas hecne vermeyib!
                        </div>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-12 border-b border-[#ffffff]">
                <div
                    className="col-span-6 flex items-center gap-4 px-6 py-5 cursor-pointer" onClick={() => toggle(5)}>
                    <img src="/icon/multiple.svg" className="w-6 h-6 transition" />
                    <span className="text-white text-[17px]">Daha çox</span>
                </div>
                <div className="col-span-4 px-6 py-5"></div>
                <div className="col-span-2 flex justify-end items-center px-6 py-5 " onClick={() => toggle(5)}>
                    <button className="text-white text-3xl leading-none cursor-pointer">
                        {open === 5 ? "-" : "+"}
                    </button>
                </div>
                {open === 5 && (
                    <div className="col-span-12 py-6 bg-white  text-black text-[15px]">
                        <div className="px-2">
                            Dziyner qaqas hecne vermeyib!
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Categories
