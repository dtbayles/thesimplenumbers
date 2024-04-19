'use client';

import {FormEvent, useState} from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import Link from 'next/link';

export default function Home() {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement the function to send the form data to your server or email service provider
    console.log({ name, email, message });
    // Reset the form fields after submission or show a success message
  };

  const smoothScroll = (targetId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

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
      title: 'Financial Planning',
      description: "Comprehensive financial strategy tailored to personal and business needs.",
    },
    {
      id: 2,
      delay: '100',
      viewBox: "0 0 64 64",
      title: 'Tax Preparation',
      description: "Expert tax services to ensure you're saving the most and compliant with laws.",
    },
    {
      id: 3,
      delay: '200',
      viewBox: "0 0 64 64",
      title: 'Bookkeeping',
      description: "Accurate and efficient bookkeeping to keep your finances in order.",
    },
    {
      id: 4,
      delay: '300',
      viewBox: "0 0 64 64",
      title: 'Investment Advice',
      description: "Smart investment strategies to help your wealth grow safely.",
    },
    {
      id: 5,
      delay: '400',
      viewBox: "0 0 64 64",
      title: 'Retirement Planning',
      description: "Plan for the future with personalized retirement strategies.",
    },
    {
      id: 6,
      delay: '500',
      viewBox: "0 0 64 64",
      title: 'Budgeting Advice',
      description: "Practical budgeting tips and strategies to improve financial health.",
    },
  ];

  return (
    <>
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
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block text-indigo-600 xl:inline">Simplify</span>{' '}
                    <span className="block xl:inline">Your Finances</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Expert financial advice, bookkeeping, and tax services tailored for you.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        onClick={smoothScroll('#services')}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        View Services
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        onClick={smoothScroll('#book')}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Schedule Now
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
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
              <h2 className="h2 mb-4 text-gray-900">A better way to style.</h2>
              <p className="text-xl text-gray-600">Offering a wide range of hairstyling services, Mane Voyage specializes in meeting your hair needs on the go.</p>
            </div>

            {/* Items */}
            <div
              className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
              data-aos-id-blocks>

              {services.map(service => (
                <div key={service.id} className="relative flex flex-col items-center" data-aos="fade-up"
                     data-aos-delay={service.delay} data-aos-anchor="[data-aos-id-blocks]">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                    <path className="stroke-current text-purple-100"
                          d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                          strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd"/>
                    <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square"
                          strokeWidth="2"/>
                  </svg>
                  <h4 className="h4 mb-2 text-gray-900">{service.title}</h4>
                  <p className="text-lg text-gray-500 text-center">{service.description}</p>
                </div>
              ))}


            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Plan
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Select the best plan that fits your needs. All plans include our high-quality products and services.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex flex-wrap justify-center gap-8">
              {pricingPlans.map(plan => (
                <div key={plan.id} className="text-center shadow-lg p-6 rounded-lg max-w-sm w-full bg-white">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h3>
                  <div className="mt-4 items-baseline text-6xl leading-none font-extrabold text-indigo-600">
                    ${plan.price}
                  </div>
                  <div className="mt-5 mb-8 text-gray-500">
                    {plan.features.map(feature => (
                      <p key={feature}>{feature}</p>
                    ))}
                  </div>
                  {/*<button className="mt-auto bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700">*/}
                  {/*  Choose {plan.name}*/}
                  {/*</button>*/}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 bg-gray-50" id="book">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Booking</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Schedule an Appointment
            </p>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Use our online scheduling tool to book your next appointment.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  {/* Your Calendly Link */}
                  <div className="calendly-inline-widget" style={{minWidth: '320px', height: '630px'}} data-url="https://calendly.com/drew-i96j/30min" />
                  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us section */}
      <section id="contact" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Get in Touch</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Book Your Next Appointment
            </p>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Have any questions or want to book an appointment? Fill out the form below, and we'll get back to you as
              soon as possible.
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
                        className="shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      </main>


    </>
  );
}
