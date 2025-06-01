import { Input } from "./Input";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/UI/Input",
  component: Input,
};

export const Default = {
  render: () => (
    <Input label="Exemplo" type="text" placeholder="Digite algo..." />
  ),
};

export const WithIcon = {
  render: () => (
    <Input
      label="Exemplo com Ícone"
      type="text"
      placeholder="Digite algo..."
      icon={<span>🔍</span>}
      iconInteractive={true}
    />
  ),
};

export const WithError = {
  render: () => (
    <Input label="Exemplo com Erro" type="text" placeholder="Digite algo..." />
  ),
};
