import Dribbble from './Dribbble';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import SoundCloud from './SoundCloud';

interface CustomIconProps {
  size?: number;
  className?: string;
}

type CustomIcon = React.FC<CustomIconProps>;

export { Dribbble, GitHub, LinkedIn, SoundCloud };
export type { CustomIcon, CustomIconProps };
