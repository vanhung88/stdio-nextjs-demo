import React, { useEffect, useState } from "react";
import * as S from "./style";
import productsApi from "../../services/apis/product";
import { useRouter } from "next/router";
export interface IProduct {
  image1: string;
  image2: string;
  name: string;
  price: number;
  description: string;
  category: string;
  countInStock?: object;
}

export default function App(props: IProduct) {
  const [productDetail, setProductDetail] = useState<any>();
  const route = useRouter();
  const id: any = route.query.id;

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const { data } = await productsApi.productDetail(id);
        setProductDetail(data);
      }
    };
    getData();
  }, [id]);

  console.log("productDetail" + productDetail);
  return (
    <S.Wrapper style={{ marginTop: "60px" }}>
      {productDetail && (
        <>
          <S.ImageWrapper lg={12} sm={24} xs={24}>
            <S.Image src={productDetail.image1}></S.Image>
            <S.Image src={productDetail.image2}></S.Image>
          </S.ImageWrapper>
          <S.Info lg={12} sm={24} xs={24}>
            <S.Text $size="25px" $weight="800">
              {productDetail.name}
            </S.Text>
            <S.Text $size="16px">Category: {productDetail.category}</S.Text>
            <S.Text $size="16px">Price: ${productDetail.price}</S.Text>
            <S.Text $size="14px" $color="#33333394">
              {productDetail.description}
            </S.Text>
            <S.ButtonFiled style={{ marginTop: "20px" }} $backColor="#333">
              Add To Cart
            </S.ButtonFiled>
          </S.Info>
        </>
      )}
    </S.Wrapper>
  );
}
