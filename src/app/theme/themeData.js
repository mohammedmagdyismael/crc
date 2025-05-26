import styled, { css } from 'styled-components';

const sizes = {
  maxTablet: 1023,
  maxPhone: 767,
};

const colors = {
  grey000: '#D7DCE3',
  grey001: '#E5E5E5',
  grey002: '#7E7E7E',
  grey003: '#E3E6EA',
  grey004: '#E6ECF5',
  grey005: '#9D9D9D',
  grey006: '#C9CBCE',
  grey100: '#F1F4F6',
  grey200: '#EEF0F2',
  grey300: '#9C9C9C',
  grey400: '#9C9C9C',
  grey500: '#666666',
  grey600: '#484848',
  black: '#474747',
  blueMain: '#0070CD',
  blueSecondary: '#3B92DF',
  blueDark: '#005FAE',
  blueMedium: '#197ED2',
  blueLight: '#E5F1FF',
  blueSkyDark: '#2DABD3',
  blueSky: '#7DC3FE',
  redMain: '#DB3226',
  redDark: '#DB3834',
  redLight: '#FFEAE9',
  greenMain: '#31A636',
  greenDark: '#2CBE8A',
  greenLight: '#EAF6EB',
  orangeMain: '#FFB624',
  orangeDark: '#FF9F0F',
  orangeLight: '#FFF0D3',
  purpleMain: '#904D96',
  purpleLight: '#E5E1F1',
  purpleDark: '#5334AE',
  white: '#FFFFFF',
  rgb: {
    blue8PercentOpacity: '44 53 68 / 8%',
    black50PercentOpacity: '0 0 0 / 50%',
    black16PercentOpacity: '0 0 0 / 16%',
  },
};

const media = {};
media.phone = (...args) => css`
  @media only screen and (max-width: ${sizes.maxPhone}px) {
    ${css(...args)}
  }
`;
media.tablet = (...args) => css`
  @media only screen and (min-width: ${sizes.maxPhone +
    1}px) and (max-width: ${sizes.maxTablet}px) {
    ${css(...args)}
  }
`;
media.desktop = (...args) => css`
  @media only screen and (min-width: ${sizes.maxTablet + 1}px) {
    ${css(...args)}
  }
`;
media.phoneAndTablet = (...args) => css`
  @media only screen and (max-width: ${sizes.maxTablet + 1}px) {
    ${css(...args)}
  }
`;
media.desktopAndTablet = (...args) => css`
  @media only screen and (min-width: ${sizes.maxPhone + 1}px) {
    ${css(...args)}
  }
`;

const typography = {};
typography.LargeTitleTypography = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height 28px;
`;
typography.MediumTitleTypography = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height 26px;
`;
typography.TitleOneBoldTypography = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height 24px;
`;
typography.TitleOneRegularTypography = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height 24px;
`;
typography.TitleTwoTypography = styled.h2`
  font-size: 14px;
  font-weight: 700;
  line-height 22px;
`;
typography.BodyTextOneBoldTypography = styled.p`
  font-size: 13px;
  font-weight: 700;
  line-height 20px;
`;
typography.BodyTextOneRegularTypography = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height 20px;
`;
typography.BodyTextTwoBoldTypography = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height 18px;
`;
typography.BodyTextTwoRegularTypography = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height 18px;
`;
typography.BodyTextThreeBoldTypography = styled.p`
  font-size: 11px;
  font-weight: 700;
  line-height 16px;
`;
typography.BodyTextThreeRegularTypography = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height 16px;
`;
typography.BodyTextFourBoldTypography = styled.p`
  font-size: 10px;
  font-weight: 700;
  line-height 16px;
`;
typography.BodyTextFourRegularTypography = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height 16px;
`;

const themeData = {
  colors,
  media,
  typography,
};

export default themeData;
