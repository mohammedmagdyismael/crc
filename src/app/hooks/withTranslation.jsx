import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from 'app/components/Loader';
import { LoaderContainer, LoaderInnerContainer, extendStyleLoader } from './withTranslation.style';

export const withTranslation = WrappedComponent => {
  const WithTranslation = props => {
    const [localization, setLocalization] = useState(null); // Localization state.
    const context = useSelector(state => state.common.context);

    useEffect(() => {
      if (context) {
        fetch(`/localization/en/${context}.json`)
          .then(response => response.json())
          .then(locale => {
            setLocalization(locale);
          })
          .catch(error => {
            console.error('Error fetching localization:', error);
          });
      } else {
        setLocalization(null); // Reset localization if context is missing.
      }
    }, [context]);


    return (
      <>
       {
        localization ? 
          (
            <WrappedComponent {...props} localization={localization} />
          ) : (
            <LoaderContainer>
              <LoaderInnerContainer>
                <Loader extendStyle={extendStyleLoader} width={20} height={20} thickness={5} />
              </LoaderInnerContainer>
            </LoaderContainer>
          )
       }
      </>
    )
    ;
  };

  return WithTranslation;
};
