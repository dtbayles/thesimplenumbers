'use client';

import {FormEvent, useState} from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import Link from 'next/link';
import {toast} from "react-toastify";

export default function Home() {
  const COMPANY_NAME = 'The Simple Numbers'

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const smoothScroll = (targetId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {name, email, message};

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Email sent successfully!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(`Error sending email: ${result.message}`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error('Error submitting form. Please try again.', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  }

  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      features: [
        'Monthly Financial Statements',
        'End-of-Year Tax Preparation Support',
        'Quarterly Review Meetings'
      ],
      price: '200',
    },
    {
      id: 2,
      name: 'Professional',
      features: [
        'All Starter Features',
        'Bookkeeping Services',
        'Tax Strategy and Planning',
        'Bi-Monthly Review Meetings'
      ],
      price: '500',
    },
    {
      id: 3,
      name: 'Enterprise',
      features: [
        'All Professional Features',
        'CFO Advisory Services',
        'Custom Financial Analysis',
        'Monthly Strategy Meetings'
      ],
      price: '1000',
    },
  ];

  const services = [
    {
      id: 1,
      delay: '',
      viewBox: "0 0 64 64",
      title: 'Timely/Accurate Financial Reporting',
      description: "Establish meaningful close procedures.",
    },
    {
      id: 2,
      delay: '100',
      viewBox: "0 0 64 64",
      title: 'Software Selection/Implementation',
      description: "Direct selection and implementation.",
    },
    {
      id: 3,
      delay: '200',
      viewBox: "0 0 64 64",
      title: 'Product Economics',
      description: "Develop product and services costs and margins.",
    },
    {
      id: 4,
      delay: '300',
      viewBox: "0 0 64 64",
      title: 'Operational Excellence',
      description: "Implement processes to help with continuous improvement.",
    },
    {
      id: 5,
      delay: '400',
      viewBox: "0 0 64 64",
      title: 'Supply Chain Management',
      description: "Right Items, right quantities, right price.",
    },
    {
      id: 6,
      delay: '500',
      viewBox: "0 0 64 64",
      title: 'Budgeting and Forecasting',
      description: "Establish meaningful Budgeting and Forecasting tools and processes.",
    },
  ];

  const colors = {
    primary: '#bed99b',
    primaryHover: '#a8c985',
    secondary: '#192a21',
    background: '#ffffff',
    text: '#111827',
    textSecondary: '#6b7280',
  };

  return (
    <>
      <style jsx global>{`
          body {
              background-color: ${colors.background};
              color: ${colors.text};
          }

          a {
              color: ${colors.primary};
          }

          a:hover {
              color: ${colors.primaryHover};
          }

          .cta-link {
              color: ${colors.text};
              background-color: ${colors.primary};
              border-color: transparent;
          }

          .cta-link:hover {
              color: ${colors.text};
              background-color: ${colors.primaryHover};
          }

          .submit-button:hover {
              background-color: ${colors.primaryHover};
          }
      `}</style>
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/*<h1 className="text-3xl font-bold text-gray-900">The Simple Numbers</h1>*/}
          <Image
            className=""
            src="/images/simple-numbers-logo-new.svg"
            alt="The Simple Numbers Logo"
            width={150}
            height={20}
            // layout="fill"
          />
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Hero section */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100"/>
              </svg>
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline" style={{color: colors.primary}}>Simplify</span>{' '}
                    <span className="block xl:inline">Your Numbers</span>
                  </h1>
                  <p
                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Accurate and Timely Financials, ERP Selection, Operational Excellence
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        onClick={smoothScroll('#services')}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 cta-link"
                      >
                        View Services
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        onClick={smoothScroll('#contact')}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 cta-link"
                      >
                        Contact Us
                      </a>
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Video Modal"
                        className="ReactModal__Content"
                        overlayClassName="ReactModal__Overlay"
                      >
                        <div className="relative pt-56.25%">
                          <h1>video here</h1>
                          {/*<Player*/}
                          {/*  url="https://vimeo.com/76979871"*/}
                          {/*  width="100%"*/}
                          {/*  height="100%"*/}
                          {/*  style={{ position: 'absolute', top: '0', left: '0' }}*/}
                          {/*  playing={modalIsOpen}*/}
                          {/*/>*/}
                        </div>
                        <button onClick={closeModal} className="mt-4 px-4 py-2 text-sm font-medium text-indigo-600">
                          Close
                        </button>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="/images/hero-image-01.jpg"
              alt="Mane Voyage Hair Styling"
              width={700}
              height={1000}
              // layout="fill"
            />
          </div>
        </div>

        {/*<Features/>*/}
        <section className="bg-gray-50" id="services">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              {/* Section header */}
              {/*<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">*/}
              {/*  <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>*/}
              {/*  <h2 className="h2 mb-4 text-gray-900">A better way to style.</h2>*/}
              {/*  <p className="text-xl text-gray-600">Offering a wide range of hairstyling services, Mane Voyage specializes in meeting your hair needs on the go.</p>*/}
              {/*</div>*/}

              {/* Items */}
              <div
                className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                data-aos-id-blocks>

                {services.map(service => (
                  <div key={service.id} className="relative flex flex-col items-center" data-aos="fade-up"
                       data-aos-delay={service.delay} data-aos-anchor="[data-aos-id-blocks]">
                    <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      {/* Using the primary color for the rectangle's fill and secondary color for the stroke */}
                      <rect className="fill-current" width="64" height="64" rx="32" style={{color: colors.primary}}/>
                      <path className="stroke-current"
                            d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                            strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd"
                            style={{color: colors.background}}/>
                      <path className="stroke-current" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2"
                            style={{color: colors.background}}/>
                    </svg>
                    {/* Using the text color for headers and textSecondary for descriptions */}
                    <h4 className="h4 mb-2 text-center" style={{color: colors.text}}>{service.title}</h4>
                    <p className="text-lg text-center" style={{color: colors.textSecondary}}>{service.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Contact Us section */}
        <section id="contact" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-base font-semibold tracking-wide uppercase" style={{color: colors.primary}}>Get in
                Touch</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Contact Us
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Please fill out the form below for information
              </p>
            </div>
            <div className="flex justify-center">
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap mb-6">
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label htmlFor="grid-name"
                           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Name</label>
                    <input type="text" id="grid-name" value={name} onChange={e => setName(e.target.value)}
                           placeholder="Jane Doe" required
                           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                  </div>

                  <div className="w-full px-3">
                    <label htmlFor="grid-email"
                           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email</label>
                    <input type="email" id="grid-email" value={email} onChange={e => setEmail(e.target.value)}
                           placeholder="email@example.com" required
                           className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
                  </div>

                  <div className="w-full px-3 mt-6">
                    <label htmlFor="grid-message"
                           className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Message</label>
                    <textarea id="grid-message" value={message} onChange={e => setMessage(e.target.value)}
                              placeholder="Enter your message here..." required
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              rows={3}></textarea>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <button type="submit"
                          className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out submit-button"
                          style={{backgroundColor: colors.primary, color: colors.background}}>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>


      <footer>
        <div className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Top area: Blocks */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

              {/* 1st block */}
              <div className="md:col-span-4 lg:col-span-5">
                <div className="mb-2">
                  {/* Logo */}
                  <Link href="/" className="inline-block" aria-label="Cruip">
                    <Image
                      className=""
                      src="/images/simple-numbers-logo-dark.svg"
                      alt="The Simple Numbers Logo"
                      width={150}
                      height={32}
                    />
                  </Link>
                </div>
                <div className="text-gray-400">Accurate and Timely Financials, ERP Selection, Operational Excellence
                </div>
              </div>

              {/* 2nd, 3rd and 4th blocks */}
              <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

                {/* 2nd block */}
                <div className="text-sm">

                </div>

                {/* 3rd block */}
                <div className="text-sm">

                </div>

                {/* 4th block */}
                <div className="text-sm">
                  {/*<h6 className="text-gray-200 font-medium mb-1">{COMPANY_NAME}</h6>*/}
                  {/*<ul>*/}
                  {/*  <li className="mb-1">*/}
                  {/*    <Link href="/"*/}
                  {/*          className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Home</Link>*/}
                  {/*  </li>*/}
                  {/*  <li className="mb-1">*/}
                  {/*    <Link href="/#services"*/}
                  {/*          className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Services</Link>*/}
                  {/*  </li>*/}
                  {/*  <li className="mb-1">*/}
                  {/*    <Link href="/#pricing"*/}
                  {/*          className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Pricing</Link>*/}
                  {/*  </li>*/}
                  {/*  <li className="mb-1">*/}
                  {/*    <Link href="/#booking"*/}
                  {/*          className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Booking</Link>*/}
                  {/*  </li>*/}
                  {/*  <li className="mb-1">*/}
                  {/*    <Link href="/#contact"*/}
                  {/*          className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Get in touch</Link>*/}
                  {/*  </li>*/}
                  {/*</ul>*/}
                </div>

              </div>

            </div>

            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between">

              {/* Social links */}
              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                <li>
                  <Link href="/"
                        className="flex justify-center items-center rounded-full transition duration-150 ease-in-out cta-link"
                        aria-label="Twitter">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"/>
                    </svg>
                  </Link>
                </li>
                <li className="ml-4">
                  <Link href="/"
                        className="flex justify-center items-center rounded-full transition duration-150 ease-in-out cta-link"
                        aria-label="Facebook">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"/>
                    </svg>
                  </Link>
                </li>
                <li className="ml-4">
                  <Link href="/"
                        className="flex justify-center items-center rounded-full transition duration-150 ease-in-out cta-link"
                        aria-label="Instagram">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20.145" cy="11.892" r="1"/>
                      <path
                        d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"/>
                      <path
                        d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z"/>
                    </svg>
                  </Link>
                </li>
                <li className="ml-4">
                  <Link href="/"
                        className="flex justify-center items-center rounded-full transition duration-150 ease-in-out cta-link"
                        aria-label="Linkedin">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z"/>
                    </svg>
                  </Link>
                </li>
              </ul>

              {/* Copyrights note */}
              <div className="flex">
              <div className="text-gray-400 text-sm mr-4">
                <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
                <p>Designed and developed by <a href="https://redfishgo.com"
                                                className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                                                target="_blank"
                                                rel="noopener noreferrer">RedfishGo</a>.
                </p>
              </div>
                <Link href="https://redfishgo.com" target="_blank" className="inline-block" aria-label="Cruip">
                  <Image
                    src="/images/rf-go-logo-dark.svg"
                    alt="logo"
                    width={60}
                    height={15}
                  />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
