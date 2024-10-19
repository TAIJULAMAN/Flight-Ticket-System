import React from 'react';

const VerifyEmail: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-[11px]	shadow-md w-full max-w-[660px] max-h-[605px] ">
                <h2 className="text-2xl font-bold mb-2 text-center text-[#162F7F]">Verify Your Email</h2>
                <h4 className='text-center font-light text-[#162F7F]'>Example@gmail.com</h4>
                <div className='mt-7'>
                    <button
                        type="submit"
                        className="w-full bg-[#254FD4] text-white text-lg p-2 rounded-[8px] shadow hover:bg-blue-700"
                    >
                        Check Email
                    </button>
                </div>
                <p className="mt-7 text-center text-gray-500">
                    Don’t have a account? <a href="/login" className="text-blue-600 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default VerifyEmail;