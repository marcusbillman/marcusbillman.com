import Button from '@/components/Button';

export default function FeaturedWork() {
  return (
    <section className="px-4 lg:px-16">
      <h2 className="text-4xl font-medium lg:text-6xl">Featured work ✨</h2>
      <ul className="relative isolate mt-12 flex flex-col gap-32 pb-12 lg:mt-16 lg:pb-16">
        <div className="absolute left-12 -z-10 h-full w-px border-l-4 border-dotted border-l-default"></div>
        <FeaturedProject />
        <FeaturedProject />
        <FeaturedProject />
      </ul>
      <div className="mt-6 lg:mt-16">
        <Button text="All projects" href="portfolio" style="subtle" />
      </div>
    </section>
  );
}

function FeaturedProject() {
  return (
    <li className="flex flex-col-reverse gap-6 bg-default py-6 lg:flex-row lg:items-center lg:gap-0 lg:bg-transparent lg:py-0 2xl:items-start">
      <div className="top-16 flex h-fit flex-col gap-6 bg-default lg:w-full lg:gap-8 lg:py-8 lg:pr-16 2xl:sticky 2xl:py-16">
        <div className="flex flex-col gap-2 lg:gap-6">
          <h3 className="font-serif text-xl font-medium text-primary">
            Project name
          </h3>
          <p className="text-balance text-3xl lg:text-4xl 2xl:text-6xl">
            Project headline, lorem ipsum dolor sit amet
          </p>
        </div>
        <Button text="View case" href="#" />
      </div>
      <div className='h-96 rounded-2xl bg-[url("https://picsum.photos/1000/1000")] bg-cover lg:h-[30vw] lg:w-full'></div>
    </li>
  );
}
