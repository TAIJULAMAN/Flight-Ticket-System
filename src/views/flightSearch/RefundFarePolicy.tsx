import { Divider } from '@mui/material';
import React from 'react';

const RefundFarePolicy: React.FC = () => {
    return (
        <div className='px-10 py-9'>
            <div className='flex justify-between mt-5 bg-[#D5DFFF] rounded-[11px] mx-5 '>
                <div className='  p-2 text-center w-1/2'>
                    <p className='text-[16px] font-medium' >Flight Details</p>
                </div>
                <div className='text-white p-2 bg-[#254FD4] rounded-r-[11px] text-center w-1/2'>
                    <p className='text-[16px] font-medium'>Refund & Fare Policy</p>
                </div>
            </div>
            <div className='mt-6'>
                <h1 className='text-[18px] text-[#222]'>Refund Policy</h1>
                <Divider sx={{ bgcolor: '#254FD4', marginTop: '8px' }} />
                <div className='mt-6'>

                    <div>
                        <p className='text-[16px] text-[#414141]'>
                            Refunds and Date Changes are done as per the following policies. <br />
                            Refund is calculated by deducting Airline’s fee and ST fee from the paid amount. <br />
                            Date Change fee is calculated by adding Airline’s fee, fare difference and ST fee.
                        </p>
                        <h1 className='text-[16px] text-[#222] font-semibold mt-3'>Refund:</h1>
                        <p className='text-[16px] text-[#414141]'>
                            Airline’s Fee prior 24 hour(s) of the flight departure is 0 <br />
                            Airline’s Fee after fight departure or no-show is 0 <br />
                        </p>
                        <h1 className='text-[16px] text-[#222] font-semibold mt-3'>Date Change:</h1>
                        <p className='text-[16px] text-[#414141] '>
                            Airline’s Fee prior 24 hour(s) of the flight departure is 0 <br />
                            Airline’s Fee after fight departure or no-show is 0
                        </p>
                        <h1 className='text-[16px] text-[#222] font-semibold my-3'>*Fees are shown for all traveler</h1>
                        <p className='text-[16px] text-[#414141]'>
                            *ST Convenience fee is non-refundable. We cannot guarantee the accuracy of airline refund/<br />
                            date change fees as they are subject to change without prior notice. <br />
                        </p>
                    </div>

                    <div className='mt-10'>
                        <span className='text-[16px] text-[#254FD4] font-semibold mr-2' >Show More information</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                            <path d="M1 5.875L5.75 1.125L10.5 5.875" stroke="#254FD4" stroke-width="1.46154" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RefundFarePolicy;