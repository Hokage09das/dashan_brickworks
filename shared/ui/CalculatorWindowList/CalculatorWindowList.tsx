"use client";

import React from "react";

import cls from "./CalcultorWindowList.module.scss";
import Image from "next/image";

import window_photo from "@/shared/assets/images/window.png";
import delete_icon from "@/shared/assets/icons/delete_icon.svg";
import { IWindowValue } from "../CalculatorBrickForm/CalculatorBrickForm";

interface CalculatorWindowListProps {
  window: IWindowValue[];
  onDeleteWindow: (id: number) => void;
}
export const CalculatorWindowList: React.FC<CalculatorWindowListProps> = ({
  window,
  onDeleteWindow,
}) => {
  return (
    <ul className={cls.window_list_container}>
      {window.map((item) => (
        <li className={cls.window_list}>
          <Image src={window_photo} alt="Фото окна" className={cls.window} />
          <p className={cls.count}>{item.count}X</p>
          <p className={cls.width}>{item.width}cm</p>
          <p className={cls.height}>{item.height}cm</p>
          <Image
            src={delete_icon}
            alt="Кнопка удаления окна"
            className={cls.delete_icon}
            onClick={() => onDeleteWindow(item.id)}
          />
        </li>
      ))}
    </ul>
  );
};
