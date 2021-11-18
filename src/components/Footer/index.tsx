import React from "react";
import * as S from "./style";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <S.Footer style={{ marginTop: "40px" }}>
      <S.ColFiled lg={8} sm={12} xs={24}>
        <S.Logo src="/icons/Logo.svg"></S.Logo>
        <S.Text $size="14px" $color="#333333a8">
          184 Main Rd E, St Albans VIC 3021, Australia
        </S.Text>
        <S.Text $size="14px" $color="#333333a8">
          @company@gmail.com
        </S.Text>
        <S.Text $size="14px" $color="#333333a8">
          phone:012301283
        </S.Text>
      </S.ColFiled>
      <S.ColFiled lg={8} sm={12} xs={24}>
        <S.Text $size="20px" $color="#333333a6" $weight="700">
          ABOUT
        </S.Text>
        <S.Text $size="14px" $color="#333333a8">
          184 Main Rd E, St Albans VIC 3021, Australia
        </S.Text>
        <S.Text $size="14px" $color="#333333a8">
          @company@gmail.com
        </S.Text>
        <S.Text $size="14px" $color="#333333a8">
          phone:012301283
        </S.Text>
      </S.ColFiled>
      <S.ColFiled lg={8} sm={12} xs={24}>
        <S.Text $size="20px" $color="#333333a6" $weight="700">
          CONTACT
        </S.Text>
        <S.Text $size="14px" $color="#333333a8">
          184 Main Rd E, St Albans VIC 3021, Australia
        </S.Text>
        <S.Text $size="14px" $color="#333333a8">
          @company@gmail.com
        </S.Text>
        <S.Text $size="14px" $color="#333333a8">
          © 2021 DEMO FROM STDIO
        </S.Text>
      </S.ColFiled>
    </S.Footer>
  );
}
