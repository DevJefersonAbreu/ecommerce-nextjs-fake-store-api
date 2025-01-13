"use client"

import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin-right: 12px;
`;

const IconShape = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  position: relative;
  overflow: hidden;
`;

const IconInner = styled.div<{ color: string }>`
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  background-color: ${props => props.color};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`;

const IconDot = styled.div`
  position: absolute;
  width: 20%;
  height: 20%;
  background-color: var(--secondary);
  border-radius: 50%;
  top: 40%;
  left: 40%;
`;

const LogoText = styled.span<{ color: string }>`
  font-size: 24px;
  font-weight: 800;
  color: ${props => props.color};
  letter-spacing: -1px;
  position: relative;
`;

const AccentLetter = styled.span<{ color: string }>`
  color: ${props => props.color};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${props => props.color};
  }
`;

const Logo: React.FC<LogoProps> = ({ 
  primaryColor = 'var(--primary)', 
  secondaryColor = 'var(--white)',
  accentColor = 'var(--secondary)'
}) => {
  return (
    <LogoContainer>
      <LogoIcon>
        <IconShape color={primaryColor}>
          <IconInner color={secondaryColor} />
          <IconDot />
        </IconShape>
      </LogoIcon>
      <LogoText color={primaryColor}>
        e<AccentLetter color={accentColor}>c</AccentLetter>ommerce
      </LogoText>
    </LogoContainer>
  );
};

export default Logo;

