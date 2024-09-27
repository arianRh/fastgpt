import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const accountInfoStore = (set) => ({
  AccountInformation: {},
  setAccountInformation: (task) => {
    set({
      AccountInformation: task,
    });
  },
  reset: () => set(null),
});

const useAccountInfoStore = create(
  devtools(persist(accountInfoStore, { name: "AccountInformation" }))
);

export default useAccountInfoStore;
