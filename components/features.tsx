// Components
import { Image } from "@chakra-ui/react";
// Assets

export default function Features() {
  return (
    <section className="relative">
      {/* Top blurred shape */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          src="../public/images/blurred-shape-gray.svg"
          alt="Blurred Shape Gray"
              width={1104}
            height={384}
        />
      </div>

      {/* Bottom blurred shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          src="../../public/images/blurred-shape.svg"
          alt="Blurred Shape"
              width={1104}
            height={384}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/_0.25),transparent)_1] md:py-20">
          {/* Header */}
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              src="../../public/images/testimonial-01.jpg"
              alt="Features"
                  width={1104}
            height={384}
              objectFit="cover"
            />
          </div>

          {/* Testimonial */}
          <Image
            src="../../public/images/testimonial-02.jpg"
            alt="Testimonial"
                width={1104}
            height={384}
            objectFit="cover"
          />

          {/* Footer Illustration */}
          <Image
            src="/images/testimonial-01.jpg"
            alt="Features"
            width={1104}
            height={384}
          />
        </div>
      </div>
    </section>
  );
}
