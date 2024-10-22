import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <img
                className="rounded-full"
                src={`${basePath}/images/dog-03.png`}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “This helped my <em className="italic text-gray-500">dad</em>. I
              like this website!”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Joe Blogs</span>{" "}
              {/* <span className="text-gray-400">/</span>{" "} */}
              {/* <a className="text-blue-500" href="#0">
                CTO at Microsoft
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
