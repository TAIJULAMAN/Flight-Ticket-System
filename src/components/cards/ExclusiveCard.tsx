import Image from "next/image";

export default function ExclusiveCard({ item }: any) {
  return (
    <div>
      <div>
        <Image
          src={item?.img || ""}
          width={200}
          height={200}
          className="object-cover w-full rounded-lg"
          alt="exclusive image"
        />
      </div>
      <div className="flex justify-between items-center mt-1 mb-1">
        <p className="text-[1.2rem] font-semibold text-[#222222]">{item?.destination}</p>
        <p className="text-[1.5rem] primary-text flex gap-2 font-semibold items-center">
          <span>{item?.price}</span>BDT
        </p>
      </div>
      <p className="line-clamp-2 text-[#474747]">{item?.description}</p>

      <div className="flex w-full mt-3">
        <button className="flex items-center justify-center h-[40px] rounded-[8px] cursor-pointer text-[18px] w-full bg-[#254FD4] hover:bg-[#254ed4cc] text-[#FFFDF8] font-normal">See Details</button>
      </div>
    </div>
  );
}
