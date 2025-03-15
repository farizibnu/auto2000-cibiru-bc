export default function Features() {
    return (
        <div className="">
            <div className="text-red-500 text-xl p-4">
                <p className="font-semibold">Ayo pilih yang</p>
                <p className="font-bold">Anda Butuhkan!</p>
            </div>
            <div className="flex gap-2 px-2">
                <div className="bg-orange-500 w-full h-24 rounded-lg relative">
                    <img className="w-auto h-12 absolute right-0 top-0" src="../images/menu-calendar.png" alt="" />
                    <p className="text-white text-[8px] p-2 absolute bottom-0">Jadwalkan Servis</p>
                </div>
                <div className="bg-blue-500 w-full h-24 rounded-lg relative">
                    <img className="w-auto h-12 absolute right-0 top-0" src="../images/menu-money.png" alt="" />
                    <p className="text-white text-[8px] p-2 absolute bottom-0">Estimasi Harga</p>
                </div>
                <div className="bg-red-500 w-full h-24 rounded-lg relative">
                    <img className="w-auto h-10 absolute right-0 top-2" src="../images/menu-car.png" alt="" />
                    <p className="text-white text-[8px] p-2 absolute bottom-0">B&P Salon</p>
                </div>
            </div>
            <div className="w-full my-4 bg-red-500">
                <div className="flex items-center justify-center p-2">
                    <p className="text-xs font-medium text-white">Kenapa Auto2000 Bodi dan Cat Cibiru?</p>
                </div>
                <div className="grid grid-cols-4 gap-1 text-white justify-items-center text-center">
                    <div className="">
                        <p className="text-sm font-medium">4.9/5</p>
                        <p className="text-[8px] py-2">Kepuasan Pelanggan</p>
                    </div>
                    <div className="">
                        <p className="text-sm font-medium">96%</p>
                        <p className="text-[8px] py-2">Material Daur Ulang</p>
                    </div>
                    <div className="">
                        <p className="text-sm font-medium">8 Jam</p>
                        <p className="text-[8px] py-2">Maksimal Pengerjaan</p>
                    </div>
                    <div className="">
                        <p className="text-sm font-medium">15.782</p>
                        <p className="text-[8px] py-2">Kustomer Telah Percaya</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="p-2">
                    <p className="border-l-4 border-solid border-red-400 p-2 my-2 text-xs font-bold text-red-500">Promo dan Penawaran Lainnya</p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="h-24 rounded-lg border-2"></div>
                    <div className="h-24 rounded-lg border-2"></div>
                </div>
            </div>
        </div>
    )
}