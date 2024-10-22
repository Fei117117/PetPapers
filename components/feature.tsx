"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function FeaturesSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 text-center">
      {/* Section Header */}
      <div
        className="mx-auto max-w-3xl"
        data-aos="zoom-y-out"
        data-aos-delay={600}
      >
        <div className="relative aspect-video rounded-2xl bg-orange-100 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.orange.300),transparent)1]">
          <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.orange.200)_4.5px,_transparent_0)] after:w-[41px]">
            <span className="text-[20px] font-semibold text-orange-800">
              How to Use This Website
            </span>
          </div>

          <div className="font-mono text-gray-700">
            {/* Step 1 */}
            <div className="mb-4">
              {/* <span className="text-orange-600 font-bold">Step 1:</span> */}
              <img
                src={`${basePath}/images/one.png`}
                alt="Number One Icon"
                style={{ width: "20px", height: "20px" }}
              />
              <br />
              <span className=" text-orange-800">
                Tell your pet’s marvelous life story and upload your favorite
                photos with our simple, easy-to-use online tool!
              </span>{" "}
              <span className="animate-[code-2_10s_infinite]">
                {/* --registry=https://npm.pkg.github.com --scope=@phanatic */}
              </span>
              <br />
              <span className="text-gray-600"></span>
            </div>

            {/* Step 2 */}
            <div className="mb-4">
              {/* <span className="text-orange-600 font-bold">Step 2:</span> */}
              <img
                src={`${basePath}/images/two.png`}
                alt="Number Two Icon"
                style={{ width: "20px", height: "20px" }}
              />
              <br />
              <span className="text-orange-800">
                Heal at your own pace, with full flexibility. Simply let us know
                when you’re finished.
              </span>
              <br />
              <span className="text-gray-600">
                {/* Publish your package for others to use. */}
              </span>
            </div>
            {/* Step 3 */}
            <div className="mb-4">
              {/* <span className="text-orange-600 font-bold">Step 3:</span> */}
              <img
                src={`${basePath}/images/three.png`}
                alt="Number Three Icon"
                style={{ width: "20px", height: "20px" }}
              />
              <br />
              <span className="text-orange-800">
                Sit back while we deliver a beautiful keepsake book full of your
                stories and photos to cherish forever.
              </span>
              <br />
              <span className="text-gray-600">
                {/* Publish your package for others to use. */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
