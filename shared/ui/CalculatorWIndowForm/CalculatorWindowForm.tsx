"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Input } from "..";
import { ButtonVariant } from "../Button/types";
import { IWindowValue } from "../CalculatorBrickForm/CalculatorBrickForm";

import window_icon from "@/shared/assets/icons/window_icon.svg";

import cls from "./CalculatorWindowForm.module.scss";

enum InputValue {
  height = "height",
  width = "width",
  count = "count",
}

interface CalculatorWindowFormProps {
  onWindowSubmit: (windowData: IWindowValue) => void;
}

const initialState: Omit<IWindowValue, "id"> = {
  width: "",
  height: "",
  count: "",
};

export const CalculatorWindowForm: React.FC<CalculatorWindowFormProps> = ({
  onWindowSubmit,
}) => {
  const [windowValue, setWindowValue] = useState(initialState);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: InputValue
  ) => {
    const nextState = { ...windowValue, [key]: e.target.value };
    setWindowValue(nextState);
  };

  const onSubmit = () => {
    const data = {
      id: Date.now(),
      ...windowValue,
    };

    if (windowValue.height || windowValue.width) {
      onWindowSubmit(data);
    }

    setWindowValue(initialState);
  };

  return (
    <div className={cls.window_form}>
      <div className={cls.title_container}>
        <Image src={window_icon} alt="Иконка Кирпича" className={cls.image} />
        Добавить окно
      </div>
      <article className={cls.window_box}>
        <div className={cls.input_container}>
          <p className={cls.input_title}>Параметры окон (см)</p>
          <div className={cls.input_box}>
            <Input
              type="number"
              placeholder="Длина"
              value={windowValue.height}
              onChange={(e) => onChange(e, InputValue.height)}
            />
            X
            <Input
              type="number"
              placeholder="Ширина"
              value={windowValue.width}
              onChange={(e) => onChange(e, InputValue.width)}
            />
          </div>
        </div>
        <div className={cls.input_container}>
          <p className={cls.input_title}>Количество окон</p>
          <div className={cls.input_box}>
            <Input
              type="number"
              placeholder="Количество"
              value={windowValue.count}
              onChange={(e) => onChange(e, InputValue.count)}
            />
          </div>
        </div>
      </article>
      <Button
        type="button"
        variant={ButtonVariant.secondary}
        style={{ alignSelf: "flex-end" }}
        className={cls.button}
        onClick={onSubmit}
      >
        Добавить еще окно
      </Button>
    </div>
  );
};
