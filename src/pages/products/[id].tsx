import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Row, Col, Divider } from "antd";
import productsApi from "../../services/apis/product";
import { useRouter } from "next/router";
export interface IAppProps {}

export default function App(props: IAppProps) {
  const [productDetail, setProductDetail] = useState();
  const route = useRouter();

  useEffect(() => {
    const getData = async () => {
      const id: any = await route.query.id;
      if (id) {
        const { data } = await productsApi.productDetail(id);
        setProductDetail(data);
      }
    };
    getData();
  }, []);

  console.log(productDetail);
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image></S.Image>
        <S.Image></S.Image>
      </S.ImageWrapper>
      <S.Info>
        <S.Text></S.Text>
        <S.Text></S.Text>
        <S.Text></S.Text>
      </S.Info>
    </S.Wrapper>
  );
}
