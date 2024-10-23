const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function BusinessCategories() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Tab panels */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Blue glow */}
            <div className="relative mb-12" /* Added margin-bottom */>
              <div className="before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,theme(colors.orange.500))_border-box]">
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <img
                      className="relative h-full w-full rounded-full object-cover"
                      src={`${basePath}/images/monkey.png`}
                      width={32}
                      height={32}
                      alt="Logo 01"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text placed directly below the circle */}
            <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
              <div className="text-center">
                <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-orange-300 before:to-white-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.white.500),transparent)]">
                  <div className="pointer-events-none" aria-hidden="true">
                    <p
                      className="mb-8 text-gray-700"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      We're a young Irish couple with an intense love for
                      animals! As you can imagine, when our dog passed away the
                      day after Christmas 2021, we were heartbroken.
                    </p>

                    <p
                      className="mb-8 text-gray-700"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      We coped by sharing our favourite memories & reflecting on
                      the beautiful bond we made as the years passed. In doing
                      so we uncovered some amazing memories that we had
                      forgotten over time.
                    </p>

                    <p
                      className="mb-8 text-gray-700"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      We figured "we all have spectacular memories with our
                      pets, so why not help others benefit from the power of
                      storytelling & cherish those memories forever, just as we
                      had?"
                    </p>

                    <p
                      className="mb-8 text-gray-700"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      PetPapers was the solution! Our goal is to support
                      millions of devastated pet owners around the globe. We
                      even plan to donate a percentage of profits to animal
                      charities as we grow!
                    </p>

                    <p
                      className="text-gray-700"
                      data-aos="zoom-y-out"
                      data-aos-delay={300}
                    >
                      Like us humans, pets also have their own story to tell.
                      We're here to honour that story by providing unmatched
                      value to each member of the PetPapers Tribe!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
