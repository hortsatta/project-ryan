import type { StateCreator } from 'zustand';

export type CoreSlice = {
  isBeyondWelcome: boolean;
  setIsBeyondWelcome: (isBeyondWelcome: boolean) => void;
};

export const createCoreSlice: StateCreator<CoreSlice, [], [], CoreSlice> = (
  set,
) => ({
  isBeyondWelcome: true,
  setIsBeyondWelcome: (isBeyondWelcome: boolean) => set({ isBeyondWelcome }),
});
