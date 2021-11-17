import styled from "styled-components";
interface Props {
  $color?: any;
  $size?: any;
}
export const Wrapper = styled.h1`
  min-height: 100vh;
  padding: 0 90px;
`;
export const Text = styled.h1<Props>`
  color: ${({ $color }) => $color || "#000000"};
  font-size: ${({ $size }) => $size || "16px"};
`;
export const ImageWrapper = styled.div``;
export const Info = styled.div``;
export const Image = styled.img``;
