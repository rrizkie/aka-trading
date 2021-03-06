import { useRouter } from 'next/router';
import { EN, ID } from '../translation';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'ID' ? ID : EN;
  console.log(router.asPath);
  return (
    // outermost layer
    <main className='bottom-0 mt-40 border bg-[#A0A7A7]'>
      {/* max-w-5xl */}
      <main className='flex flex-col w-full h-auto max-w-5xl p-5 mx-auto space-y-5 lg:px-0 sm:space-y-0 sm:flex-row sm:justify-between sm:space-x-5 font-CGaramond'>
        <div className='w-12 h-12'>
          <Image
            src='/new/logo.PNG'
            width={100}
            height={100}
            layout='intrinsic'
            priority
            alt='AKA Trading Indonesia Logo'
          />
        </div>
        {/* Navigation + Product */}
        <section className='flex mb-10 sm:mb-0 sm:w-28'>
          {/* Navigation */}
          <article className='flex flex-col space-y-1 '>
            <Link href='/'>
              <a className={`${router.asPath === '/' ? 'underline' : ''} hover:underline`}>
                {t.nav.home}
              </a>
            </Link>
            <Link href='/about'>
              <a className={`${router.asPath === '/about' ? 'underline' : ''} hover:underline`}>
                {t.nav.about}
              </a>
            </Link>
            <Link href='/product'>
              <a className={`${router.asPath === '/product' ? 'underline' : ''} hover:underline`}>
                {t.nav.product}
              </a>
            </Link>
            <Link href='/contact'>
              <a className={`${router.asPath === '/contact' ? 'underline' : ''} hover:underline`}>
                {t.nav.contact}
              </a>
            </Link>
          </article>
        </section>

        {/* Identity */}
        <section className='sm:pt-0 sm:border-0 sm:w-1/2'>
          <div className='text-base '>PT. AKA Trading Indonesia</div>
          <div>Head Office</div>
          <div>Perkantoran Tanjung Mas Raya, Blok B1 nomor 44</div>
          <div>Tanjung Barat, Jagakarsa, Jakarta Selatan - Indonesia 12530</div>
        </section>

        {/* Link */}
        <div className='flex flex-col'>
          <div>Contact Us</div>
          <a href='tel:089612631275' className='hover:underline'>
            +62-896-1263-1275
          </a>
          <div className='flex flex-row mt-5'>
            <a href='https://www.facebook.com/AKATradingIndo' target='_blank' rel='noopener'>
              <FaFacebookSquare className='w-7 h-7' />
            </a>
            <a href='https://www.instagram.com/akatradingindo/' target='_blank' rel='noopener'>
              <FaInstagramSquare className='w-7 h-7' />
            </a>
            <a
              href='https://www.linkedin.com/company/aka-tradingindo'
              target='_blank'
              rel='noopener'
            >
              <FaLinkedin className='w-7 h-7' />
            </a>
            <a href='mailto:akatradingindo@gmail.com'>
              <MdEmail className='w-7 h-7' />
            </a>
          </div>
        </div>
      </main>
      <div className='max-w-5xl px-5 pb-3 mx-auto text-center text-gray-800 sm:px-0 font-CGaramond'>
        Copyright &copy; {new Date().getFullYear()}. All Right Reserved.
      </div>
    </main>
  );
};

export default Footer;
