import React from 'react'


function Footer() {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
        <div className='justify-between mx-auto gap-16 sm:flex'>
            {/*FIRST COLUMN*/}
            <div className='mt-16 basis-1/2 sm:mt-0'>
                <h4 className='font-bold uppercase'>Blog of the future</h4>
                <p className='my-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam atque
                    harum, impedit nihil tenetur obcaecati amet autem adipisci soluta voluptatem 
                    dolorum nobis cupiditate earum reiciendis minima consequatur excepturi qui doloremque.
                </p>
                <p>
                    &copy; Blog of the Future All Rights Reserved
                </p>
            </div>
            {/*SECOND COLUMN*/}
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>
                    Massa orci senectus
                </p>
                <p className='my-5'>
                    Some random link again
                </p>
                <p>
                    Ullamcorper vivamus
                </p>
            </div>
            {/*THIRD COLUMN*/}
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>
                    Tempus metus mattis risus volutpat egestas
                </p>
                <p>
                    (734)555-1212
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer