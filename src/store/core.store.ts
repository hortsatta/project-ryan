import type { StateCreator } from 'zustand';

export type CoreSlice = {
  isBeyondWelcome: boolean;
  scrollY: number;
  setIsBeyondWelcome: (isBeyondWelcome: boolean) => void;
  setScrollY: (scrollY: number) => void;
};

export const createCoreSlice: StateCreator<CoreSlice, [], [], CoreSlice> = (
  set,
) => ({
  isBeyondWelcome: true,
  scrollY: 0,
  setIsBeyondWelcome: (isBeyondWelcome: boolean) => set({ isBeyondWelcome }),
  setScrollY: (scrollY: number) => set({ scrollY }),
});
