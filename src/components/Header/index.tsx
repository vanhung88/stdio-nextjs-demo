import React from "react";
import Image from "next/image";
import S from "./style.module.scss";
import { ArrowDown2, ShoppingCart, User, SearchNormal1 } from "iconsax-react";
import Link from "next/link";
export interface IAppProps {}

const Header = (props: IAppProps) => {
  return (
    <div className={S.wrapper}>
      <div className={S.Header}>
        <div className={S.Left}>
          <div className={S.Left_Text}>
            SHOP <ArrowDown2 size="16" />
          </div>
          <div className={S.Left_Text}>
            PRODUCT <ArrowDown2 size="16" />
          </div>
          <div className={S.Left_Text}>
            SALE <ArrowDown2 size="16" />
          </div>
          <div className={S.Left_Text} style={{ margin: 0 }}>
            ABOUT <ArrowDown2 size="16" />
          </div>
        </div>
        <Link href="/">
          <img
            style={{ cursor: "pointer" }}
            className={S.Logo}
            src="/icons/Logo.svg"
            width="100px"
            height="100px"
          />
        </Link>
        <div className={S.Right}>
          <SearchNormal1 className={S.Right_Logo} size="26" />
          <ShoppingCart
            className={S.Right_Logo}
            size="26"
            style={{ marginLeft: "15px" }}
          />
          <User
            className={S.Right_Logo}
            size="26"
            style={{ marginLeft: "15px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
