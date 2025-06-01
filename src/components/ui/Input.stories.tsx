"use client";

import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react";
import { Envelope, Calendar } from "@phosphor-icons/react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Endereço de e-mail",
    type: "email",
    placeholder: "Digite o seu e-mail",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Endereço de e-mail",
    type: "email",
    placeholder: "Digite o seu e-mail",
    icon: <Envelope size={20} />,
  },
};

export const WithError: Story = {
  args: {
    label: "Endereço de e-mail",
    type: "email",
    placeholder: "Digite o seu e-mail",
    //   error: { message: 'E-mail inválido' },
  },
};

export const DateInput: Story = {
  args: {
    label: "Data",
    type: "date",
    icon: <Calendar size={20} />,
  },
};
