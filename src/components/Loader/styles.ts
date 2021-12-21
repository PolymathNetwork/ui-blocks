import styled, { keyframes } from 'styled-components';
import { LoaderProps } from './types';
import { Box } from '../Box';

const wave = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }

  30% {
    transform: translateY(-15px);
  }
`;

export const LoadingDots = styled.div<LoaderProps>`
  position: relative;
  text-align: center;
  width: 48px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  background: ${({ theme }) => theme.COLOR.brandLightest};
  border-radius: 50%;
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 2px;
    margin-top: 21px;
    background-color: ${({ theme }) => theme.COLOR.brandMain};
    animation: ${wave} 1.3s linear infinite;
  }
  span:nth-child(2) {
    animation-delay: -1.1s;
  }
  span:nth-child(3) {
    animation-delay: -0.9s;
  }
`;

export const LoadingDotsOutlined = styled.div<LoaderProps>`
  position: relative;
  text-align: center;
  width: 48px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 2px;
    margin-top: 21px;
    animation: ${wave} 1.3s linear infinite;
    border: 2px solid ${({ theme }) => theme.COLOR.brandMain};
  }
  span:nth-child(2) {
    animation-delay: -1.1s;
  }
  span:nth-child(3) {
    animation-delay: -0.9s;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

const mask = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(21, 41, 53, 0.3);
  z-index: 999;
`;

export const Wrapper = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 9999;
  background-color: ${({ theme }) => theme.COLOR.light};
  border-radius: ${({ theme }) => theme.RADIUS.m};
  box-shadow: ${({ theme }) => theme.SHADOW.s};
  padding: 40px 40px;
`;

export const Loader = styled.div<LoaderProps>`
  margin: 0 auto;
  width: ${(props: any) => (props.small ? '32px' : '64px')};
  height: ${(props: any) => (props.small ? '32px' : '64px')};
  animation: 1s ${spin} infinite cubic-bezier(0.255, 0.2, 0.315, 0.455);
  span,
  span:before {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props: any) => (props.small ? '16px' : '32px')};
    height: ${(props: any) => (props.small ? '32px' : '64px')};
    overflow: hidden;
    box-sizing: border-box;
    transform-origin: 100% 50%;
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
  }
  span:before {
    content: '';
    border-width: ${(props: any) => (props.small ? '4px' : '5px')};
    border-color: ${({ theme }) => theme.COLOR.brandMain};
    border-style: solid;
    border-right-color: transparent;
    animation: 4s ${mask} infinite linear;
  }
  span:nth-child(1) {
    transform: rotate(180deg);
  }
  span:nth-child(2) {
    transform: rotate(360deg);
    &:before {
      animation-delay: 1s;
    }
  }
`;
