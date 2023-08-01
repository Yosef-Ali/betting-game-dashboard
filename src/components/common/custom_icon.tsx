

import { styled } from '@mui/material/styles';
interface IconCircleProps {
  color: string;
}

interface IconCircleWithIconProps {
  color: string;
  icon: React.ElementType;
}

const IconCircle = styled('div')<IconCircleProps>(
  ({ color }) => ({
    border: `2px solid ${color}`,
    color,

    backgroundColor: color + '4D', // 30% opacity

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })
);


const IconCircleWithIcon: React.FC<IconCircleWithIconProps> = ({ color, icon: Icon }) => {
  return (
    <IconCircle color={color}>
      <Icon />
    </IconCircle>
  );
};
export default IconCircleWithIcon;