import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const PracticeEmail = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_b7ha2qj', 'template_hr6gyy1', form.current, {
                publicKey: 'WhMisi5b6NbZEl8Xq',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset(); 
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>

            <form ref={form} onSubmit={sendEmail} className='flex flex-col min-w-[492px]   pt-[54px] px-[34px] pb-[27px] shadow-custom gap-4 rounded-[12px]' >

                <input required type="text" name="user_name" placeholder='Name' className='outline-0 border-[1px] border-[#00000070] rounded-[12px] py-[11px] ps-3 pe-5 w-full' />
                <input required type="email" name="user_email" placeholder='Email address' className='outline-0 border-[1px] border-[#00000070] rounded-[12px] py-[11px] ps-3 pe-5 w-full' />
                <input required type="Password" name='Password' placeholder='Password' className='outline-0 border-[1px] border-[#00000070] rounded-[12px] py-[11px] ps-3 pe-5 w-full' />
                <input required type="password" name='Confirm_Password' placeholder='Confirm Password' className='outline-0 border-[1px] border-[#00000070] rounded-[12px] py-[11px] ps-3 pe-5 w-full' />
                <select required  name="Featured" className='border-[1px] border-[#00000070] py-[10px] rounded-[12px] px-3'>
                    <option  value="select">Choose Featured</option>
                    <option  value="Featured">Featured</option>
                    <option value="New">New</option>
                    <option value="Rating">Rating</option>
                </select>
                <input required type='checkbox' name='checkbox' className='max-w-[25px] h-[25px] rounded-[12px] outline-0 mb-[18px]' />
                <button type='submit' value="Send" className='rounded-[12px] bg-[#1EABF8] px-4 py-3 text-white max-w-[103px] hover:text-white hover:bg-black transition-all duration-500'>Submit</button>
            </form>

        </div>
    );
};