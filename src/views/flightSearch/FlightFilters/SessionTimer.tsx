'use client'
import React, { useEffect, useState } from 'react';
import { Barlow } from "next/font/google";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const barlow = Barlow({
    weight: ["500"],
    subsets: ["latin"],
});

interface SessionTimerProps { }

const SessionTimer: React.FC<SessionTimerProps> = () => {
    const [timeLeft, setTimeLeft] = useState(30 * 60);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    Swal.fire({
                        title: 'Session Time Out',
                        icon: 'warning',
                        confirmButtonText: 'OK',
                    }).then(() => {
                        router.push('/');
                    });
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return { min, sec };
    };

    const { min, sec } = formatTime(timeLeft);

    return (
        <div>
            <div className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none">
                    <path
                        d="M10.5762 10.281L7.91752 8.7032V5.12939C7.91752 4.81382 7.66507 4.56136 7.3495 4.56136H7.30216C6.9866 4.56136 6.73414 4.81382 6.73414 5.12939V8.8531C6.73414 9.12922 6.87615 9.38956 7.12071 9.53157L10.0003 11.2593C10.2685 11.4171 10.6156 11.3382 10.7734 11.07C10.9391 10.7938 10.8523 10.4388 10.5762 10.281ZM14.7654 2.20249L12.3355 0.182848C12.0041 -0.0932743 11.5071 -0.0538284 11.2231 0.285408C10.947 0.616755 10.9943 1.11378 11.3257 1.39779L13.7477 3.41743C14.079 3.69355 14.576 3.6541 14.86 3.31487C14.9269 3.23564 14.9775 3.144 15.009 3.0452C15.0404 2.9464 15.0521 2.84236 15.0433 2.73905C15.0345 2.63574 15.0054 2.53517 14.9577 2.44311C14.91 2.35104 14.8447 2.26927 14.7654 2.20249ZM1.29058 3.41743L3.71257 1.39779C4.05181 1.11378 4.09914 0.616755 3.81513 0.285408C3.74973 0.205597 3.66913 0.139566 3.57801 0.0911456C3.48689 0.0427254 3.38706 0.0128794 3.28432 0.00333888C3.18157 -0.00620167 3.07796 0.00475319 2.97948 0.035568C2.881 0.0663827 2.78962 0.116444 2.71064 0.182848L0.280762 2.20249C0.20145 2.26927 0.136081 2.35104 0.0883936 2.44311C0.0407058 2.53517 0.0116342 2.63574 0.00284172 2.73905C-0.0059508 2.84236 0.00570819 2.9464 0.0371517 3.0452C0.0685952 3.144 0.119206 3.23564 0.186091 3.31487C0.462214 3.6541 0.959234 3.69355 1.29058 3.41743ZM7.52306 1.40568C5.63984 1.40578 3.8338 2.15399 2.50223 3.4857C1.17067 4.81741 0.422663 6.62354 0.422768 8.50676C0.422872 10.39 1.17108 12.196 2.50279 13.5276C3.8345 14.8592 5.64063 15.6072 7.52385 15.6071C8.45633 15.607 9.37966 15.4233 10.2411 15.0664C11.1026 14.7095 11.8854 14.1864 12.5447 13.527C13.204 12.8676 13.727 12.0848 14.0838 11.2233C14.4406 10.3618 14.6242 9.43845 14.6241 8.50597C14.6241 7.57349 14.4404 6.65016 14.0835 5.78868C13.7266 4.92721 13.2035 4.14446 12.5441 3.48514C11.8847 2.82582 11.1019 2.30283 10.2404 1.94603C9.37889 1.58924 8.45554 1.40562 7.52306 1.40568ZM7.52306 14.0284C4.47782 14.0284 2.00061 11.5512 2.00061 8.50597C2.00061 5.46073 4.47782 2.98352 7.52306 2.98352C10.5683 2.98352 13.0455 5.46073 13.0455 8.50597C13.0455 11.5512 10.5683 14.0284 7.52306 14.0284Z"
                        fill="#254FD4"
                    />
                </svg>
                <div className="text-[16px] text-[#162F7F] font-semibold">Session Timeout in</div>
            </div>
            <div className="flex justify-center gap-2">
                <div className='w-[50px]'>
                    <div className={`text-[45px] text-[#254FD4] font-medium ${barlow.className}`}> {min < 10 ? `0${min}` : min}</div>
                    <p className="text-[16px] font-light text-[#777] -mt-2">min</p>
                </div>
                <div className=''>
                    <p className="text-[35px] text-[#222] font-medium mt-2">:</p>
                </div>
                <div className='w-[50px]'>
                    <div className={`text-[45px] text-[#254FD4] font-medium ${barlow.className}`}>{sec < 10 ? `0${sec}` : sec}</div>
                    <p className="text-[16px] font-light text-[#777] -mt-2">sec</p>
                </div>
            </div>
        </div>
    );
};

export default SessionTimer;
