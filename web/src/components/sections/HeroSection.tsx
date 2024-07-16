import {
  AudioFile,
  BezierCurve,
  Browser,
  ButtonClick,
  Cable,
  CodeBlock,
  Daw,
  Dropdown,
  Knob,
  Metronome,
  Phone,
  Piano,
  Switch,
} from '@/components/illustrations';
import WaveLine from '@/components/WaveLine.tsx';
import DotGrid from '@/components/DotGrid';

export default function HeroSection() {
  return (
    <header className="sticky top-0 h-[90vh] overflow-hidden px-4 pt-[15vh] lg:h-screen lg:px-16 lg:pt-32">
      {/* Content */}
      <div className="z-10 max-w-7xl">
        <h1 className="text-balance text-center text-5xl md:text-7xl lg:text-left lg:text-9xl">
          Designer, developer and{' '}
          <span className="relative mr-[0.33ch] inline-block">
            <span className="mb-1 inline-block">human</span>
            <WaveLine className="text-primary" />
          </span>
          <img
            src="/assets/images/profile-picture.jpg"
            alt="Profile picture"
            className="inline size-12 rounded-full shadow-lg md:size-20 lg:size-32"
          />
        </h1>
      </div>

      {/* Illustrations */}
      <div className="absolute left-1/2 top-2/3 z-50 size-[1400px] -translate-x-1/2">
        {/* Outer circle */}
        <div className="absolute inset-0 motion-safe:animate-[spin_30s_linear_infinite_reverse]">
          <div className="absolute inset-0 rounded-full border-4 border-primary opacity-10"></div>
          <div className="absolute left-[30%] top-[-2%] z-10 rotate-[-15deg]">
            <Browser className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[56%] top-[-2%] z-10 rotate-[10deg]">
            <AudioFile className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[70%] top-[4%] z-10 rotate-[25deg]">
            <Switch className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[80%] top-[8%] z-10 rotate-[40deg]">
            <Phone className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[86%] top-[22%] z-10 rotate-[60deg]">
            <Daw className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[98%] top-[40%] z-10 rotate-[80deg]">
            <Metronome className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[96%] top-[54%] z-10 rotate-[105deg]">
            <BezierCurve className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[87%] top-[70%] z-10 rotate-[120deg]">
            <Browser className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[81%] top-[85%] z-10 rotate-[140deg]">
            <AudioFile className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[70%] top-[94%] z-10 rotate-[155deg]">
            <Switch className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[55%] top-[95%] z-10 rotate-[172deg]">
            <Phone className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[35%] top-[95%] z-10 rotate-[180deg]">
            <Cable className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[14%] top-[86%] z-10 rotate-[215deg]">
            <Daw className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[4%] top-[72%] z-10 rotate-[-120deg]">
            <Metronome className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[-3%] top-[56%] z-10 rotate-[-95deg]">
            <BezierCurve className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[-6%] top-[37%] z-10 rotate-[-80deg]">
            <Browser className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[5%] top-[22%] z-10 rotate-[-60deg]">
            <AudioFile className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[13%] top-[8%] z-10 rotate-[-45deg]">
            <Cable className="motion-safe:animate-float" />
          </div>
        </div>

        {/* Inner circle */}
        <div className="absolute inset-[15%] motion-safe:animate-[spin_20s_linear_infinite_reverse]">
          <div className="absolute inset-0 rounded-full border-4 border-primary opacity-10"></div>
          <div className="absolute left-[38%] top-[-4%] z-10 rotate-[-3deg]">
            <Piano className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[68%] top-[5%] z-10 rotate-[25deg]">
            <ButtonClick className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[85%] top-[20%] z-10 rotate-[50deg]">
            <Dropdown className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[96%] top-[37%] z-10 rotate-[75deg]">
            <Knob className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[88%] top-[55%] z-10 rotate-[100deg]">
            <CodeBlock className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[79%] top-[78%] z-10 rotate-[135deg]">
            <Piano className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[58%] top-[93%] z-10 rotate-[160deg]">
            <ButtonClick className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[30%] top-[94%] z-10 rotate-[-165deg]">
            <Dropdown className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[10%] top-[80%] z-10 rotate-[-135deg]">
            <Knob className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[-9%] top-[55%] z-10 rotate-[-100deg]">
            <CodeBlock className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[-3%] top-[25%] z-10 rotate-[-65deg]">
            <Piano className="motion-safe:animate-float" />
          </div>
          <div className="absolute left-[16%] top-[7%] z-10 rotate-[-35deg]">
            <ButtonClick className="motion-safe:animate-float" />
          </div>
        </div>
      </div>

      {/* Backgrounds */}
      <DotGrid dim="default" />
      <div className="absolute left-0 top-0 -z-20 h-full w-full bg-[url('/assets/images/hero-bg-still.jpg')] bg-cover bg-center">
        <video
          src="/assets/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          className="h-full w-full object-cover motion-reduce:hidden"
        ></video>
      </div>
    </header>
  );
}
