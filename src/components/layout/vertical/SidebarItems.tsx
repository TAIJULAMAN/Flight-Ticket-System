import { MenuItem } from "./MenuItem";
import { usePathname } from "next/navigation";

const SidebarItems = () => {
  const router = usePathname();

  const menuItems = [
    {
      href: "/b2c/profile",
      icon: (
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.44723 0.891785C9.52259 0.891785 10.5539 1.31897 11.3143 2.07937C12.0747 2.83977 12.5019 3.87109 12.5019 4.94645C12.5019 6.02182 12.0747 7.05314 11.3143 7.81354C10.5539 8.57393 9.52259 9.00112 8.44723 9.00112C7.37186 9.00112 6.34054 8.57393 5.58014 7.81354C4.81975 7.05314 4.39256 6.02182 4.39256 4.94645C4.39256 3.87109 4.81975 2.83977 5.58014 2.07937C6.34054 1.31897 7.37186 0.891785 8.44723 0.891785ZM8.44723 17.1105C8.44723 17.1105 16.5566 17.1105 16.5566 15.0831C16.5566 12.6503 12.6033 10.0148 8.44723 10.0148C4.29119 10.0148 0.337891 12.6503 0.337891 15.0831C0.337891 17.1105 8.44723 17.1105 8.44723 17.1105Z"
            fill="#1D3FAA"
          />
        </svg>
      ),
      label: "Profile",
    },
    {
      href: "/b2c/my-booking",
      icon: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.4801 0.891785H9.39806C8.98043 0.891785 8.39554 1.13405 8.10057 1.42903L0.559898 8.9697C0.417713 9.11255 0.337891 9.3059 0.337891 9.50745C0.337891 9.709 0.417713 9.90235 0.559898 10.0452L7.0869 16.5722C7.22975 16.7144 7.4231 16.7942 7.62465 16.7942C7.8262 16.7942 8.01955 16.7144 8.1624 16.5722L15.7031 9.03153C15.9991 8.73554 16.2403 8.15167 16.2403 7.73404V1.65203C16.2395 1.45065 16.1592 1.25774 16.0168 1.11534C15.8744 0.97294 15.6814 0.892585 15.4801 0.891785ZM11.6788 6.97379C11.4791 6.97372 11.2813 6.93431 11.0968 6.85781C10.9123 6.78131 10.7446 6.66922 10.6034 6.52794C10.4623 6.38665 10.3503 6.21894 10.2739 6.03438C10.1975 5.84981 10.1582 5.65201 10.1583 5.45227C10.1584 5.25253 10.1978 5.05476 10.2743 4.87025C10.3508 4.68574 10.4629 4.5181 10.6042 4.37691C10.7454 4.23571 10.9132 4.12373 11.0977 4.04736C11.2823 3.97098 11.4801 3.93171 11.6798 3.93177C12.0832 3.93191 12.47 4.09228 12.7552 4.37762C13.0403 4.66296 13.2005 5.04989 13.2003 5.45329C13.2002 5.85668 13.0398 6.2435 12.7545 6.52865C12.4691 6.8138 12.0822 6.97392 11.6788 6.97379Z"
            fill="#1D3FAA"
          />
        </svg>
      ),
      label: "My Booking",
    },
    {
      href: "/b2c/favorite-guest",
      icon: (
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.65403 7.18655C8.57437 7.18655 9.45702 6.82094 10.1078 6.17016C10.7586 5.51938 11.1242 4.63673 11.1242 3.71638C11.1242 2.79604 10.7586 1.91339 10.1078 1.2626C9.45702 0.611822 8.57437 0.246216 7.65403 0.246216C6.73368 0.246216 5.85103 0.611822 5.20025 1.2626C4.54947 1.91339 4.18386 2.79604 4.18386 3.71638C4.18386 4.63673 4.54947 5.51938 5.20025 6.17016C5.85103 6.82094 6.73368 7.18655 7.65403 7.18655ZM16.3294 8.34327C17.0964 8.34327 17.8319 8.0386 18.3743 7.49628C18.9166 6.95396 19.2212 6.21842 19.2212 5.45146C19.2212 4.68451 18.9166 3.94897 18.3743 3.40665C17.8319 2.86433 17.0964 2.55966 16.3294 2.55966C15.5625 2.55966 14.8269 2.86433 14.2846 3.40665C13.7423 3.94897 13.4376 4.68451 13.4376 5.45146C13.4376 6.21842 13.7423 6.95396 14.2846 7.49628C14.8269 8.0386 15.5625 8.34327 16.3294 8.34327ZM1.42508 16.9354C1.1979 16.7945 1.01542 16.5919 0.8989 16.3513C0.782378 16.1106 0.736604 15.8419 0.766908 15.5762C0.980156 13.9002 1.79726 12.3595 3.0651 11.2427C4.33293 10.126 5.96449 9.50988 7.65403 9.50988C9.34356 9.50988 10.9751 10.126 12.243 11.2427C13.5108 12.3595 14.3279 13.9002 14.5411 15.5762C14.6082 16.1164 14.3422 16.6404 13.8818 16.9342C12.0233 18.1254 9.86149 18.757 7.65403 18.7538C5.44629 18.7576 3.28402 18.1264 1.42508 16.9354ZM16.3294 16.4403H16.2068C16.2878 16.0968 16.3086 15.7336 16.2624 15.3611C16.0646 13.771 15.4287 12.2671 14.4255 11.0176C15.071 10.7632 15.7609 10.6405 16.4546 10.6566C17.1483 10.6728 17.8317 10.8274 18.4648 11.1115C19.0978 11.3956 19.6677 11.8034 20.1409 12.3109C20.614 12.8184 20.9809 13.4154 21.2201 14.0667C21.2931 14.2746 21.2916 14.5015 21.2156 14.7084C21.1396 14.9152 20.9939 15.0892 20.8036 15.2003C19.4533 16.0141 17.906 16.4429 16.3294 16.4403Z"
            fill="#1D3FAA"
          />
        </svg>
      ),
      label: "Favorite Guest List",
    },
    {
      href: "/b2c/change-password",
      icon: (
        <svg
          width="24"
          height="21"
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.2587 0.0518799C18.9323 0.0518799 23.5286 4.66872 23.5286 10.3115C23.5286 15.9543 18.9323 20.5712 13.2587 20.5712C9.65759 20.5712 6.50787 18.7039 4.67139 15.8825L6.29242 14.6001C7.73903 16.9495 10.3142 18.5193 13.269 18.5193C15.4458 18.5193 17.5335 17.6545 19.0727 16.1153C20.612 14.576 21.4767 12.4884 21.4767 10.3115C21.4767 8.13471 20.612 6.04704 19.0727 4.5078C17.5335 2.96855 15.4458 2.10381 13.269 2.10381C9.08305 2.10381 5.6358 5.24327 5.13308 9.28557H7.96474L4.12763 13.1124L0.300781 9.28557H3.06063C3.57361 4.10444 7.94422 0.0518799 13.2587 0.0518799ZM16.2956 8.50583C16.8086 8.51609 17.2292 8.92648 17.2292 9.44972V14.1794C17.2292 14.6924 16.8086 15.1233 16.2853 15.1233H10.6117C10.0885 15.1233 9.66785 14.6924 9.66785 14.1794V9.44972C9.66785 8.92648 10.0885 8.51609 10.6015 8.50583V7.46961C10.6015 5.89988 11.8839 4.62769 13.4434 4.62769C15.0131 4.62769 16.2956 5.89988 16.2956 7.46961V8.50583ZM13.4434 6.06404C12.6739 6.06404 12.0378 6.68988 12.0378 7.46961V8.50583H14.8592V7.46961C14.8592 6.68988 14.2231 6.06404 13.4434 6.06404Z"
            fill="#1D3FAA"
          />
        </svg>
      ),
      label: "Change Password",
    },
    {
      href: "/b2c/transaction",
      icon: (
        <svg
          width="22"
          height="17"
          viewBox="0 0 22 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.9989 7.38017L21.9995 13.1299C21.9995 14.7222 20.7565 16.0242 19.1879 16.1185L19.0055 16.1239H3.24287C1.65055 16.1239 0.348555 14.8809 0.254295 13.3123L0.248831 13.1299L0.248047 7.38017H21.9989ZM17.932 11.1965H15.2101L15.0993 11.204C14.7008 11.2581 14.3936 11.5997 14.3936 12.0131C14.3936 12.4265 14.7008 12.7681 15.0993 12.8222L15.2101 12.8296H17.932L18.0428 12.8222C18.4414 12.7681 18.7486 12.4265 18.7486 12.0131C18.7486 11.5997 18.4414 11.2581 18.0428 11.204L17.932 11.1965ZM19.0055 0.876038C20.5978 0.876038 21.8998 2.11906 21.994 3.68769L21.9995 3.87007L21.9989 5.74706H0.248047L0.248831 3.87007C0.248831 2.27776 1.49185 0.975761 3.06048 0.881502L3.24287 0.876038H19.0055Z"
            fill="#1D3FAA"
          />
        </svg>
      ),
      label: "Transaction",
    },
    {
      href: "/b2c/notification",
      icon: (
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.3766 12.9652C15.3092 12.884 15.243 12.8027 15.178 12.7243C14.2844 11.6435 13.7437 10.9911 13.7437 7.93124C13.7437 6.34707 13.3647 5.04725 12.6177 4.07238C12.0669 3.35219 11.3224 2.80586 10.341 2.4021C10.3284 2.39508 10.3171 2.38586 10.3077 2.37489C9.95473 1.19286 8.9888 0.401184 7.89938 0.401184C6.80997 0.401184 5.84444 1.19286 5.49146 2.37367C5.48205 2.38426 5.47093 2.39318 5.45855 2.40007C3.16842 3.34285 2.05545 5.15164 2.05545 7.93002C2.05545 10.9911 1.51561 11.6435 0.621172 12.7231C0.556181 12.8015 0.489971 12.8811 0.422542 12.964C0.248366 13.1741 0.138011 13.4296 0.104537 13.7004C0.0710638 13.9712 0.115873 14.246 0.233661 14.4921C0.484284 15.0202 1.01843 15.348 1.62813 15.348H14.1751C14.782 15.348 15.3125 15.0206 15.5639 14.4949C15.6822 14.2487 15.7274 13.9738 15.6942 13.7027C15.661 13.4315 15.5508 13.1756 15.3766 12.9652ZM7.89938 18.5987C8.48635 18.5983 9.06225 18.4389 9.56599 18.1376C10.0697 17.8364 10.4825 17.4044 10.7606 16.8874C10.7737 16.8627 10.7802 16.8349 10.7794 16.8069C10.7786 16.7789 10.7706 16.7516 10.7561 16.7276C10.7417 16.7036 10.7212 16.6837 10.6968 16.67C10.6724 16.6562 10.6449 16.649 10.6168 16.649H5.18275C5.15469 16.6489 5.12708 16.6561 5.10262 16.6698C5.07816 16.6836 5.05767 16.7034 5.04315 16.7274C5.02863 16.7514 5.02057 16.7788 5.01977 16.8068C5.01896 16.8349 5.02543 16.8626 5.03855 16.8874C5.3166 17.4043 5.72934 17.8363 6.23301 18.1375C6.73667 18.4388 7.31248 18.5982 7.89938 18.5987Z"
            fill="#1D3FAA"
          />
        </svg>
      ),
      label: "Notification",
    },
    {
      href: "/b2c/reward-coins",
      icon: (
        <svg
          width="25"
          height="19"
          viewBox="0 0 25 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.1026 5.74097V5.19612C18.1026 2.74286 14.4022 0.892151 9.49466 0.892151C4.58716 0.892151 0.886719 2.74286 0.886719 5.19612V9.10883C0.886719 11.1522 3.45443 12.776 7.14704 13.2622V13.8041C7.14704 16.2573 10.8475 18.108 15.755 18.108C20.6625 18.108 24.3629 16.2573 24.3629 13.8041V9.89137C24.3629 7.86654 21.8764 6.24082 18.1026 5.74097ZM5.58196 11.3459C3.66572 10.8109 2.4518 9.92952 2.4518 9.10883V7.73253C3.24999 8.29792 4.31914 8.75375 5.58196 9.05992V11.3459ZM13.4074 9.05992C14.6702 8.75375 15.7393 8.29792 16.5375 7.73253V9.10883C16.5375 9.92952 15.3236 10.8109 13.4074 11.3459V9.05992ZM11.8423 16.0412C9.92604 15.5061 8.71212 14.6248 8.71212 13.8041V13.3962C8.96938 13.406 9.22958 13.4128 9.49466 13.4128C9.8742 13.4128 10.2449 13.4001 10.6088 13.3786C11.0131 13.5233 11.4248 13.646 11.8423 13.7464V16.0412ZM11.8423 11.6765C11.065 11.7914 10.2804 11.8486 9.49466 11.8477C8.70897 11.8486 7.9243 11.7914 7.14704 11.6765V9.34946C7.92546 9.45081 8.70968 9.50113 9.49466 9.5001C10.2797 9.50113 11.0639 9.45081 11.8423 9.34946V11.6765ZM18.1026 16.3718C16.5458 16.5999 14.9641 16.5999 13.4074 16.3718V14.0388C14.1855 14.1434 14.9698 14.1957 15.755 14.1953C16.54 14.1964 17.3242 14.1461 18.1026 14.0447V16.3718ZM22.7979 13.8041C22.7979 14.6248 21.5839 15.5061 19.6677 16.0412V13.7552C20.9305 13.449 21.9997 12.9932 22.7979 12.4278V13.8041Z"
            fill="#1D3FAA"
          />
        </svg>
      ),
      label: "Reward Coins",
    },
    {
      href: "/b2c/price-alert",
      icon: (
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.3766 12.9103C15.3092 12.8291 15.243 12.7479 15.178 12.6695C14.2844 11.5886 13.7437 10.9362 13.7437 7.87637C13.7437 6.2922 13.3647 4.99238 12.6177 4.01751C12.0669 3.29732 11.3224 2.75099 10.341 2.34723C10.3284 2.34021 10.3171 2.33099 10.3077 2.32002C9.95473 1.13799 8.9888 0.346313 7.89938 0.346313C6.80997 0.346313 5.84444 1.13799 5.49146 2.3188C5.48205 2.32939 5.47093 2.33831 5.45855 2.3452C3.16842 3.28798 2.05545 5.09677 2.05545 7.87515C2.05545 10.9362 1.51561 11.5886 0.621172 12.6683C0.556181 12.7466 0.489971 12.8263 0.422542 12.9091C0.248366 13.1192 0.138011 13.3747 0.104537 13.6455C0.0710638 13.9164 0.115873 14.1911 0.233661 14.4372C0.484284 14.9653 1.01843 15.2931 1.62813 15.2931H14.1751C14.782 15.2931 15.3125 14.9657 15.5639 14.4401C15.6822 14.1939 15.7274 13.9189 15.6942 13.6478C15.661 13.3767 15.5508 13.1207 15.3766 12.9103ZM7.89938 18.5439C8.48635 18.5434 9.06225 18.3841 9.56599 18.0828C10.0697 17.7815 10.4825 17.3495 10.7606 16.8326C10.7737 16.8078 10.7802 16.7801 10.7794 16.752C10.7786 16.724 10.7706 16.6967 10.7561 16.6727C10.7417 16.6487 10.7212 16.6289 10.6968 16.6151C10.6724 16.6013 10.6449 16.5941 10.6168 16.5941H5.18275C5.15469 16.594 5.12708 16.6012 5.10262 16.6149C5.07816 16.6287 5.05767 16.6485 5.04315 16.6725C5.02863 16.6965 5.02057 16.7239 5.01977 16.7519C5.01896 16.78 5.02543 16.8078 5.03855 16.8326C5.3166 17.3494 5.72934 17.7814 6.23301 18.0827C6.73667 18.384 7.31248 18.5433 7.89938 18.5439Z"
            fill="#1D3FAA"
          />
        </svg>
      ),
      label: "Price Alert",
    },
  ];

  return (
    <div>
      <hr className="border mb-4" />
      {menuItems.map((item) => (
        <MenuItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          active={router === item.href} // Check if the current route matches the item href
        >
          {item.label}
        </MenuItem>
      ))}
      <div className="mt-[80px] w-full flex items-center ">
        <div className="flex items-center justify-between w-full ps-1">
          <button className="flex justify-between items-center cursor-pointer hover:bg-gray-100 rounded-md transition-all duration-200 py-2 px-4 w-full bg-transparent text-[16px]">
            Logout
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.67318 16.5127C2.18351 16.5127 1.76448 16.3385 1.41607 15.99C1.06767 15.6416 0.893172 15.2223 0.892578 14.7321V2.26784C0.892578 1.77818 1.06708 1.35914 1.41607 1.01074C1.76507 0.662336 2.18411 0.487837 2.67318 0.487244H8.90528V2.26784H2.67318V14.7321H8.90528V16.5127H2.67318ZM12.4665 12.9515L11.2423 11.6605L13.5126 9.39025H6.23438V7.60965H13.5126L11.2423 5.33938L12.4665 4.04845L16.918 8.49995L12.4665 12.9515Z"
                fill="#254FD4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarItems;
