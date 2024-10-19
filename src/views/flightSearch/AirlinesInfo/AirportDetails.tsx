import React from 'react';
interface Props {
    flight: any;
}
const AirportDetails: React.FC<Props> = ({ flight }) => {
    return (
        <div className='py-5 px-3'>
            <div className='flex justify-between items-center gap-[10px] mb-6 px-2'>
                <div>
                    <h1 className='text-[16px] font-semibold text-[#162F7F] mb-2'>Dhaka (DAC)</h1>
                    <p className='text-xs font-medium mb-[2px] '>5:00 am</p>
                    <p className='text-xs font-medium'>14 April, Thursday</p>
                </div>
                <div className='flex flex-col items-center gap-[10px]'>
                    <p className='text-sm text-[#414141]'><span className='text-[16px] text-[#2C5FFF] font-semibold'>5</span> Hrs <span className='text-[16px] text-[#2C5FFF] font-semibold'>23</span> Minutes</p>
                    <div className='relative'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="141" height="12" viewBox="0 0 141 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C8.61244 12 10.8349 10.3304 11.6586 8H129.341C130.165 10.3304 132.388 12 135 12C138.314 12 141 9.31371 141 6C141 2.68629 138.314 0 135 0C132.388 0 130.165 1.66962 129.341 4H11.6586C10.8349 1.66962 8.61244 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#B9B9B9" />
                        </svg>
                        <div className='absolute top-[2px] right-16 bg-[#2C5FFF] w-[12px] h-[12px] rounded-[4px]'></div>
                    </div>

                    <p className='text-sm text-[#414141]'><span className='text-[16px] text-[#2C5FFF] font-semibold'>1</span> Stop</p>
                </div>
                <div>
                    <h1 className='text-[16px] font-semibold text-[#162F7F] mb-2'>Bangkok (DMC)</h1>
                    <p className='text-xs font-medium mb-[2px] '>12:00 pm</p>
                    <p className='text-xs font-medium'>14 April, Thursday</p>
                </div>
            </div>
            <div className='px-2'>
                <div className='flex items-center gap-[9px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="34" viewBox="0 0 10 34" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.5C10 7.91896 8.28224 9.93671 6 10.4V23.6C8.28224 24.0633 10 26.081 10 28.5C10 31.2614 7.76142 33.5 5 33.5C2.23858 33.5 0 31.2614 0 28.5C0 26.081 1.71776 24.0633 4 23.6V10.4C1.71776 9.93671 0 7.91896 0 5.5C0 2.73858 2.23858 0.5 5 0.5C7.76142 0.5 10 2.73858 10 5.5Z" fill="#D9D9D9" />
                    </svg>
                    <div>
                        <p className='text-xs text-[#464646] mb-[6px]'>DAC Hazrat Shahjalal Int Airport T1</p>
                        <p className='text-xs text-[#464646]'>DAC Hazrat Shahjalal Int Airport T1</p>
                    </div>
                </div>

                <div className='my-3 flex items-center'>
                    <div className='bg-[#2C5FFF] w-[12px] h-[12px] rounded-[4px]'></div>
                    <div className='px-3 py-1 rounded-[4px] bg-[#F2F6FF] w-max-fit'>
                        <p className='text-xs text-[#254FD4]'>Transfer in Dubai 3 Hr 20 min</p>
                        <p className='text-xs text-[#254FD4]'>A visa or, transit visa may required</p>
                    </div>
                </div>


                <div className='flex items-center gap-[9px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="34" viewBox="0 0 10 34" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.5C10 7.91896 8.28224 9.93671 6 10.4V23.6C8.28224 24.0633 10 26.081 10 28.5C10 31.2614 7.76142 33.5 5 33.5C2.23858 33.5 0 31.2614 0 28.5C0 26.081 1.71776 24.0633 4 23.6V10.4C1.71776 9.93671 0 7.91896 0 5.5C0 2.73858 2.23858 0.5 5 0.5C7.76142 0.5 10 2.73858 10 5.5Z" fill="#D9D9D9" />
                    </svg>
                    <div>
                        <p className='text-xs text-[#464646] mb-[6px]'>DXB Dubai Int Airport T2</p>
                        <p className='text-xs text-[#464646]'>BKK Subrabhumi Airport T2</p>
                    </div>
                </div>
            </div>
            <div className='my-6 py-1 rounded-[4px] bg-[#E5ECFF]'>
                <p className='text-sm text-[#222] text-center'>Baggage Details</p>
            </div>
            <div className='px-2'>

                <div className='flex items-center gap-2 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                        <path d="M13.993 11.3805L13.1019 3.8818C13.073 3.63748 12.955 3.4124 12.7705 3.24961C12.5861 3.08682 12.3481 2.99776 12.1021 2.99946H10.0006C10.0006 2.20395 9.68455 1.44103 9.12204 0.878521C8.55953 0.316014 7.79661 0 7.0011 0C6.2056 0 5.44267 0.316014 4.88016 0.878521C4.31766 1.44103 4.00164 2.20395 4.00164 2.99946H1.89765C1.65163 2.99776 1.41362 3.08682 1.22916 3.24961C1.0447 3.4124 0.926728 3.63748 0.897827 3.8818L0.00673706 11.3805C-0.0095927 11.5204 0.00384429 11.6622 0.0461669 11.7966C0.0884895 11.931 0.158742 12.055 0.252318 12.1603C0.34657 12.2661 0.462068 12.3508 0.591275 12.409C0.720482 12.4671 0.860497 12.4974 1.00218 12.4977H12.995C13.1376 12.4981 13.2785 12.4682 13.4087 12.41C13.5388 12.3518 13.6551 12.2667 13.7499 12.1603C13.843 12.0548 13.9128 11.9307 13.9547 11.7963C13.9966 11.6619 14.0096 11.5202 13.993 11.3805ZM5.00146 5.49901C5.00146 5.63159 4.94879 5.75875 4.85504 5.8525C4.76129 5.94625 4.63414 5.99892 4.50155 5.99892C4.36897 5.99892 4.24181 5.94625 4.14806 5.8525C4.05431 5.75875 4.00164 5.63159 4.00164 5.49901V4.49919C4.00164 4.36661 4.05431 4.23945 4.14806 4.1457C4.24181 4.05195 4.36897 3.99928 4.50155 3.99928C4.63414 3.99928 4.76129 4.05195 4.85504 4.1457C4.94879 4.23945 5.00146 4.36661 5.00146 4.49919V5.49901ZM7.0011 0.99982C7.53144 0.99982 8.04006 1.2105 8.41506 1.5855C8.79007 1.96051 9.00074 2.46912 9.00074 2.99946H5.00146C5.00146 2.46912 5.21214 1.96051 5.58714 1.5855C5.96215 1.2105 6.47077 0.99982 7.0011 0.99982ZM10.0006 5.49901C10.0006 5.63159 9.94789 5.75875 9.85414 5.8525C9.76039 5.94625 9.63324 5.99892 9.50065 5.99892C9.36807 5.99892 9.24091 5.94625 9.14716 5.8525C9.05341 5.75875 9.00074 5.63159 9.00074 5.49901V4.49919C9.00074 4.36661 9.05341 4.23945 9.14716 4.1457C9.24091 4.05195 9.36807 3.99928 9.50065 3.99928C9.63324 3.99928 9.76039 4.05195 9.85414 4.1457C9.94789 4.23945 10.0006 4.36661 10.0006 4.49919V5.49901Z" fill="#254FD4" />
                    </svg>
                    <p className='text-sm text-[#414141]'>Hand Baggage: <span className='text-[16px] text-[#222]'>2 × 3 kg</span></p>
                </div>
                <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
                        <path d="M3.1174 0.497742C2.97153 0.497742 2.83164 0.555688 2.72849 0.658833C2.62535 0.761978 2.5674 0.901873 2.5674 1.04774C2.5674 1.19361 2.62535 1.33351 2.72849 1.43665C2.83164 1.5398 2.97153 1.59774 3.1174 1.59774H3.3V2.69774H2.2C1.61652 2.69774 1.05694 2.92953 0.644365 3.34211C0.231785 3.75469 0 4.31427 0 4.89774V12.5977C0 13.1812 0.231785 13.7408 0.644365 14.1534C1.05694 14.566 1.61652 14.7977 2.2 14.7977V15.3477C2.2 15.4936 2.25795 15.6335 2.36109 15.7367C2.46424 15.8398 2.60413 15.8977 2.75 15.8977C2.89587 15.8977 3.03576 15.8398 3.13891 15.7367C3.24205 15.6335 3.3 15.4936 3.3 15.3477V14.7977H7.7V15.3477C7.7 15.4936 7.75795 15.6335 7.86109 15.7367C7.96424 15.8398 8.10413 15.8977 8.25 15.8977C8.39587 15.8977 8.53576 15.8398 8.63891 15.7367C8.74205 15.6335 8.8 15.4936 8.8 15.3477V14.7977C9.38348 14.7977 9.94306 14.566 10.3556 14.1534C10.7682 13.7408 11 13.1812 11 12.5977V4.89774C11 4.31427 10.7682 3.75469 10.3556 3.34211C9.94306 2.92953 9.38348 2.69774 8.8 2.69774H7.7V1.59774H7.8837C8.02957 1.59774 8.16946 1.5398 8.27261 1.43665C8.37575 1.33351 8.4337 1.19361 8.4337 1.04774C8.4337 0.901873 8.37575 0.761978 8.27261 0.658833C8.16946 0.555688 8.02957 0.497742 7.8837 0.497742H3.1174ZM4.4 2.69774V1.59774H6.6V2.69774H4.4ZM2.2 6.54774C2.2 6.40187 2.25795 6.26198 2.36109 6.15883C2.46424 6.05569 2.60413 5.99774 2.75 5.99774H8.25C8.39587 5.99774 8.53576 6.05569 8.63891 6.15883C8.74205 6.26198 8.8 6.40187 8.8 6.54774C8.8 6.69361 8.74205 6.83351 8.63891 6.93665C8.53576 7.0398 8.39587 7.09774 8.25 7.09774H2.75C2.60413 7.09774 2.46424 7.0398 2.36109 6.93665C2.25795 6.83351 2.2 6.69361 2.2 6.54774Z" fill="#254FD4" />
                    </svg>
                    <p className='text-sm text-[#414141]'>Carry-on Baggage: <span className='text-[16px] text-[#222]'>1 × 7 kg</span></p>
                </div>

            </div>
        </div>
    );
};

export default AirportDetails;