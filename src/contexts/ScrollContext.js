"use client";

import { createContext, useContext } from "react";

const ScrollContext = createContext(null);

export function useScrollSmootherInstance() {
  return useContext(ScrollContext);
}

export default ScrollContext;
