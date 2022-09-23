import React, { FC } from "react";

import { TodoProvider } from "src/contexts/Todo";

interface Props {
  children: React.ReactNode;
}

const AppProviders: FC<Props> = ({ children }) => (
  <TodoProvider>{children}</TodoProvider>
);

export default AppProviders;
