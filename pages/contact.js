import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { EN, ID } from "../translation";
import emailjs from "emailjs-com";
import DarkModeButton from "../components/DarkModeButton";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
const contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ibi2aip",
        "contact_form",
        e.target,
        "user_E6WrSXVVfdvAp9k2YeHDO"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          console.log(result.text);
        },
        (error) => {
          console.log("GAGAL", error);
        }
      );
  }

  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  const [isOpen, setIsOpen] = useState(false);
  const navigation =
    " text-sm text-gray-600 hover:underline dark:text-gray-300 dark:hover:text-white py-4 font-inter lg:px-5 lg:py-0 block text-center ";
  const ab =
    "h-10 px-2 placeholder-gray-500  bg-gray-200 rounded  focus:outline-none  w-full  dark:placeholder-black  focus:ring focus:ring-1 focus:ring-green-brand dark:focus:ring-gray-300 dark:bg-gray-300";

  return (
    <main className="min-h-screen mx-auto dark:bg-gray-bkg ">
      <Head>
        <title>{`${t.nav.contact} ∙ AKA Trading Indonesia`}</title>
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
                  className="w-8 h-8 dark:text-white text-green-brand"
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
                    router.push("/", "/", { locale: "EN" });
                  }}
                >
                  EN
                </button>
              </div>
              {`|`}
              <div className="inline-block">
                <button
                  className={`${navigation} px-2`}
                  onClick={() => router.push("/", "/", { locale: "ID" })}
                >
                  ID
                </button>
              </div>
            </article>
          </article>
        </section>
      </nav>

      <main className="grid max-w-5xl grid-cols-1 gap-5 px-5 pt-24 mx-auto lg:grid-cols-2 lg:px-0 md:flex-row">
        {/* Address + Concact + Maps */}
        <section>
          {/* Address + Contact */}
          <section className="space-y-2 font-sans text-gray-700 rounded-lg dark:text-white">
            <div className="mb-2 text-xl font-semibold">Head Office</div>
            <div></div>

            {/* Address */}
            <div className="flex flex-row items-start justify-start p-2">
              <div>
                <svg
                  className="w-5 h-5 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="pb-2 -mt-1">
                QP Office, Perkantoran Tanjung Mas Raya, Blok B1 nomor 44,
                Tanjung Barat, Jagakarsa – Jakarta Selatan 12530
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {/* phone number */}
              <div className="flex flex-row items-center p-2 overflow-hidden text-sm border rounded-lg border-green-brand dark:text-white dark:bg-gray-bkg hover:bg-gray-100 bg-gray-50">
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <div className="">081223191932</div>
              </div>

              {/* email */}
              <div className="flex flex-row items-center p-2 overflow-hidden text-sm border rounded-lg border-green-brand dark:text-white dark:bg-gray-bkg hover:bg-gray-100 bg-gray-50">
                <div>
                  <svg
                    className="w-5 h-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="">
                  <a
                    className="hover:underline"
                    href="mailto:AKAtradingindo@gmail.com?subject=Website aka-tradingindo.com&body=Hi, i want to ask something about some stuff "
                  >
                    AKAtradingindo@gmail.com
                  </a>
                </div>
              </div>

              {/* fb  */}
              <a
                href="https://www.facebook.com/AKA-Trading-Indonesia-108120014669787"
                target="_blank"
              >
                <div className="flex flex-row items-center p-2 border rounded-lg border-[#1777F2] hover:bg-gray-100 bg-gray-50 dark:bg-gray-bkg">
                  <FaFacebookSquare color="#1777F2" size={20} />
                  <div className="ml-2 text-sm font-bold text-[#1777F2]">
                    AKA Trading Indonesia
                  </div>
                </div>
              </a>

              {/* ln */}
              <a
                href="https://www.linkedin.com/company/aka-tradingindo"
                target="_blank"
              >
                <div className="flex flex-row items-center p-2 border rounded-lg border-[#2867B2] hover:bg-gray-100 bg-gray-50 dark:bg-gray-bkg">
                  <FaLinkedin color="#2867B2" size={20} />
                  <div className="ml-2 text-sm font-bold text-[#2867B2]">
                    AKA Trading Indonesia
                  </div>
                </div>
              </a>

              {/* ig  */}
              <a
                href="https://www.instagram.com/akatradingindo/"
                target="_blank"
              >
                <div className="flex flex-row items-center p-2 border rounded-lg border-[#1777F2] hover:bg-gray-100 bg-gray-50 dark:bg-gray-bkg">
                  <AiFillInstagram color="#EC4899" size={20} />
                  <div className="ml-2 text-sm font-bold text-transparent bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 bg-clip-text">
                    AKA Trading Indonesia
                  </div>
                </div>
              </a>
            </div>
          </section>

          {/* maps */}
          <div>
            <iframe
              className={`w-full mt-5 h-80`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.656300461767!2d106.83740851413296!3d-6.30880499543414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed2b940afd89%3A0x6186386a52b3ee04!2sQP%20OFFICE!5e0!3m2!1sen!2sid!4v1613370918140!5m2!1sen!2sid"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </section>

        {/* enquiry */}
        <form
          className="h-auto p-5 space-y-5 bg-gray-100 border rounded dark:border-gray-400 border-green-brand md:mx-auto dark:bg-gray-bkg md:mr-5"
          onSubmit={sendEmail}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              placeholder={`${t.form.fullName}`}
              className={ab}
              id="nama"
              type="text"
              name="full_name"
            />

            <div className="">
              <input
                placeholder={`${t.form.companyName}`}
                className={ab}
                id="nama"
                type="text"
                name="company_Name"
              />
            </div>

            <input
              placeholder={`${t.form.email}`}
              className={ab}
              id="email"
              type="email"
              name="email"
            />
            <div className="">
              <input
                placeholder={`${t.form.phoneNumber}`}
                className={ab}
                id="Email"
                type="tel"
                name="phone_number"
              />
            </div>
          </div>

          <input
            placeholder={`${t.form.address}`}
            className={ab}
            id="Address"
            type="text"
            name="address"
          />

          <input
            placeholder={`${t.form.country}`}
            className={ab}
            id="Country"
            type="text"
            name="country"
          />

          <input
            placeholder={`${t.form.subject}`}
            className={ab}
            id="Subject"
            type="text"
            name="subject"
          />

          <textarea
            className="w-full p-2 placeholder-gray-500 bg-gray-200 rounded-md dark:bg-gray-300 dark:placeholder-black focus:ring-1 focus:outline-none focus:ring-green-brand dark:focus:ring-gray-400 "
            name="message"
            id="message"
            cols="20"
            rows="5"
          ></textarea>

          {/* send button */}
          <div className="flex justify-end ">
            <input
              className="h-10 px-5 font-semibold text-white rounded cursor-pointer bg-green-brand hover:bg-opacity-90"
              type="submit"
              value={`${t.form.send}`}
            />
          </div>
        </form>
      </main>
      <Footer />
    </main>
  );
};

