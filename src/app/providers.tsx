"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// MUI requires a consistent Emotion cache for SSR
const muiCache = createCache({ key: "mui", prepend: true });

export function MuiProvider({ children }: { children: React.ReactNode }) {
  return <CacheProvider value={muiCache}>{children}</CacheProvider>;
}
