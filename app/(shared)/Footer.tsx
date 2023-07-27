import React from 'react'


function Footer() {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
        <div className='justify-between mx-auto gap-16 sm:flex'>
            {/*FIRST COLUMN*/}
            <div className='mt-16 basis-1/2 sm:mt-0'>
                <h4 className='font-bold uppercase'>Blog of the future</h4>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam atque
                    harum, impedit nihil tenetur obcaecati amet autem adipisci soluta voluptatem 
                    dolorum nobis cupiditate earum reiciendis minima consequatur excepturi qui doloremque.
                </p>
                <p>
                    &copy; Blog of the Future All Rights Reserved
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer