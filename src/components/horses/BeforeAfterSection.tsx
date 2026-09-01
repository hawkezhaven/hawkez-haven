type BeforeAfterSectionProps = {
  horseName: string;
  image: string;
  caption: string;
};

export default function BeforeAfterSection({
  horseName,
  image,
  caption,
}: BeforeAfterSectionProps) {
  return (
    <section className="bg-[#ede5d4] py-16" aria-labelledby="before-after-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="block h-px w-8 bg-[#b8922a]" />
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#1a1a18]">
            Before &amp; After
          </p>
        </div>

        <h2
          id="before-after-heading"
          className="font-serif text-3xl md:text-4xl text-[#1a1a18] mb-4"
        >
          {horseName}&apos;s transformation.
        </h2>
        <p className="max-w-3xl text-sm text-[#4a4a42] leading-relaxed mb-8">
          A visual look at the journey — where they started and where they are now.
        </p>

        <figure className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl border border-[#ddd4be]/70 bg-white shadow-sm">
            <img
              src={image}
              alt={`${horseName} before and after transformation`}
              width={1600}
              height={1000}
              loading="lazy"
              className="block w-full h-auto"
            />
          </div>
          <figcaption className="mt-5 max-w-3xl mx-auto text-center text-sm text-[#4a4a42] leading-relaxed">
            {caption}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
