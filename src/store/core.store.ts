import type { StateCreator } from 'zustand';

export type CoreSlice = {
  isBeyondWelcome: boolean;
  isPageTransitioning: boolean;
  setIsBeyondWelcome: (isBeyondWelcome: boolean) => void;
  setIsPageTransitioning: (isPageTransitioning: boolean) => void;
};

export const createCoreSlice: StateCreator<CoreSlice, [], [], CoreSlice> = (
  set,
) => ({
  isBeyondWelcome: true,
  isPageTransitioning: false,
  setIsBeyondWelcome: (isBeyondWelcome: boolean) => set({ isBeyondWelcome }),
  setIsPageTransitioning: (isPageTransitioning: boolean) =>
    set({ isPageTransitioning }),
});
