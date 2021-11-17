import React from "react";
import { Card, Image } from "antd";
import Link from "next/link";
import S from "./style.module.scss";
export interface IAppProps {
  id: any;
  name: string;
  image1: string;
  description: string;
  price: number;
}

export default function App(props: IAppProps) {
  return (
    <Card className={S.Cart}>
      <Image src={props.image1} width="100%" />
      <div className={S.Description}>
        <Link href={`/products/${props.id}`}>
          <div>
            <div className={S.Name}>{props.name}</div>
            <div className={S.Price}>${props.price}</div>
          </div>
        </Link>
      </div>
    </Card>
  );
}
