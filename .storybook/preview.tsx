import type { Preview } from "@storybook/nextjs";
import { AccountProvider } from "../src/components/context/AccountContext";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => <AccountProvider>{Story()}</AccountProvider>],
};

export default preview;
