import React, { createContext, useEffect, useState, useContext } from "react";
import { API } from "aws-amplify";
import * as queries from "src/graphql/queries";

import { TypeNote } from "src/types/TypeNote";

interface ContextTodo {
  items: TypeNote[];
  refetch: () => Promise<void>;
}

interface Props {
  children: React.ReactNode;
}

export const TodoContext = createContext<ContextTodo | undefined>(undefined);

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todo, setTodo] = useState<TypeNote[]>([]);

  const refetch = async (): Promise<void> => {
    // TODO: improve GraphQL result typing
    try {
      const result: any = await (API.graphql({
        query: queries.listTodos,
      }) as Promise<TypeNote[]>);
      result && setTodo(result.data.listTodos.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TodoContext.Provider value={{ items: todo, refetch }}>
      {todo && children}
    </TodoContext.Provider>
  );
};

export const useContextTodo = (): ContextTodo => {
  const value = useContext(TodoContext);
  if (value === undefined) {
    throw new Error("useContextTodo must be used within a ConfigProvider");
  }
  return value;
};
