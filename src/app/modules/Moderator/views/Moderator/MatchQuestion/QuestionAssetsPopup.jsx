import {
    PopupOverlay,
    PopupContainer,
    CloseButton,
    AssetWrapper,
    Controls,
    NavButton,
    Counter
} from './QuestionAssetsPopup.style';

const renderAsset = (url) => {
    if (!url) return null;
    const ext = url.split('.').pop().toLowerCase();
    if (ext === 'mp4') {
        return (
            <video width="100%" height="auto" controls>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        );
    }
    if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) {
        return <img src={url} alt="question asset" style={{ maxWidth: '100%', maxHeight: '60vh' }} />;
    }
    return <div>Unsupported file type</div>;
};

const QuestionAssetsPopup = ({
    open,
    assets,
    currentIndex,
    onClose,
    onPrev,
    onNext
}) => {
    if (!open || !assets || assets.length === 0) return null;
    return (
        <PopupOverlay onClick={onClose}>
            <PopupContainer onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose} aria-label="Close">×</CloseButton>
                <AssetWrapper>
                    {renderAsset(assets[currentIndex])}
                </AssetWrapper>
                <Controls>
                    <NavButton
                        onClick={onPrev}
                        disabled={currentIndex === 0}
                        reverse
                    >Previous</NavButton>
                    <Counter>{currentIndex + 1} / {assets.length}</Counter>
                    <NavButton
                        onClick={onNext}
                        disabled={currentIndex === assets.length - 1}
                    >Next</NavButton>
                </Controls>
            </PopupContainer>
        </PopupOverlay>
    );
};


export default QuestionAssetsPopup;
