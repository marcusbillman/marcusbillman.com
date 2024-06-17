import AudioFile from './AudioFile';
import BezierCurve from './BezierCurve';
import Browser from './Browser';
import ButtonClick from './ButtonClick';
import Cable from './Cable';
import CodeBlock from './CodeBlock';
import Daw from './Daw';
import Dropdown from './Dropdown';
import Knob from './Knob';
import Metronome from './Metronome';
import Phone from './Phone';
import Piano from './Piano';
import Switch from './Switch';

interface IllustrationProps {
  transparent?: boolean;
  className?: string;
}

type Illustration = React.FC<IllustrationProps>;

export {
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
};
export type { Illustration, IllustrationProps };
