
function PhotoGallery() {
    return (
        <div className="flex flex-col m-auto max-w-[1420px] py-4">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3  gap-6 w-full py-4">
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
    )
}

export default PhotoGallery
