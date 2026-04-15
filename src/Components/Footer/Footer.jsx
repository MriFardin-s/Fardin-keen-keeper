import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaRegCopyright, FaXTwitter } from 'react-icons/fa6';
import foot from '../../assets/logo-xl.png'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className='flex justify-center items-center mb-4' >
                    <img src={foot} alt="" className='' />
                </div>
                <p className="text-[#FFFFFF] max-w-xl mx-auto mb-8 text-sm sm:text-base">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <div className="mb-10">
                    <h3 className="text-lg font-semibold mb-4">Social Links</h3>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="bg-white p-2 rounded-full text-[#244D3F] hover:bg-green-100 transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full text-[#244D3F] hover:bg-green-100 transition-colors">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="bg-white p-2 rounded-full text-[#244D3F] hover:bg-green-100 transition-colors">
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>
                <div className="border-t border-green-200/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-green-100/60 gap-4">
                    <div className='flex justify-center items-center gap-2'>
                        <FaRegCopyright />
                        <p>  2026 KeenKeeper. All rights reserved.</p>
                    </div>


                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;