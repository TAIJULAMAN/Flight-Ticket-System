import ExclusiveSlider from "@/components/sliders/ExclusiveSlider";

import img1 from "@assets/landing/p1.webp";
import img2 from "@assets/landing/p2.webp";
import img3 from "@assets/landing/p3.webp";
import img4 from "@assets/landing/p4.webp";

const exclusiveData = [
  {
    img: img1,
    id: 1,
    destination: "Dhaka to Sylhet",
    price: "255",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et mi. Aliquam in hendrerit urna.",
  },
  {
    img: img2,
    id: 2,
    destination: "Dhaka to Chittagong",
    price: "300",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    img: img3,
    id: 3,
    destination: "Dhaka to Cox's Bazar",
    price: "350",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque.",
  },
  {
    img: img4,
    id: 4,
    destination: "Dhaka to Rajshahi",
    price: "275",
    description:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.",
  },
  {
    img: img1,
    id: 5,
    destination: "Dhaka to Khulna",
    price: "320",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit.",
  },
  {
    img: img3,
    id: 6,
    destination: "Dhaka to Barisal",
    price: "290",
    description:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat.",
  },
];
export default function ExclusiveFlight() {
  return (
    <div className="max-w-[1288px] mx-auto">
      <div className="flex items-center flex-col justify-center text-center">
        <h1 className="text-[28px] font-[500] text-[#222222] mb-2">Exclusive Flight Recommendations</h1>
        <div className="mb-[30px]">
          <svg
            width="280"
            height="3"
            viewBox="0 0 280 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              width="280"
              height="3"
              rx="1.5"
              fill="#254FD4"
            />
          </svg>
        </div>
      </div>
      <div>
        <ExclusiveSlider exclusiveData={exclusiveData} />
      </div>
    </div>
  );
}
