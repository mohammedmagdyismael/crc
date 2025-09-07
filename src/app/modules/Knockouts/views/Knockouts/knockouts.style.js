// knockouts.style.js

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
`;

export const KnockOutsImg = styled.img`
    width: 70%;
    margin: auto;
`;

export const RefreshBar = styled.div`
  width: 83%;
  margin: -52px auto 12px auto;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
  position: relative;
  z-index: 2;
`;

export const RefreshButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 9999px;
  border: 2px solid #ffffff;
  background: red;
  color: #ffffff;
  cursor: pointer;
  font-weight: 700;
  font-size: 17px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.05s ease;
  pointer-events: auto;

  &:hover {
    background: #f0b73a;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(1px);
  }

  .icon {
    display: inline-block;
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: rotate(180deg);
  }
`;