import Image from 'next/image';

export default function OurProducts() {
  return (
    <>
      <div className='pt-10 pb-5 text-3xl font-semibold text-center font-DMSans'>Our Products</div>
      <div className='grid max-w-5xl grid-cols-1 gap-5 px-5 mx-auto lg:px-0 sm:grid-cols-4'>
        <Image
          alt='Kopi'
          src='/new/kopi.png'
          width={1000}
          height={1000}
          priority
          className='rounded-md'
        />
        <Image
          alt='Kemiri'
          src='/new/kemiri.png'
          width={1000}
          height={1000}
          priority
          className='rounded-md'
        />
        <Image
          alt='Jagung'
          src='/new/jagung.png'
          width={1000}
          height={1000}
          priority
          className='rounded-md'
        />
        <Image
          alt='Pala'
          src='/new/pala.png'
          width={1000}
          height={1000}
          priority
          className='rounded-md'
        />
        <div className='col-start-2'>
          <Image
            alt='Gambir'
            src='/new/gambir.jpg'
            width={1000}
            height={1000}
            priority
            className='rounded-md '
          />
        </div>
        <div className='col-start-3'>
          <Image
            alt='Kelapa'
            src='/new/kelapa.png'
            width={1000}
            height={1000}
            priority
            className='rounded-md '
          />
        </div>
      </div>
    </>
  );
}
