const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-white-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <div className="flex items-center justify-center space-x-4">
              <h2 className="text-3xl font-bold text-black-200 md:text-4xl">
                How This Can Help Me
              </h2>
              <img
                className="rounded-full bg-gray-900"
                src={`${basePath}/images/dog.jpg`}
                width={100}
                height={100}
                alt="dog"
              />
            </div>
          </div>

          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-orange-300 before:to-white-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.white.500),transparent)]">
                <div className="pointer-events-none" aria-hidden="true">
                  <p
                    className="mb-8 text-gray-700"
                    data-aos="zoom-y-out"
                    data-aos-delay={300}
                  >
                    Losing a pet is painful and we speak from personal
                    experience. We lose a piece of our heart and we're left with
                    memories. From flowers to candles, nothing seems to soothe
                    the hurt we feel.
                  </p>
                  <p
                    className="mb-8 text-gray-700"
                    data-aos="zoom-y-out"
                    data-aos-delay={300}
                  >
                    Using a form of narrative therapy, PetPapers helps you find
                    comfort by telling your pet's awesome life story! Ensure no
                    story goes untold by sharing memories with loved ones and
                    healing together through the power of storytelling.
                  </p>
                  <p
                    className="mb-8 text-gray-700"
                    data-aos="zoom-y-out"
                    data-aos-delay={300}
                  >
                    And don't worry! You don't have to be a master writer! Our
                    easy to use online tool provides you with prompts, making
                    your story flow effortlessly!
                  </p>
                  <p
                    className="mb-8 text-gray-700"
                    data-aos="zoom-y-out"
                    data-aos-delay={300}
                  >
                    From your favourite adventures to cuddles shared, explore
                    how your pet impacted your life and celebrate their legacy
                    through the joyful memories they left you with
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
