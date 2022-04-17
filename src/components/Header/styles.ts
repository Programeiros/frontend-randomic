import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 100px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.primary};
`;

export const NextImage = styled(Image).attrs<ImageProps>(
  ({ src, alt, width, height }) => ({
    src, alt, width, height
  })
)`
  width: 100px;
`;

