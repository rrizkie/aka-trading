import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { EN, ID } from "../translation";
import DarkModeButton from "../components/DarkModeButton";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";

const candleNut = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const navigation =
    " text-sm text-gray-600 hover:underline dark:text-gray-300 dark:hover:text-white py-4 font-inter lg:px-5 lg:py-0 block text-center ";
  return (
    <main className="min-h-screen mx-auto">
      <Head>
        <title>Candlenut ∙ AKA Trading Indonesia</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      {/* fixed wrapper */}
      <nav className="fixed top-0 z-20 w-full h-auto p-3 px-5 bg-white border-b border-black dark:border-gray-400 md:px-10 dark:bg-gray-bkg font-inter">
        {/* max-w-5xl */}
        <section className="flex flex-col items-center max-w-5xl mx-auto lg:justify-between lg:flex-row">
          {/*  */}
          <article className="flex flex-row items-center justify-between w-full lg:justify-start lg:space-x-5 lg:w-1/3">
            {/* Mobile & Desktop -  Logo */}
            <article className="flex w-8 h-8 ">
              <Link href="/">
                <a className="block">
                  <Image
                    src="/Logo.PNG"
                    width="1000px"
                    height="1000px"
                    layout="intrinsic"
                    priority
                  />
                </a>
              </Link>
            </article>

            {/* Mobile & Desktop -  Logo Name */}
            <article className="text-lg font-bold font-EBGaramond text-green-brand md:text-2xl">
              AKA Trading Indonesia
            </article>

            {/* Mobile - Hamburger Menu - lg:hidden */}
            <article>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block lg:hidden focus:outline-none"
              >
                <svg
                  className="w-8 h-8 dark:text-white text-green-1000"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Hamburger */}
                  <path
                    className={!isOpen ? "block" : "hidden"}
                    strokeWidth={1}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  {/* X */}
                  <path
                    className={isOpen ? "block" : "hidden"}
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </article>
          </article>

          {/* Mobile & Desktop - Navigation Link */}
          <article
            className={` ${
              !isOpen ? "hidden" : "block"
            } items-center flex-col lg:flex lg:flex-row lg:justify-end lg:w-2/3 w-full divide-y lg:divide-y-0 lg:divide-x  divide-gray-500 pt-5 lg:pt-0`}
          >
            <div>
              <Link href="/">
                <a className="flex items-center justify-between ">
                  <div className={navigation}>{t.nav.home}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/about">
                <a className="flex items-center justify-between">
                  <div className={navigation}>{t.nav.about}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/product">
                <a className="flex items-center justify-between">
                  <div className={navigation}>{t.nav.product}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div>

            {/* <div>
              <Link href="/team">
                <a className="flex items-center justify-between">
                  <div className={navigation}>{t.nav.team}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div> */}

            <div>
              <Link href="/contact">
                <a className="flex items-center justify-between">
                  <div className={navigation}>{t.nav.contact}</div>
                  <div className="lg:hidden">
                    <HiOutlineChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </a>
              </Link>
            </div>

            {/* Dark mode button */}
            <DarkModeButton />

            {/* Internasionalization button */}
            <article className="flex items-center lg:justify-center ">
              <div className="inline-block">
                <button
                  className={`${navigation} px-2`}
                  onClick={() => {
                    router.push("/candleNut", "/", { locale: "EN" });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className="inline-block">
                <button
                  className={`${navigation} px-2`}
                  onClick={() =>
                    router.push("/candleNut", "/", { locale: "ID" })
                  }
                >
                  ID
                </button>
              </div>
            </article>
          </article>
        </section>
      </nav>

      <main className="grid max-w-5xl grid-cols-1 p-5 pt-24 mx-auto space-y-3 md:grid-cols-2 font-inter md:pt-20 ">
        {/* Image */}
        <section className="space-y-3 md:p-5 md:px-0">
          <Image
            className="w-full h-auto "
            src="/kemiri.jpg"
            width={1080}
            height={1200}
            priority
          />
        </section>

        {/* Information */}
        <section className="text-gray-900 md:p-5 ">
          <div className="pl-3 mt-4 mb-2 text-2xl font-bold border-l-4 border-black md:mt-0 md:mb-5 md:text-4xl ">
            {t.candlenut.title}
          </div>

          {/* <p>
            {t.candlenut.description}
            <br />
            <br />

            <span className="font-semibold text-gray-800">
              {t.candlenut.OilContent}
            </span>
            {t.candlenut.isiOilContent}
            <br />
            <span className="font-semibold text-gray-800">
              {t.candlenut.SuitableIndustry}
            </span>
            {t.candlenut.isiSuitableIndustry}
            <br />
            <span className="font-semibold text-gray-800">
              {t.candlenut.ScientificName}
            </span>
            {t.candlenut.isiScientificName}
            <br />
            <span className="font-semibold text-gray-800">
              {t.candlenut.PlaceOfOrigin}
            </span>
            {t.candlenut.isiPlaceOfOrigin}
            <br />
            <span className="font-semibold text-gray-800">
              {t.candlenut.Type}
            </span>
            {t.candlenut.isiType}
            <br />
            <span className="font-semibold text-gray-800">
              {t.candlenut.HSCode}
            </span>
            {t.candlenut.isiHSCode}
          </p> */}

          <section className="flex flex-row items-center justify-between mt-10">
            {/* next/prev */}
            <article className="flex flex-row justify-start font-semibold">
              <Link href="/gambier">
                <a className="px-4 py-1 hover:bg-gray-100">
                  <HiOutlineChevronLeft size={30} />
                </a>
              </Link>
              <Link href="/gambier">
                <a className="px-4 py-1 hover:bg-gray-100">
                  <HiOutlineChevronRight size={30} />
                </a>
              </Link>
            </article>

            {/* Order Button */}
            <Link href="/contact">
              <a className="px-6 py-2 text-white transform rounded hover:shadow-xl hover:bg-opacity-90 bg-green-brand hover:-translate-y-1">
                {t.order}
              </a>
            </Link>
          </section>
        </section>
      </main>
      <Footer />
    </main>
  );
};

export default candleNut;
