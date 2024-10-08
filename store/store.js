import { create } from "zustand";

const useClientStore = create((set, get) => ({
  clientStatus: {
    isLogin: false,
    email: null,
    loadingState: "pending",
  },
  setClientStatus: (setValue) =>
    set((state) => ({
      clientStatus: { ...state.clientStatus, ...setValue },
    })),
  getClientStatus: () => get().clientStatus,
}));

export default useClientStore;
