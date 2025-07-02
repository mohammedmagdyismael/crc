import styled from 'styled-components';

export const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(30, 34, 45, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    backdrop-filter: blur(2px);
`;

export const PopupContainer = styled.div`
    background: linear-gradient(135deg, #fff 80%, #e3e9f7 100%);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    padding: 32px;
    border-radius: 18px;
    position: relative;
    min-width: 340px;
    max-width: 95vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e3e9f7;
    transition: box-shadow 0.2s;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 16px;
    background: rgba(0,0,0,0.05);
    border: none;
    font-size: 28px;
    cursor: pointer;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    color: #333;
    transition: background 0.2s;
    &:hover {
        background: #f2f2f2;
    }
`;

export const AssetWrapper = styled.div`
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    min-width: 200px;
    background: #f7f9fc;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    padding: 12px;
    max-height: 60vh;
    max-width: 70vw;
`;

export const Controls = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
    margin-top: 8px;
`;

export const NavButton = styled.button`
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    background: ${({ disabled, reverse }) =>
        disabled
            ? '#e3e9f7'
            : reverse
            ? 'linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)'
            : 'linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%)'};
    color: ${({ disabled }) => (disabled ? '#aaa' : '#fff')};
    font-weight: 600;
    font-size: 16px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    box-shadow: ${({ disabled, reverse }) =>
        disabled
            ? 'none'
            : reverse
            ? '0 2px 8px rgba(108, 99, 255, 0.12)'
            : '0 2px 8px rgba(252, 92, 125, 0.12)'};
    transition: background 0.2s;
`;

export const Counter = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: #444;
    letter-spacing: 1px;
    min-width: 60px;
    text-align: center;
`;
