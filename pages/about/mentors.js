import React from 'react';

function Mentors() {
  return (

      <main className="flex-grow">
        <section className="relative">

        {/* Illustration behind content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
          <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
              <circle cx="1630" cy="128" r="128" />
              <circle cx="178" cy="481" r="40" />
            </g>
          </svg>
        </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h2 className="h2 mb-4">Our Mentors</h2>
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">Meet the adults supporting us on our mission.</p>
              </div>

              {/* Items */}
              <div className="max-w-sm md:max-w-4xl mx-auto grid gap-1 grid-cols-1 md:grid-cols-3">
                <div className="mentor flex items-center justify-center py-2 col-span-2 md:col-auto">
                  <img className="rounded-full" src='/static/images/mentors/ainsley.jpeg' alt="Ainsley Laing" width="225px" />
                  <p className="text-center pt-3 text-2xl">Ainsley Laing</p>
                  <p className="text-center text-gray-500">Computer Science Teacher</p>
                </div>

                <div className="mentor flex items-center justify-center py-2 col-span-2 md:col-auto">
                  <img className="rounded-full" src='/static/images/mentors/leon.jpg' alt="Leon Cox" width="225px" />
                  <p className="text-center pt-3 text-2xl">Leon Cox</p>
                  <p className="text-center text-gray-500">Manufacturing Professor</p>
                </div>

                <div className="mentor flex items-center justify-center py-2 col-span-2 md:col-auto">
                  <img className="rounded-full" src='/static/images/mentors/richard.jpg' alt="Richard Ong" width="225px" />
                  <p className="text-center pt-3 text-2xl">Richard Ong</p>
                  <p className="text-center text-gray-500">Design Teacher</p>
                </div>

              </div>

              {/* Testimonials */}
              <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
                <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

  );
}

export default Mentors;