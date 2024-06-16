import Button from '@/components/Button';

export default function Bio() {
  return (
    <section className="mt-[90vh] flex flex-col items-center gap-12 px-4 pb-24 pt-32 lg:mt-[100vh] lg:px-16 lg:pb-32 lg:pt-64">
      <h2 className="text-balance text-center text-4xl font-medium lg:text-6xl">
        Hej!{' '}
        <span className="animate-wiggle inline-block origin-bottom-right">
          👋
        </span>{' '}
        I'm Marcus.
      </h2>
      <p className="max-w-[40ch] text-balance text-center text-2xl text-subtle lg:text-6xl">
        I love designing interfaces, writing code and spreading the joy of
        making cool things. I’m also a tech enthusiast and hobbyist musician 🎹.
      </p>
      <Button text="About me" href="about" size="large" style="primary" />
    </section>
  );
}
