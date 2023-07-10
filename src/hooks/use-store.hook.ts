import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';

import { createCoreSlice } from '#store/core.store';

import type { CoreSlice } from '#store/core.store';

export const useStore = create<CoreSlice>()(
  devtools(
    subscribeWithSelector((...a) => ({ ...createCoreSlice(...a) })),
    { name: 'main-store' },
  ),
);
