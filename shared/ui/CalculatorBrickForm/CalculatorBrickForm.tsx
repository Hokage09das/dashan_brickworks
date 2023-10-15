"use client";

import Image from "next/image";
import React, { useState, InputHTMLAttributes } from "react";

import brick_icon from "@/shared/assets/icons/brick_icon.svg";

import cls from "./CalculatorBrickForm.module.scss";
import {
  Button,
  CalculatorWindowForm,
  CalculatorWindowList,
  Checkbox,
  Input,
} from "..";
import { ButtonVariant } from "../Button/types";

export interface IWindowValue {
  height: number | string;
  width: number | string;
  count: number | string;
  id: number;
}

export const CalculatorBrickForm = () => {
  const [checked, setChecked] = useState(false);
  const [window, setWindow] = useState<IWindowValue[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const onDeleteWindow = (id: number) => {
    const filteredWindow = window.filter((item) => item.id !== id);
    setWindow(filteredWindow);
  };
  return (
    <>
      <form className={cls.brick_form}>
        <div className={cls.title_container}>
          <Image src={brick_icon} alt="Иконка Кирпича" className={cls.image} />
          Калькулятор кирпича
        </div>
        <article className={cls.brick_box}>
          <div className={cls.input_container}>
            <p className={cls.input_title}>Марка и цвет кирпича</p>
            <div className={cls.input_box}>
              <Input
                disabled
                defaultValue="Облицивочный красный"
                style={{ textAlign: "center" }}
              />
            </div>
          </div>
          <div className={cls.input_container}>
            <p className={cls.input_title}>
              Укажите периметр наружных стен (м):
            </p>
            <div className={cls.input_box}>
              <Input type="number" placeholder="Длина" />
              X
              <Input type="number" placeholder="Ширина" />
            </div>
          </div>
          <div className={cls.input_container}>
            <p className={cls.input_title}>
              Укажите толщину кладки (0.5 — 3,5 кирпича):
            </p>
            <div className={cls.input_box}>
              <Input />
            </div>
          </div>
          <div className={cls.input_container}>
            <p className={cls.input_title}>Рассчитать с раствором (10 мм):</p>
            <div className={cls.input_box_checkbox}>
              <Checkbox checked={checked} onChange={onChange} />
            </div>
          </div>
        </article>
        <CalculatorWindowForm
          onWindowSubmit={(windowData) => setWindow([...window, windowData])}
        />
        <CalculatorWindowList window={window} onDeleteWindow={onDeleteWindow} />

        <Button
          variant={ButtonVariant.primary}
          className={cls.submit_btn}
          style={{
            alignSelf: "flex-end",
            marginTop: "50px",
          }}
        >
          Рассчитать
        </Button>
      </form>
    </>
  );
};
