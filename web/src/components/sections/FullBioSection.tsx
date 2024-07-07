import DotGrid from '@/components/DotGrid';
import Glow from '@/components/Glow';

export default function FullBioSection() {
  return (
    <section className="grid grid-rows-[repeat(5,auto)] gap-x-8 gap-y-6 px-4 py-16 md:grid-cols-[2fr_1fr] lg:px-16 lg:pb-32 2xl:grid-cols-[1fr_1fr_1fr_2fr] 2xl:grid-rows-[repeat(3,auto)] 2xl:gap-y-12">
      <h2 className="content-end text-4xl font-medium 2xl:col-span-3 2xl:col-start-1 2xl:row-start-1 2xl:text-6xl">
        Hej! 👋
      </h2>
      <p className="text-4xl font-medium 2xl:col-span-3 2xl:col-start-1 2xl:row-start-2 2xl:text-6xl">
        I’m a multi-faceted UX/UI designer and web developer based in northern
        Sweden. Currently pursuing a master’s degree in interaction design.
      </p>
      <Portrait />
      <p className="max-w-prose text-xl">
        I’ve designed interfaces for the web, mobile apps and specialised
        equipment. I’ve led user research, developed design systems and
        discussed software architectures.
      </p>
      <p className="max-w-prose text-xl">
        As a kid, I was blown away by automatic sliding doors. Futuristic,
        elegant and opened like magic just by walking near! Some things just
        feel great to use. Today, I dream of making others feel like 6-year-old
        me in the store.
      </p>
      <p className="max-w-prose text-xl">
        In my free time, I follow tech news, enjoy video games and produce dance
        music. I’m also constantly learning about new technologies, design
        tricks and fascinating products.
      </p>
    </section>
  );
}

function Portrait() {
  return (
    <div className="group relative isolate my-6 aspect-[3/4] overflow-hidden rounded-2xl bg-subtle md:-col-start-2 md:row-span-full md:my-0 lg:rounded-4xl 2xl:row-span-full 2xl:self-center">
      <img
        src="/assets/images/portrait-1.png"
        alt="Portrait of Marcus Billman"
        className="absolute bottom-0 left-0 right-0 block transition-opacity duration-300 group-hover:opacity-0"
      />
      <img
        src="/assets/images/portrait-2.png"
        alt="Portrait of Marcus Billman"
        className="absolute bottom-0 left-0 right-0 block opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <DotGrid />
      <Glow
        color="orange"
        className="right-[-40%] top-[-40%] w-[150%] transition-opacity duration-300 group-hover:opacity-0"
      />
      <Glow
        color="blueberry"
        className="right-[-40%] top-[-40%] w-[150%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
}
