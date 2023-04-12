import React from 'react';


const Footer = () => {
    return (
        <div className='pt-10'>
            <div className='bg-black text-white w-full my-footer'>
                <div className='cmn-width py-24'>
                    <div className="footer-container grid grid-cols-1 px-2 lg:px-0 lg:grid-cols-5 text-center lg:text-start pb-10" style={{ gridGap: '20px' }}>
                        <div className="footer-one">
                            <h2 className="pb-4 logo font-extrabold text-2xl text-white">Job<span className='text-yellow-600'>Station</span><sup className='text-white font-extrabold'>7</sup></h2>
                            <p className='footer-link-cmn'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <ul className='flex gap-4'></ul>
                        </div>
                        <div className="footer-two">
                            <h2 className='footer-header-cmn'>Company</h2>
                            <p className='footer-link-cmn'>About Us</p>
                            <p className='footer-link-cmn'>Work</p>
                            <p className='footer-link-cmn'>Latest news</p>
                            <p className='footer-link-cmn'>Career</p>
                        </div>
                        <div className="footer-three">
                            <h2 className='footer-header-cmn'>Product</h2>
                            <p className='footer-link-cmn'>Prototype</p>
                            <p className='footer-link-cmn'>Plans & Pricing</p>
                            <p className='footer-link-cmn'>Customers</p>
                            <p className='footer-link-cmn'>Integrations</p>
                        </div>
                        <div className="footer-four">
                            <h2 className='footer-header-cmn'>Support</h2>
                            <p className='footer-link-cmn'>Help Desk</p>
                            <p className='footer-link-cmn'>Sales</p>
                            <p className='footer-link-cmn'>Become a Partner</p>
                            <p className='footer-link-cmn'>Developers</p>
                        </div>
                        <div className="footer-five">
                            <h2 className='footer-header-cmn'>Contact</h2>
                            <p className='footer-link-cmn'>524 Broadway , NYC</p>
                            <p className='footer-link-cmn'>+1 777 - 978 - 5570</p>
                        </div>
                    </div>

                    <div className="footer-copyright border-t border-white">
                        <div className='pt-10 block lg:flex justify-between '>
                            <h2 className='pb-5 lg:pb-0'>@2023 <span className='font-extrabold text-gray-400'>JobStation7</span>. All Rights Reserved</h2>
                            <h2>Powered by <span className='font-extrabold text-gray-400'>JobStaion7</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;