import { Wrapper } from './Loader.style';

const Loader = ({
  width,
  height,
  thickness,
  outerColor,
  innerColor,
  extendStyle,
  ...props
}) => (
  <Wrapper
    width={width}
    height={height}
    thickness={thickness}
    outerColor={outerColor}
    innerColor={innerColor}
    extendStyle={extendStyle}
    {...props}
  />
);

export default Loader;
