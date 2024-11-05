import styled from 'styled-components';

export const LargeText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const MediumText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const SmallDetailText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small_detail};
`;
