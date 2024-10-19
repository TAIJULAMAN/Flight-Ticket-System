'use client'

import { Divider } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import usBanglaLogo from '../../../public/images/pages/us-bangla.png'
import Link from 'next/link';



const FlightDetails: React.FC = () => {


    return (
        <>
            <div className='px-10 py-9'>
                <div className='flex justify-between mt-5 bg-[#D5DFFF] rounded-[11px] mx-5 '>
                    <div className='text-white p-2 bg-[#254FD4] rounded-l-[11px] text-center w-1/2'>
                        <p className='text-[16px] font-medium' >Flight Details</p>
                    </div>
                    <div className='text-center p-2 w-1/2'>
                        <p className='text-[16px] font-medium'>Refund & Fare Policy</p>
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='flex items-center gap-3 mb-2'>
                        <h1 className='text-2xl font-semibold text-[#162F7F]'>Dhaka (DAC)</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                            <path d="M23.1217 11.3301H1.05015C1.04302 11.3335 1.03701 11.3389 1.0328 11.3456C1.02859 11.3523 1.02637 11.3601 1.02637 11.368C1.02637 11.376 1.02859 11.3837 1.0328 11.3904C1.03701 11.3971 1.04302 11.4025 1.05015 11.406L7.43461 17.7904" stroke="#162F7F" stroke-width="1.68678" stroke-miterlimit="10" stroke-linecap="round" />
                            <path d="M1 7.66984H23.0715C23.0786 7.66638 23.0847 7.66099 23.0889 7.65428C23.0931 7.64757 23.0953 7.63981 23.0953 7.63189C23.0953 7.62397 23.0931 7.6162 23.0889 7.60949C23.0847 7.60278 23.0786 7.59738 23.0715 7.59393L16.6871 1.20947" stroke="#162F7F" stroke-width="1.68678" stroke-miterlimit="10" stroke-linecap="round" />
                        </svg>
                        <h1 className='text-2xl font-semibold text-[#162F7F]'>Bangkok (BKK)</h1>
                    </div>
                    <div className='text-[16px] mb-[6px]'>
                        <span className='font-semibold'>20 May</span>, 2024 - <span className='font-semibold'>31 May</span> 2024
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                <path d="M3.7 0.5L1 3.2702V6.8L3.7 9.5H7.3L10 6.8V3.2702L7.3 0.5H3.7Z" stroke="#254FD4" stroke-width="0.964286" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.29922 5H3.69922" stroke="#254FD4" stroke-width="0.964286" stroke-linecap="round" />
                            </svg>
                            <span className='text-[11px] text-[#464646] ml-1'>2 Stop </span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9ZM5 0C5.65661 0 6.30679 0.129329 6.91342 0.380602C7.52005 0.631876 8.07124 1.00017 8.53553 1.46447C8.99983 1.92876 9.36812 2.47995 9.6194 3.08658C9.87067 3.69321 10 4.34339 10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C2.235 10 0 7.75 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0ZM5.25 2.5V5.125L7.5 6.46L7.125 7.075L4.5 5.5V2.5H5.25Z" fill="#254FD4" />
                            </svg>
                            <span className='text-[11px] text-[#464646] ml-1'>Est Time: 5 Hrs 23 min </span>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                <path d="M4.61227 11.5644C4.71157 11.879 4.86472 12.0902 5.17522 12.2518C5.48571 12.4133 5.74655 12.4175 6.06124 12.3182C6.37593 12.2189 6.58711 12.0657 6.74865 11.7552C6.91018 11.4447 6.91437 11.1839 6.81506 10.8692C6.71576 10.5545 6.51086 10.3164 6.25211 10.1818C5.99336 10.0472 5.68077 10.0161 5.36609 10.1154C5.0514 10.2147 4.84022 10.3678 4.67868 10.6783C4.51715 10.9888 4.51296 11.2497 4.61227 11.5644ZM0.807978 8.00706C0.673367 8.26581 0.642253 8.5784 0.741561 8.89308C0.840868 9.20777 1.04577 9.44588 1.30451 9.58049L5.07363 2.33562C4.81489 2.20101 4.5023 2.16989 4.18761 2.2692C3.87293 2.36851 3.63482 2.57341 3.50021 2.83215L0.807978 8.00706ZM10.5597 1.90194L8.48971 0.825053C8.3551 1.0838 8.32399 1.39639 8.42329 1.71107C8.5226 2.02576 8.7275 2.26387 8.98625 2.39848L8.17858 3.95095L5.59112 2.60484L1.82201 9.84971L3.99547 10.9804C4.02658 10.6679 4.10735 10.5126 4.16119 10.4091C4.37657 9.99512 4.72027 9.71364 5.1923 9.56468C5.66433 9.41572 6.10734 9.44893 6.52133 9.66431L10.5597 1.90194Z" fill="#254FD4" />
                            </svg>
                            <span className='text-[11px] text-[#464646] ml-1'>Baggage: Included </span>
                        </div>

                    </div>
                </div>

                {/* Flight Details */}

                <div className='mt-6'>
                    <h1 className='text-[18px] text-[#222]'>Flight Details</h1>
                    <Divider sx={{ bgcolor: '#254FD4', marginTop: '8px' }} />
                    <div className='p-6'>
                        <div>
                            <div>
                                <div>
                                    <div className="flex gap-4">
                                        <div className='w-1/4 flex justify-center items-center'>
                                            <div>
                                                <Image
                                                    src={usBanglaLogo}
                                                    alt="airline logo"
                                                />
                                                <h1 className='text-sm text-[#222] mt-5'>Us Bangla Airlines</h1>
                                            </div>
                                        </div>
                                        <div className='w-3/4 flex justify-between items-center'>
                                            <div>
                                                <h1 className='text-sm font-normal mb-1'>Depart</h1>
                                                <h1 className='text-[16px] font-semibold text-[#162F7F]'>Dhaka (DAC)</h1>
                                                <p className='text-[10px] font-light my-[6px] '>
                                                    Terminal 2 <br />
                                                    Hazrat Shahjalal <br />
                                                    International Airport <br />
                                                    Dhaka, Bangladesh
                                                </p>
                                                <p className='text-xs mb-[2px] '>5:00 am</p>
                                                <p className='text-xs'>14 April, Thursday</p>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="30" viewBox="0 0 38 30" fill="none">
                                                    <path d="M36.3373 17.8593H1.75113C1.73996 17.8647 1.73054 17.8731 1.72395 17.8836C1.71736 17.8942 1.71387 17.9063 1.71387 17.9187C1.71387 17.9311 1.71736 17.9433 1.72395 17.9538C1.73054 17.9643 1.73996 17.9728 1.75113 17.9782L11.7556 27.9827" stroke="#254FD4" stroke-width="2.64319" stroke-miterlimit="10" stroke-linecap="round" />
                                                    <path d="M1.67188 12.1234H36.258C36.2691 12.118 36.2786 12.1096 36.2852 12.099C36.2918 12.0885 36.2953 12.0764 36.2953 12.0639C36.2953 12.0515 36.2918 12.0394 36.2852 12.0288C36.2786 12.0183 36.2691 12.0099 36.258 12.0045L26.2536 2" stroke="#254FD4" stroke-width="2.64319" stroke-miterlimit="10" stroke-linecap="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 className='text-sm font-normal mb-1'>Arrive</h1>
                                                <h1 className='text-[16px] font-semibold text-[#162F7F]'>Singapore (SMC)</h1>
                                                <p className='text-[10px] font-light my-[6px] '>
                                                    Terminal 0 <br />
                                                    Changi <br />
                                                    Singapore, Singapore
                                                </p>
                                                <p className='text-xs mb-[2px] '>5:00 am</p>
                                                <p className='text-xs'>15 April, Friday</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-3'>
                                        <div className='flex gap-3'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9ZM5 0C5.65661 0 6.30679 0.129329 6.91342 0.380602C7.52005 0.631876 8.07124 1.00017 8.53553 1.46447C8.99983 1.92876 9.36812 2.47995 9.6194 3.08658C9.87067 3.69321 10 4.34339 10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C2.235 10 0 7.75 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0ZM5.25 2.5V5.125L7.5 6.46L7.125 7.075L4.5 5.5V2.5H5.25Z" fill="#254FD4" />
                                                </svg>
                                                <span className='text-[11px] text-[#464646] ml-1'>Est Time: 5 Hrs 23 min </span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                                    <path d="M4.61227 11.5644C4.71157 11.879 4.86472 12.0902 5.17522 12.2518C5.48571 12.4133 5.74655 12.4175 6.06124 12.3182C6.37593 12.2189 6.58711 12.0657 6.74865 11.7552C6.91018 11.4447 6.91437 11.1839 6.81506 10.8692C6.71576 10.5545 6.51086 10.3164 6.25211 10.1818C5.99336 10.0472 5.68077 10.0161 5.36609 10.1154C5.0514 10.2147 4.84022 10.3678 4.67868 10.6783C4.51715 10.9888 4.51296 11.2497 4.61227 11.5644ZM0.807978 8.00706C0.673367 8.26581 0.642253 8.5784 0.741561 8.89308C0.840868 9.20777 1.04577 9.44588 1.30451 9.58049L5.07363 2.33562C4.81489 2.20101 4.5023 2.16989 4.18761 2.2692C3.87293 2.36851 3.63482 2.57341 3.50021 2.83215L0.807978 8.00706ZM10.5597 1.90194L8.48971 0.825053C8.3551 1.0838 8.32399 1.39639 8.42329 1.71107C8.5226 2.02576 8.7275 2.26387 8.98625 2.39848L8.17858 3.95095L5.59112 2.60484L1.82201 9.84971L3.99547 10.9804C4.02658 10.6679 4.10735 10.5126 4.16119 10.4091C4.37657 9.99512 4.72027 9.71364 5.1923 9.56468C5.66433 9.41572 6.10734 9.44893 6.52133 9.66431L10.5597 1.90194Z" fill="#254FD4" />
                                                </svg>
                                                <span className='text-[11px] text-[#464646] ml-1'>Baggage: Included </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className='my-4 py-1 rounded-[29px] bg-[#ECF0FF]'>
                                    <p className='text-sm text-center text-[#162F7F]'>Change planes at Suvarnabhumi Intl Airport | Bangkok , TH | Connecting Time: 5H 20Min</p>
                                </div>
                                <div>
                                    <div className="flex gap-4">
                                        <div className='w-1/4 flex justify-center items-center'>
                                            <div>
                                                <Image
                                                    src={usBanglaLogo}
                                                    alt="airline logo"
                                                />
                                                <h1 className='text-sm text-[#222] mt-5'>Us Bangla Airlines</h1>
                                            </div>
                                        </div>
                                        <div className='w-3/4 flex justify-between items-center'>

                                            <div>
                                                <h1 className='text-sm font-normal mb-1'>Depart</h1>
                                                <h1 className='text-[16px] font-semibold text-[#162F7F]'>Singapore (SMC)</h1>
                                                <p className='text-[10px] font-light my-[6px] '>
                                                    Terminal 0 <br />
                                                    Changi <br />
                                                    Singapore, Singapore
                                                </p>
                                                <p className='text-xs mb-[2px] '>5:00 am</p>
                                                <p className='text-xs'>15 April, Friday</p>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="30" viewBox="0 0 38 30" fill="none">
                                                    <path d="M36.3373 17.8593H1.75113C1.73996 17.8647 1.73054 17.8731 1.72395 17.8836C1.71736 17.8942 1.71387 17.9063 1.71387 17.9187C1.71387 17.9311 1.71736 17.9433 1.72395 17.9538C1.73054 17.9643 1.73996 17.9728 1.75113 17.9782L11.7556 27.9827" stroke="#254FD4" stroke-width="2.64319" stroke-miterlimit="10" stroke-linecap="round" />
                                                    <path d="M1.67188 12.1234H36.258C36.2691 12.118 36.2786 12.1096 36.2852 12.099C36.2918 12.0885 36.2953 12.0764 36.2953 12.0639C36.2953 12.0515 36.2918 12.0394 36.2852 12.0288C36.2786 12.0183 36.2691 12.0099 36.258 12.0045L26.2536 2" stroke="#254FD4" stroke-width="2.64319" stroke-miterlimit="10" stroke-linecap="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 className='text-sm font-normal mb-1'>Arrive</h1>
                                                <h1 className='text-[16px] font-semibold text-[#162F7F]'>Bangkok (BKK)</h1>
                                                <p className='text-[10px] font-light my-[6px] '>
                                                    Terminal 2 <br />
                                                    Hazrat Shahjalal <br />
                                                    International Airport <br />
                                                    Dhaka, Bangladesh
                                                </p>
                                                <p className='text-xs mb-[2px] '>5:00 am</p>
                                                <p className='text-xs'>14 April, Thursday</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-3'>
                                        <div className='flex gap-3'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9ZM5 0C5.65661 0 6.30679 0.129329 6.91342 0.380602C7.52005 0.631876 8.07124 1.00017 8.53553 1.46447C8.99983 1.92876 9.36812 2.47995 9.6194 3.08658C9.87067 3.69321 10 4.34339 10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C2.235 10 0 7.75 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0ZM5.25 2.5V5.125L7.5 6.46L7.125 7.075L4.5 5.5V2.5H5.25Z" fill="#254FD4" />
                                                </svg>
                                                <span className='text-[11px] text-[#464646] ml-1'>Est Time: 5 Hrs 23 min </span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                                    <path d="M4.61227 11.5644C4.71157 11.879 4.86472 12.0902 5.17522 12.2518C5.48571 12.4133 5.74655 12.4175 6.06124 12.3182C6.37593 12.2189 6.58711 12.0657 6.74865 11.7552C6.91018 11.4447 6.91437 11.1839 6.81506 10.8692C6.71576 10.5545 6.51086 10.3164 6.25211 10.1818C5.99336 10.0472 5.68077 10.0161 5.36609 10.1154C5.0514 10.2147 4.84022 10.3678 4.67868 10.6783C4.51715 10.9888 4.51296 11.2497 4.61227 11.5644ZM0.807978 8.00706C0.673367 8.26581 0.642253 8.5784 0.741561 8.89308C0.840868 9.20777 1.04577 9.44588 1.30451 9.58049L5.07363 2.33562C4.81489 2.20101 4.5023 2.16989 4.18761 2.2692C3.87293 2.36851 3.63482 2.57341 3.50021 2.83215L0.807978 8.00706ZM10.5597 1.90194L8.48971 0.825053C8.3551 1.0838 8.32399 1.39639 8.42329 1.71107C8.5226 2.02576 8.7275 2.26387 8.98625 2.39848L8.17858 3.95095L5.59112 2.60484L1.82201 9.84971L3.99547 10.9804C4.02658 10.6679 4.10735 10.5126 4.16119 10.4091C4.37657 9.99512 4.72027 9.71364 5.1923 9.56468C5.66433 9.41572 6.10734 9.44893 6.52133 9.66431L10.5597 1.90194Z" fill="#254FD4" />
                                                </svg>
                                                <span className='text-[11px] text-[#464646] ml-1'>Baggage: Included </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-[10px] my-8'>

                                <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="2.8" cy="2.8" r="2.8" transform="matrix(-1 0 0 1 5.59961 0.200073)" fill="#254FD4" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                                        <circle cx="4.00001" cy="4.00001" r="4.00001" transform="matrix(-1 0 0 1 8.59961 0)" fill="#254FD4" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                        <circle cx="5.20001" cy="5.20001" r="5.20001" transform="matrix(-1 0 0 1 11 0.800049)" fill="#254FD4" />
                                    </svg>
                                </div>

                                <div className='text-white py-[6px] px-[40px]  bg-[#254FD4] rounded-[37px] text-center'>
                                    <p className='text-[16px]' >Return Flight</p>
                                </div>


                                <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                        <circle cx="5.20001" cy="5.20001" r="5.20001" transform="matrix(-1 0 0 1 11 0.800049)" fill="#254FD4" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
                                        <circle cx="4.00001" cy="4.00001" r="4.00001" transform="matrix(-1 0 0 1 8.59961 0)" fill="#254FD4" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="2.8" cy="2.8" r="2.8" transform="matrix(-1 0 0 1 5.59961 0.200073)" fill="#254FD4" />
                                    </svg>
                                </div>


                            </div>


                            {/* return  */}

                            <div>
                                <div>
                                    <div className="flex gap-4">
                                        <div className='w-1/4 flex justify-center items-center'>
                                            <div>
                                                <Image
                                                    src={usBanglaLogo}
                                                    alt="airline logo"
                                                />
                                                <h1 className='text-sm text-[#222] mt-5'>Us Bangla Airlines</h1>
                                            </div>
                                        </div>
                                        <div className='w-3/4 flex justify-between items-center'>
                                            <div>
                                                <h1 className='text-sm font-normal mb-1'>Depart</h1>
                                                <h1 className='text-[16px] font-semibold text-[#162F7F]'>Bangkok (BKK)</h1>
                                                <p className='text-[10px] font-light my-[6px] '>
                                                    Terminal 2 <br />
                                                    Hazrat Shahjalal <br />
                                                    International Airport <br />
                                                    Dhaka, Bangladesh
                                                </p>
                                                <p className='text-xs mb-[2px] '>5:00 am</p>
                                                <p className='text-xs'>14 April, Thursday</p>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="30" viewBox="0 0 38 30" fill="none">
                                                    <path d="M36.3373 17.8593H1.75113C1.73996 17.8647 1.73054 17.8731 1.72395 17.8836C1.71736 17.8942 1.71387 17.9063 1.71387 17.9187C1.71387 17.9311 1.71736 17.9433 1.72395 17.9538C1.73054 17.9643 1.73996 17.9728 1.75113 17.9782L11.7556 27.9827" stroke="#254FD4" stroke-width="2.64319" stroke-miterlimit="10" stroke-linecap="round" />
                                                    <path d="M1.67188 12.1234H36.258C36.2691 12.118 36.2786 12.1096 36.2852 12.099C36.2918 12.0885 36.2953 12.0764 36.2953 12.0639C36.2953 12.0515 36.2918 12.0394 36.2852 12.0288C36.2786 12.0183 36.2691 12.0099 36.258 12.0045L26.2536 2" stroke="#254FD4" stroke-width="2.64319" stroke-miterlimit="10" stroke-linecap="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 className='text-sm font-normal mb-1'>Arrive</h1>
                                                <h1 className='text-[16px] font-semibold text-[#162F7F]'>Singapore (SMC)</h1>
                                                <p className='text-[10px] font-light my-[6px] '>
                                                    Terminal 0 <br />
                                                    Changi <br />
                                                    Singapore, Singapore
                                                </p>
                                                <p className='text-xs mb-[2px] '>5:00 am</p>
                                                <p className='text-xs'>15 April, Friday</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-3'>
                                        <div className='flex gap-3'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9ZM5 0C5.65661 0 6.30679 0.129329 6.91342 0.380602C7.52005 0.631876 8.07124 1.00017 8.53553 1.46447C8.99983 1.92876 9.36812 2.47995 9.6194 3.08658C9.87067 3.69321 10 4.34339 10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C2.235 10 0 7.75 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0ZM5.25 2.5V5.125L7.5 6.46L7.125 7.075L4.5 5.5V2.5H5.25Z" fill="#254FD4" />
                                                </svg>
                                                <span className='text-[11px] text-[#464646] ml-1'>Est Time: 5 Hrs 23 min </span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                                    <path d="M4.61227 11.5644C4.71157 11.879 4.86472 12.0902 5.17522 12.2518C5.48571 12.4133 5.74655 12.4175 6.06124 12.3182C6.37593 12.2189 6.58711 12.0657 6.74865 11.7552C6.91018 11.4447 6.91437 11.1839 6.81506 10.8692C6.71576 10.5545 6.51086 10.3164 6.25211 10.1818C5.99336 10.0472 5.68077 10.0161 5.36609 10.1154C5.0514 10.2147 4.84022 10.3678 4.67868 10.6783C4.51715 10.9888 4.51296 11.2497 4.61227 11.5644ZM0.807978 8.00706C0.673367 8.26581 0.642253 8.5784 0.741561 8.89308C0.840868 9.20777 1.04577 9.44588 1.30451 9.58049L5.07363 2.33562C4.81489 2.20101 4.5023 2.16989 4.18761 2.2692C3.87293 2.36851 3.63482 2.57341 3.50021 2.83215L0.807978 8.00706ZM10.5597 1.90194L8.48971 0.825053C8.3551 1.0838 8.32399 1.39639 8.42329 1.71107C8.5226 2.02576 8.7275 2.26387 8.98625 2.39848L8.17858 3.95095L5.59112 2.60484L1.82201 9.84971L3.99547 10.9804C4.02658 10.6679 4.10735 10.5126 4.16119 10.4091C4.37657 9.99512 4.72027 9.71364 5.1923 9.56468C5.66433 9.41572 6.10734 9.44893 6.52133 9.66431L10.5597 1.90194Z" fill="#254FD4" />
                                                </svg>
                                                <span className='text-[11px] text-[#464646] ml-1'>Baggage: Included </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className=' my-4 py-1 rounded-[29px] bg-[#ECF0FF]'>
                                    <p className='text-sm text-center text-[#162F7F]'>Change planes at Suvarnabhumi Intl Airport | Bangkok , TH | Connecting Time: 5H 20Min</p>
                                </div>
                                <div>
                                    <div className="flex gap-4">
                                        <div className='w-1/4 flex justify-center items-center'>
                                            <div>
                                                <Image
                                                    src={usBanglaLogo}
                                                    alt="airline logo"
                                                />
                                                <h1 className='text-sm text-[#222] mt-5'>Us Bangla Airlines</h1>
                                            </div>
                                        </div>
                                        <div className='w-3/4 flex justify-between items-center'>

                                            <div>
                                                <h1 className='text-sm font-normal mb-1'>Depart</h1>
                                                <h1 className='text-[16px] font-semibold text-[#162F7F]'>Singapore (SMC)</h1>
                                                <p className='text-[10px] font-light my-[6px] '>
                                                    Terminal 0 <br />
                                                    Changi <br />
                                                    Singapore, Singapore
                                                </p>
                                                <p className='text-xs mb-[2px] '>5:00 am</p>
                                                <p className='text-xs'>15 April, Friday</p>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="30" viewBox="0 0 38 30" fill="none">
                                                    <path d="M36.3373 17.8593H1.75113C1.73996 17.8647 1.73054 17.8731 1.72395 17.8836C1.71736 17.8942 1.71387 17.9063 1.71387 17.9187C1.71387 17.9311 1.71736 17.9433 1.72395 17.9538C1.73054 17.9643 1.73996 17.9728 1.75113 17.9782L11.7556 27.9827" stroke="#254FD4" stroke-width="2.64319" stroke-miterlimit="10" stroke-linecap="round" />
                                                    <path d="M1.67188 12.1234H36.258C36.2691 12.118 36.2786 12.1096 36.2852 12.099C36.2918 12.0885 36.2953 12.0764 36.2953 12.0639C36.2953 12.0515 36.2918 12.0394 36.2852 12.0288C36.2786 12.0183 36.2691 12.0099 36.258 12.0045L26.2536 2" stroke="#254FD4" stroke-width="2.64319" stroke-miterlimit="10" stroke-linecap="round" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h1 className='text-sm font-normal mb-1'>Arrive</h1>
                                                <h1 className='text-[16px] font-semibold text-[#162F7F]'>Dhaka (DAC)</h1>
                                                <p className='text-[10px] font-light my-[6px] '>
                                                    Terminal 2 <br />
                                                    Hazrat Shahjalal <br />
                                                    International Airport <br />
                                                    Dhaka, Bangladesh
                                                </p>
                                                <p className='text-xs mb-[2px] '>5:00 am</p>
                                                <p className='text-xs'>14 April, Thursday</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-3'>
                                        <div className='flex gap-3'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 9C6.06087 9 7.07828 8.57857 7.82843 7.82843C8.57857 7.07828 9 6.06087 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5C1 6.06087 1.42143 7.07828 2.17157 7.82843C2.92172 8.57857 3.93913 9 5 9ZM5 0C5.65661 0 6.30679 0.129329 6.91342 0.380602C7.52005 0.631876 8.07124 1.00017 8.53553 1.46447C8.99983 1.92876 9.36812 2.47995 9.6194 3.08658C9.87067 3.69321 10 4.34339 10 5C10 6.32608 9.47322 7.59785 8.53553 8.53553C7.59785 9.47322 6.32608 10 5 10C2.235 10 0 7.75 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0ZM5.25 2.5V5.125L7.5 6.46L7.125 7.075L4.5 5.5V2.5H5.25Z" fill="#254FD4" />
                                                </svg>
                                                <span className='text-[11px] text-[#464646] ml-1'>Est Time: 5 Hrs 23 min </span>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                                    <path d="M4.61227 11.5644C4.71157 11.879 4.86472 12.0902 5.17522 12.2518C5.48571 12.4133 5.74655 12.4175 6.06124 12.3182C6.37593 12.2189 6.58711 12.0657 6.74865 11.7552C6.91018 11.4447 6.91437 11.1839 6.81506 10.8692C6.71576 10.5545 6.51086 10.3164 6.25211 10.1818C5.99336 10.0472 5.68077 10.0161 5.36609 10.1154C5.0514 10.2147 4.84022 10.3678 4.67868 10.6783C4.51715 10.9888 4.51296 11.2497 4.61227 11.5644ZM0.807978 8.00706C0.673367 8.26581 0.642253 8.5784 0.741561 8.89308C0.840868 9.20777 1.04577 9.44588 1.30451 9.58049L5.07363 2.33562C4.81489 2.20101 4.5023 2.16989 4.18761 2.2692C3.87293 2.36851 3.63482 2.57341 3.50021 2.83215L0.807978 8.00706ZM10.5597 1.90194L8.48971 0.825053C8.3551 1.0838 8.32399 1.39639 8.42329 1.71107C8.5226 2.02576 8.7275 2.26387 8.98625 2.39848L8.17858 3.95095L5.59112 2.60484L1.82201 9.84971L3.99547 10.9804C4.02658 10.6679 4.10735 10.5126 4.16119 10.4091C4.37657 9.99512 4.72027 9.71364 5.1923 9.56468C5.66433 9.41572 6.10734 9.44893 6.52133 9.66431L10.5597 1.90194Z" fill="#254FD4" />
                                                </svg>
                                                <span className='text-[11px] text-[#464646] ml-1'>Baggage: Included </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fare Summary */}
                <div className='mt-6'>
                    <h1 className='text-[18px] text-[#222]'>Fare Summary</h1>
                    <Divider sx={{ bgcolor: '#254FD4', marginTop: '8px' }} />
                    <div className='mt-4'>
                        <div className='py-2 rounded-[4px] bg-[#E3E9FE] text-sm text-[#222] flex justify-between'>
                            <p className='w-1/5 text-center'>Fare Summary</p>
                            <p className='w-1/5 text-center'>Base Fare</p>
                            <p className='w-1/5 text-center'>Taxes + Fees</p>
                            <p className='w-1/5 text-center'>Per Passenger</p>
                            <p className='w-1/5 text-center'>Total</p>
                        </div>
                        <div className='py-2 rounded-[4px] text-sm text-[#808285] flex justify-between'>
                            <p className='w-1/5 text-center'>Adult</p>
                            <p className='w-1/5 text-center'>69,849 ৳</p>
                            <p className='w-1/5 text-center'>57,955 ৳ </p>
                            <p className='w-1/5 text-center'>(69,84957955 x 1) ৳ </p>
                            <p className='w-1/5 text-center'>127,804 ৳</p>
                        </div>
                        <Divider sx={{ bgcolor: '#808285', marginTop: '8px' }} />
                        <div className='py-2 px-8 rounded-[4px] text-sm text-[#162F7F] flex justify-between'>
                            <p className='w-1/5 text-start'>Total</p>
                            <p className='w-1/5 text-end font-semibold'>127804 ৳</p>
                        </div>
                        <div className='py-2 px-8 rounded-[4px] text-sm text-[#162F7F] flex justify-between'>
                            <p className='w-1/5 text-start'>Discount</p>
                            <p className='w-1/5 text-end font-semibold'>4507 ৳</p>
                        </div>
                        <div className='py-2 px-8 rounded-[4px] text-sm text-[#162F7F] flex justify-between'>
                            <p className='w-1/5 text-start'>Total</p>
                            <p className='w-1/5 text-end font-semibold'>123297 ৳</p>
                        </div>
                    </div>
                </div>

                {/* Baggage */}
                <div className='mt-6'>
                    <h1 className='text-[18px] text-[#222]'>Baggage</h1>
                    <Divider sx={{ bgcolor: '#254FD4', marginTop: '8px' }} />
                    <div className='mt-4'>
                        <div className='py-2 rounded-[4px] bg-[#E3E9FE] text-sm text-[#222] flex'>
                            <p className='w-1/3 text-center'>Baggage</p>
                            <p className='w-1/3 text-center'>Check-In</p>
                            <p className='w-1/3 text-center'>Cabin</p>
                        </div>
                        <div className='py-2 rounded-[4px] text-sm text-[#162F7F] flex'>
                            <p className='w-1/3 text-center'>Adult</p>
                            <p className='w-1/3 text-center'>2 Piece</p>
                            <p className='w-1/3 text-center'>12 kg</p>
                        </div>

                    </div>

                </div>

            </div >
            {/* footer - Total */}
            <div className='bg-[#254FD4] text-white  px-10 py-[18px]'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-[20px] font-medium'>Total (include VAT)</h1>
                        <h1 className='text-[20px] font-medium'>Fare: <span className='text-[24px]'> 123297 ৳</span></h1>

                    </div>

                    <Link href={"/booking/flight-details"}>
                        <button
                            className='py-2 rounded-[12px] text-[15px] text-[#254FD4] bg-white w-[156px] text-center'
                        >
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default FlightDetails;