'use client'
import React, { useState } from 'react'
import CustomTooltip from '@/components/shared/CustomTooltip'
import Image from 'next/image'
import qatarAirwayLogo from '../../../../public/images/pages/qatar-air-logo.svg'
import AirlinesClass from '../AirlinesInfo/AirlinesClass'
import AirlinesDetails from '../AirlinesInfo/AirlinesDetails'
import AirportDetails from '../AirlinesInfo/AirportDetails'
import Link from 'next/link'
import { Drawer } from '@mui/material'
import FlightDetails from '../FlightDetails'
import RefundFarePolicy from '../RefundFarePolicy'
import { formatDate, formatTime } from '@/components/FormatTimeDate/FormatTimeDate'

interface Props {
    flight: any;
    getCarrierFullName: any;
}


const FlightCard: React.FC<Props> = ({ flight, getCarrierFullName }) => {


    console.log(flight)

    const [openFlightDetails, setOpenFlightDetails] = useState(false);

    const toggleFlightDetails = (newOpen: boolean) => () => {
        setOpenFlightDetails(newOpen);
    };
    const [openRefund, setOpenRefund] = useState(false);

    const toggleRefund = (newOpen: boolean) => () => {
        setOpenRefund(newOpen);
    };
    return (

        <div className="bg-white rounded-[12px] shadow-md my-6 w-[763px]" >
            <div className="px-4 py-2 flex gap-4">
                <div className='w-[112px] flex justify-center items-center pr-4 border-r'>
                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[10px] text-white font-medium bg-[#5640E0] rounded-[2px] py-1 px-2 mb-3'>Lowest Price</p>
                        <Image
                            src={qatarAirwayLogo}
                            alt="airline logo"
                        />
                        <CustomTooltip title={<AirlinesClass />}>
                            <h1 className='text-sm text-[#162F7F] mb-1 capitalize'>{getCarrierFullName(flight?.itineraries[0]?.segments[0]?.carrierCode)}</h1>
                        </CustomTooltip>

                        <p className='text-xs text-[#008C41]'>Refundable</p>

                        <CustomTooltip title={<AirlinesDetails />}>
                            <div className='flex gap-3 mt-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                                    <path d="M3.99726 1.39101V4.1677C3.99726 4.34566 3.85347 4.48907 3.67629 4.48907H3.59049C3.41332 4.48907 3.26912 4.34566 3.26912 4.1677V1.37829C3.26912 0.920677 2.96127 0.784027 2.6661 0.784027C2.37094 0.784027 2.06309 0.920677 2.06309 1.37829V4.1677C2.06309 4.34566 1.91889 4.48907 1.74172 4.48907H1.65591C1.47874 4.48907 1.33495 4.34566 1.33495 4.1677V1.39101C1.33495 0.571896 0.167057 0.599709 0.167057 1.40013C0.167057 2.35866 0.167057 4.05169 0.167057 4.05169C0.16149 5.52385 0.513448 5.90639 1.09422 6.3652C1.56256 6.73463 1.96257 6.94635 1.96257 7.86397V13.7669H3.36959V7.86397C3.36959 6.94635 3.7696 6.73463 4.23794 6.3652C4.81909 5.90639 5.17067 5.52385 5.1651 4.05169C5.1651 4.05169 5.1651 2.35866 5.1651 1.40013C5.16513 0.599709 3.99726 0.571896 3.99726 1.39101Z" fill="#1D3FAA" />
                                    <path d="M8.52586 1.66728C8.22714 2.50505 7.36712 4.46779 7.31269 6.20135C7.22846 8.89224 8.87741 8.49421 8.9068 10.2571V13.783H10.3071L10.3138 13.8005C10.3138 13.8005 10.3138 13.7934 10.3138 13.783C10.3138 13.5475 10.3138 10.7418 10.3138 7.87968C10.3138 5.04859 10.3138 2.16463 10.3138 1.6673C10.3138 0.645572 8.991 0.363553 8.52586 1.66728Z" fill="#1D3FAA" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                                    <path d="M5.32537 5.83391H10.43L2.40842 14.5848L4.59614 8.02162H0.220703L6.05461 0L5.32537 5.83391Z" fill="#1D3FAA" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                                    <path d="M10.0488 9.16027C9.40181 8.51329 8.35321 8.51329 7.70623 9.16027C7.05925 9.80725 7.05925 10.8559 7.70623 11.5028C8.35321 12.1498 9.40181 12.1498 10.0488 11.5028C10.6958 10.8559 10.6958 9.80725 10.0488 9.16027ZM14.5384 7.0132L12.8793 8.67237C10.6694 6.46257 7.08614 6.46257 4.87633 8.67237L3.21715 7.0132C6.34337 3.88698 11.4122 3.88698 14.5384 7.0132ZM15.7091 5.84192C11.936 2.06872 5.81851 2.06872 2.04531 5.84192L0.337402 4.13401C5.0539 -0.58249 12.7006 -0.58249 17.4171 4.13401L15.7091 5.84192Z" fill="#1D3FAA" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                    <path d="M0.324219 0.965019V11.6198H13.4378V0.965019H0.324219ZM6.16386 1.98952H7.59816V2.80912H6.16386V1.98952ZM2.68057 10.5953H1.24627V9.77571H2.68057V10.5953ZM2.68057 2.80912H1.24627V1.98952H2.68057V2.80912ZM5.13937 10.5953H3.70507V9.77571H5.13937V10.5953ZM5.13937 2.80912H3.70507V1.98952H5.13937V2.80912ZM7.59816 10.5953H6.16386V9.77571H7.59816V10.5953ZM8.29452 6.34003L5.93417 7.74913C5.91696 7.75914 5.89575 7.75952 5.87854 7.74954C5.86133 7.73955 5.85052 7.72152 5.85052 7.7011V6.29242V4.88373C5.85052 4.86373 5.86133 4.84531 5.87854 4.83571C5.89575 4.82569 5.91696 4.8261 5.93417 4.83612L8.29452 6.24521C8.31132 6.25482 8.32133 6.27323 8.32133 6.29244C8.32131 6.31204 8.31132 6.33004 8.29452 6.34003ZM10.057 10.5953H8.62266V9.77571H10.057V10.5953ZM10.057 2.80912H8.62266V1.98952H10.057V2.80912ZM12.5158 10.5953H11.0815V9.77571H12.5158V10.5953ZM12.5158 2.80912H11.0815V1.98952H12.5158V2.80912Z" fill="#1D3FAA" />
                                </svg>
                            </div>
                        </CustomTooltip>
                    </div>
                </div>
                <div className='w-full py-2'>
                    <div className='flex justify-between items-center'>
                        <CustomTooltip title={<AirportDetails flight={flight} />} width='450px'>
                            <div className='space-y-2'>
                                {flight.itineraries.map((itinerary: any, index: number) => (
                                    <div className='flex justify-between gap-[64px]' key={index}>
                                        <div className='w-[150px]'>
                                            <h1 className='text-[16px] font-semibold text-[#162F7F] mb-2'>{itinerary?.segments[0]?.departure?.iataCode}</h1>
                                            <p className='text-sm font-medium mb-[2px] '>{formatTime(itinerary?.segments[0]?.departure?.at)}</p>
                                            <p className='text-sm font-medium'>{formatDate(itinerary?.segments[0]?.departure?.at)}</p>
                                        </div>
                                        <div className='mt-10'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                                                <path d="M22.0004 10.7373H1.04797C1.0412 10.7406 1.03549 10.7457 1.0315 10.7521C1.02751 10.7584 1.02539 10.7658 1.02539 10.7733C1.02539 10.7809 1.02751 10.7882 1.0315 10.7946C1.03549 10.801 1.0412 10.8061 1.04797 10.8094L7.1087 16.8701" stroke="#254FD4" stroke-width="1.60125" stroke-miterlimit="10" stroke-linecap="round" />
                                                <path d="M1 7.26267H21.9523C21.9591 7.2594 21.9649 7.25428 21.9689 7.2479C21.9729 7.24153 21.975 7.23417 21.975 7.22665C21.975 7.21913 21.9729 7.21176 21.9689 7.20538C21.9649 7.19901 21.9591 7.19389 21.9523 7.19061L15.8917 1.12988" stroke="#254FD4" stroke-width="1.60125" stroke-miterlimit="10" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                        <div className='w-[150px]'>
                                            <h1 className='text-[16px] font-semibold text-[#162F7F] mb-2'>{itinerary?.segments[0]?.arrival?.iataCode}</h1>
                                            <p className='text-sm font-medium mb-[2px] '>{formatTime(itinerary?.segments[0]?.arrival?.at)}</p>
                                            <p className='text-sm font-medium'>{formatDate(itinerary?.segments[0]?.arrival?.at)}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className='flex justify-between gap-[64px] mb-2'>
                                    <div>
                                        <h1 className='text-[16px] font-semibold text-[#162F7F] mb-2'>{flight?.itineraries[0]?.segments[0]?.departure?.iataCode}</h1>
                                        <p className='text-sm font-medium mb-[2px] '>{formatTime(flight?.itineraries[0]?.segments[0]?.departure?.at)}</p>
                                        <p className='text-sm font-medium'>{formatTime(flight?.itineraries[0]?.segments[0]?.departure?.at)}</p>
                                    </div>
                                    <div className='mt-10'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                                            <path d="M22.0004 10.7373H1.04797C1.0412 10.7406 1.03549 10.7457 1.0315 10.7521C1.02751 10.7584 1.02539 10.7658 1.02539 10.7733C1.02539 10.7809 1.02751 10.7882 1.0315 10.7946C1.03549 10.801 1.0412 10.8061 1.04797 10.8094L7.1087 16.8701" stroke="#254FD4" stroke-width="1.60125" stroke-miterlimit="10" stroke-linecap="round" />
                                            <path d="M1 7.26267H21.9523C21.9591 7.2594 21.9649 7.25428 21.9689 7.2479C21.9729 7.24153 21.975 7.23417 21.975 7.22665C21.975 7.21913 21.9729 7.21176 21.9689 7.20538C21.9649 7.19901 21.9591 7.19389 21.9523 7.19061L15.8917 1.12988" stroke="#254FD4" stroke-width="1.60125" stroke-miterlimit="10" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className='text-[16px] font-semibold text-[#162F7F] mb-2'>{flight?.itineraries[0]?.segments[0]?.arrival?.iataCode}</h1>
                                        <p className='text-sm font-medium mb-[2px] '>{formatTime(flight?.itineraries[0]?.segments[0]?.arrival?.at)}</p>
                                        <p className='text-sm font-medium'>{formatTime(flight?.itineraries[0]?.segments[0]?.arrival?.at)}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between gap-[64px]'>
                                    <div>
                                        <h1 className='text-[16px] font-semibold text-[#162F7F] mb-2'>Dhaka (DAC)</h1>
                                        <p className='text-sm font-medium mb-[2px] '>5:00 am</p>
                                        <p className='text-sm font-medium'>14 April, Thursday</p>
                                    </div>
                                    <div className='mt-10'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                                            <path d="M22.0004 10.7373H1.04797C1.0412 10.7406 1.03549 10.7457 1.0315 10.7521C1.02751 10.7584 1.02539 10.7658 1.02539 10.7733C1.02539 10.7809 1.02751 10.7882 1.0315 10.7946C1.03549 10.801 1.0412 10.8061 1.04797 10.8094L7.1087 16.8701" stroke="#254FD4" stroke-width="1.60125" stroke-miterlimit="10" stroke-linecap="round" />
                                            <path d="M1 7.26267H21.9523C21.9591 7.2594 21.9649 7.25428 21.9689 7.2479C21.9729 7.24153 21.975 7.23417 21.975 7.22665C21.975 7.21913 21.9729 7.21176 21.9689 7.20538C21.9649 7.19901 21.9591 7.19389 21.9523 7.19061L15.8917 1.12988" stroke="#254FD4" stroke-width="1.60125" stroke-miterlimit="10" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h1 className='text-[16px] font-semibold text-[#162F7F] mb-2'>Bangkok (DMC)</h1>
                                        <p className='text-sm font-medium mb-[2px] '>12:00 pm</p>
                                        <p className='text-sm font-medium'>14 April, Thursday</p>
                                    </div>
                                </div> */}
                            </div>
                        </CustomTooltip>

                        <div className='flex flex-col items-center'>
                            <h1 className='text-sm font-light text-[#162F7F] mb-1'>{flight?.price?.currency} <span className='text-[16px] font-semibold'>{flight?.price?.base}</span></h1>
                            <p className='text-[10px] font-light  mb-2 text-[#777] line-through '>{flight?.price?.currency} <span className='font-medium'>{flight?.price?.total}</span></p>

                            <Link href={"/booking/flight-details"}>
                                <button
                                    className='py-[6px] px-[27px] rounded-[4px] text-center text-white font-semibold text-[12px] bg-[#254FD4] '
                                >
                                    Book Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex mt-6 gap-4  '>
                        <button
                            onClick={toggleFlightDetails(true)}
                            className='w-1/2 h-[24px] flex justify-center items-center gap-2 px-6 py-2 bg-[#D5DFFF] rounded-[4px] cursor-pointer'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                <path d="M12.607 11.5H1.17737C0.974966 11.5 0.805426 11.4337 0.668747 11.3012C0.532067 11.1687 0.463489 11.0049 0.463013 10.8098C0.462537 10.6148 0.531115 10.451 0.668747 10.3184C0.806379 10.1859 0.975918 10.1197 1.17737 10.1197H12.607C12.8094 10.1197 12.9792 10.1859 13.1163 10.3184C13.2535 10.451 13.3218 10.6148 13.3214 10.8098C13.3209 11.0049 13.2523 11.1689 13.1156 11.3019C12.979 11.4349 12.8094 11.5009 12.607 11.5ZM2.10602 6.46638L5.53492 5.56918L3.05254 1.49727C2.95729 1.33624 2.93944 1.1637 2.99897 0.979657C3.0585 0.795616 3.18946 0.674839 3.39186 0.617326L3.69546 0.531057C3.80261 0.496549 3.90977 0.490798 4.01692 0.513803C4.12407 0.536808 4.21932 0.582818 4.30266 0.651834L8.92809 4.67198L12.4999 3.74027C12.8808 3.63675 13.2261 3.70577 13.5357 3.94732C13.8452 4.18887 14 4.51094 14 4.91353C14 5.16659 13.9198 5.39089 13.7593 5.58644C13.5988 5.78198 13.3933 5.91426 13.1428 5.98327L2.30247 8.81291C2.14769 8.85892 1.99887 8.85316 1.856 8.79565C1.71313 8.73814 1.60002 8.64037 1.51668 8.50234L0.0701188 6.1213C-0.0132223 5.99478 -0.0222709 5.8625 0.0429733 5.72447C0.108218 5.58643 0.218466 5.50592 0.373719 5.48291L0.641601 5.43115C0.713036 5.41965 0.778519 5.42264 0.838048 5.44012C0.897578 5.45761 0.957107 5.48912 1.01664 5.53467L2.10602 6.46638Z" fill="#254FD4" />
                            </svg>
                            <div>
                                <span className='text-xs mr-1'>Flight Details</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M0.176092 0.873846C0.288878 0.761094 0.441828 0.697754 0.601308 0.697754C0.760787 0.697754 0.913737 0.761094 1.02652 0.873846L4.00363 3.85095L6.98074 0.873846C7.09417 0.76429 7.2461 0.703668 7.40379 0.705039C7.56149 0.706409 7.71233 0.769661 7.82384 0.881173C7.93536 0.992684 7.99861 1.14353 7.99998 1.30123C8.00135 1.45892 7.94073 1.61084 7.83117 1.72428L4.42885 5.1266C4.31606 5.23935 4.16311 5.30269 4.00363 5.30269C3.84415 5.30269 3.6912 5.23935 3.57842 5.1266L0.176092 1.72428C0.0633405 1.61149 0 1.45854 0 1.29906C0 1.13958 0.0633405 0.986632 0.176092 0.873846Z" fill="#1D3FAA" />
                                </svg>
                            </div>

                        </button>
                        <Drawer
                            anchor="right"
                            open={openFlightDetails}
                            onClose={toggleFlightDetails(false)}
                            sx={{ '& .MuiDrawer-paper': { width: 750 } }}
                        >
                            <FlightDetails />
                        </Drawer>

                        <button
                            onClick={toggleRefund(true)}
                            className='w-1/2 h-[24px] flex justify-center items-center gap-2 px-6 py-2 bg-[#D5DFFF] rounded-[4px] cursor-pointer'
                        >
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5077 5.78562C13.1776 9.10285 11.0324 12.3365 7.71448 13.007C4.85493 13.5852 2.05962 12.0709 0.911517 9.51842C0.844875 9.37013 0.839871 9.20144 0.897605 9.04946C0.955339 8.89748 1.07108 8.77466 1.21937 8.70802C1.36766 8.64138 1.53635 8.63638 1.68833 8.69411C1.84031 8.75185 1.96313 8.86759 2.02977 9.01588C2.49202 10.041 3.29262 10.8761 4.29738 11.3812C5.30214 11.8862 6.44998 12.0306 7.54849 11.7899C8.647 11.5493 9.6294 10.9384 10.331 10.0596C11.0327 9.18074 11.4109 8.08744 11.4022 6.96292C11.3936 5.83839 10.9987 4.75101 10.2837 3.88305C9.56867 3.01508 8.57701 2.41928 7.47494 2.19553C6.37287 1.97178 5.22738 2.13367 4.23048 2.65407C3.23359 3.17447 2.44588 4.02175 1.9994 5.05387L2.65492 4.95046C3.39049 4.83363 3.74403 5.82038 3.10154 6.19725L1.39774 7.1975C0.940116 7.46554 0.346251 7.12207 0.384956 6.5706C0.479455 5.23297 1.00992 3.96323 1.89507 2.95591C2.78021 1.9486 3.97122 1.25929 5.28559 0.993592C8.60297 0.32122 11.8366 2.4671 12.5072 5.78436" fill="#254FD4" />
                                <path d="M8.13281 8.22432C8.13281 8.33268 8.17586 8.43661 8.25248 8.51323C8.32911 8.58985 8.43303 8.6329 8.5414 8.6329C8.64976 8.6329 8.75368 8.58985 8.83031 8.51323C8.90693 8.43661 8.94998 8.33268 8.94998 8.22432C8.94998 8.11595 8.90693 8.01203 8.83031 7.93541C8.75368 7.85878 8.64976 7.81573 8.5414 7.81573C8.43303 7.81573 8.32911 7.85878 8.25248 7.93541C8.17586 8.01203 8.13281 8.11595 8.13281 8.22432Z" stroke="#254FD4" stroke-width="0.919312" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.66016 4.75131C4.66016 4.53458 4.74625 4.32673 4.8995 4.17349C5.05275 4.02024 5.2606 3.93414 5.47732 3.93414C5.69405 3.93414 5.9019 4.02024 6.05515 4.17349C6.20839 4.32673 6.29449 4.53458 6.29449 4.75131V8.42856C6.29449 8.75364 6.42363 9.06542 6.6535 9.29529C6.88337 9.52516 7.19515 9.6543 7.52024 9.6543C7.84533 9.6543 8.1571 9.52516 8.38697 9.29529C8.61685 9.06542 8.74599 8.75364 8.74599 8.42856M5.06874 6.38564H7.52024" stroke="#254FD4" stroke-width="0.919312" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <div>
                                <span className='text-xs mr-1'>Refund & Fare Policy</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M0.176092 0.873846C0.288878 0.761094 0.441828 0.697754 0.601308 0.697754C0.760787 0.697754 0.913737 0.761094 1.02652 0.873846L4.00363 3.85095L6.98074 0.873846C7.09417 0.76429 7.2461 0.703668 7.40379 0.705039C7.56149 0.706409 7.71233 0.769661 7.82384 0.881173C7.93536 0.992684 7.99861 1.14353 7.99998 1.30123C8.00135 1.45892 7.94073 1.61084 7.83117 1.72428L4.42885 5.1266C4.31606 5.23935 4.16311 5.30269 4.00363 5.30269C3.84415 5.30269 3.6912 5.23935 3.57842 5.1266L0.176092 1.72428C0.0633405 1.61149 0 1.45854 0 1.29906C0 1.13958 0.0633405 0.986632 0.176092 0.873846Z" fill="#1D3FAA" />
                                </svg>
                            </div>
                        </button>
                        <Drawer
                            anchor="right"
                            open={openRefund}
                            onClose={toggleRefund(false)}
                            sx={{ '& .MuiDrawer-paper': { width: 750 } }}
                        >
                            <RefundFarePolicy />
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;
