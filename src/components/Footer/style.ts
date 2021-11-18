import styled from "styled-components";
import { Col, Row } from "antd";

interface Props {
  $color?: any;
  $size?: any;
  $weight?: any;
}

export const Footer = styled(Row)`
  max-height: 100%;
  padding: 0 90px;
  background-color: #ffead6;
  //   @media screen and (max-width: 768px) {
  //     padding: 0 10px;
  //     display: flex;
  //   }
`;
export const ColFiled = styled(Col)`
  height: 200px;
  background-color: #ffead6;
  padding: 20px 0;
  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
export const Logo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;
export const Text = styled.span<Props>`
  color: ${({ $color }) => $color || "#333"};
  font-size: ${({ $size }) => $size || "16px"};
  font-weight: ${({ $weight }) => $weight || "500"};
  padding: 5px 0;
  display: block;
`;