export default contact;

const IG = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M1225 5110 c-426 -30 -658 -111 -854 -296 l-62 -59 281 -325 c155
-179 290 -333 299 -344 18 -17 21 -16 83 46 179 179 408 270 778 309 141 14
1157 21 1445 9 395 -17 587 -63 778 -186 258 -167 406 -424 459 -799 10 -67
13 -298 13 -910 0 -894 -2 -931 -60 -1136 -84 -297 -279 -526 -537 -631 -77
-32 -78 -32 -59 -52 10 -12 136 -158 281 -326 145 -168 268 -311 275 -319 11
-11 22 -10 69 8 149 55 276 141 389 262 135 144 222 311 274 526 24 105 25
124 35 608 5 275 7 964 4 1530 -4 898 -7 1042 -21 1125 -80 458 -359 785 -772
905 -202 59 -167 58 -1633 60 -740 2 -1399 -1 -1465 -5z"
        />
        <path
          d="M1945 4100 c-417 -16 -627 -80 -735 -224 -71 -95 -94 -52 237 -435
l297 -343 20 28 c38 53 151 166 216 216 80 61 219 130 325 160 69 20 103 23
250 23 146 0 182 -3 253 -23 309 -84 560 -315 666 -613 47 -130 60 -223 53
-376 -7 -183 -46 -313 -139 -463 -84 -136 -241 -286 -365 -349 -24 -12 -43
-24 -43 -26 0 -3 120 -144 266 -313 300 -346 263 -320 395 -276 193 63 330
196 394 381 53 152 70 366 81 1043 15 840 -49 1196 -250 1395 -104 103 -205
147 -421 182 -106 17 -1146 26 -1500 13z m1743 -337 c28 -17 59 -48 77 -77 26
-42 30 -59 30 -115 -1 -103 -43 -168 -135 -210 -82 -37 -169 -24 -240 36 -128
110 -100 306 54 380 68 32 148 27 214 -14z"
        />
        <path
          d="M2462 3180 c-194 -27 -353 -134 -441 -299 l-33 -62 24 -29 c12 -17
178 -210 368 -430 393 -456 347 -421 476 -358 92 44 197 148 246 243 49 94 68
163 75 270 20 309 -161 576 -438 648 -74 20 -201 27 -277 17z"
        />
      </g>
    </svg>
  );
};
