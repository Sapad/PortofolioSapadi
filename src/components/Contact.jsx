import React,{useRef} from 'react'
import emailjs from '@emailjs/browser'
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rj6cr17', 'template_jmpd3tf', form.current, 'XcJidtYIDA6WAjkNV')

       e.target.reset()
      };
    const Popup = () =>{
        window.alert("Pesan Terkirim");
    };

  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001e5b] '>Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Nama</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" placeholder='Masukan Nama' name='nama'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Nomor Telepon</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" placeholder='Masukan Nomor telepon' name='telepon'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" placeholder='Masukan Email' name='email' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" placeholder='Masukan Subject Email' name='subject' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows="7" placeholder='Masukan Pesan' name='massege'> </textarea>
            </div>
            <button className='bg-[#001e5b] text-gray-100 mt-4 w-full p-4 rounded-lg' onClick={Popup} type='submit'>
                Kirim Message
            </button>
        </form>
    </div>
  )
}

export default Contact