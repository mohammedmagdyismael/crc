import themeData from 'app/theme/themeData';
import { Container, ColorContainer, ColorName, ColortLabel, SectionTitle } from './DevPalettes.style';

const DevPalettes = () => {

  const { colors } = themeData;
  console.log(themeData);

  return (
    <>
      <SectionTitle>Colors</SectionTitle>
      <Container>
        {Object.entries(colors).map(([key, value]) => {

          if (key !== 'rgb') {
            return (
              // eslint-disable-next-line react/jsx-key
              <ColorContainer>
                <ColorName>Key: {key}</ColorName>
                
                <ColortLabel style={{ backgroundColor: value }}></ColortLabel>
              </ColorContainer>
            )
          }
          return '';
          })}
          {Object.entries(colors?.rgb).map(([key, value]) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <ColorContainer>
                <ColorName>Key: {key}</ColorName>
                
                <ColortLabel style={{ backgroundColor: `rgb(${value})` }}></ColortLabel>
              </ColorContainer>
            )
          })}
      </Container>
    </>
  );
};

export default DevPalettes;
