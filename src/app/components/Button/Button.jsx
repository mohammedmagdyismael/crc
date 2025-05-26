import Loader from "app/components/Loader";
import { ButtonContainer, Label } from './Button.style';

const Button = ({
    label,
    isLoading,
    onClick,
    disabled,
    extendStyles,
    extendStyleLoader
}) => {

    const onClickHandler = () => {
        if (!isLoading && !disabled && onClick) onClick();
    }

    return (
        <ButtonContainer isDisabled={isLoading || disabled} extendStyles={extendStyles} onClick={() => onClickHandler()}>
            {isLoading ? (
                <div style={{ margin: 'auto', padding: '6% 0' }}>
                    <Loader extendStyle={extendStyleLoader} width={20} height={20} thickness={5} />
                </div>
            ) : (
                <Label>{label}</Label>
            )}
            
        </ButtonContainer>
    );
};

export default Button;