import React from 'react';
import { Card, Image } from 'antd';
import S from './style.module.scss';
export interface IAppProps {
  name: string;
  image1: string;
  description: string;
  price: number;
}

export default function App(props: IAppProps) {
  return (
    <Card className={S.Cart}>
      <Image src={props.image1} />
      <div className={S.Description}>
        <div className={S.Name}>{props.name}</div>
        <div className={S.Price}>${props.price}</div>
      </div>
    </Card>
  );
}
