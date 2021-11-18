import styled from "styled-components";
import { Row, Col, Button } from "antd";

interface Props {
  $color?: any;
  $size?: any;
  $backColor?: any;
  $weight?: any;
}
export const Wrapper = styled(Row)`
  min-height: 100vh;
  padding: 0 90px;
  @media screen and (max-width: 576px) {
    padding: 0 10px;
  }
`;

export const Text = styled.span<Props>`
  color: ${({ $color }) => $color || "#333"};
  font-size: ${({ $size }) => $size || "16px"};
  font-weight: ${({ $weight }) => $weight || "500"};
  padding: 8px 0;
  display: block;
`;
export const ImageWrapper = styled(Col)``;
export const Info = styled(Col)`
  padding-left: 50px;
  @media screen and (max-width: 992px) {
    padding-left: 0px !important;
  }
`;
export const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
export const ButtonFiled = styled(Button)<Props>`
  background-color: ${({ $backColor }) => $backColor || ""};
  color: ${({ $color }) => $color || "white"};
  padding: 20px 40px;
  display: flex;
  align-items: center;
  border-radius: 3px;
`;
