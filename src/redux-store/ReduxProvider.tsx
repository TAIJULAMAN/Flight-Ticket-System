"use client";

// React Imports
import type { ReactNode } from "react";

// Third-party Imports
import { Provider } from "react-redux";

import { persistor, store } from "@/redux-store";
import { ChildrenType } from "@/@core/types";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }: ChildrenType) => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
