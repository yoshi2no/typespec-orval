import { PetsPage } from "./pets";
import type { Meta, StoryObj } from "@storybook/react";
import { getPetsListMockHandler } from "./petstore";

const meta = {
  title: "Example/PetsPage",
  component: PetsPage,
  parameters: {
    msw: {
      handlers: [getPetsListMockHandler()],
    },
  },
} satisfies Meta<typeof PetsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
