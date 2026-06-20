"use client";

import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

const ZERO_VALUE: CountdownValue = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isPast: false,
};

function calculate(targetISO: string): CountdownValue {
  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
}

/**
 * Returns a live countdown to targetISO.
 * Starts with a static ZERO_VALUE on the server/first render to avoid
 * SSR/client hydration mismatches (Date.now() differs between server
 * render time and client render time), then syncs to the real value
 * immediately after mount.
 */
export function useCountdown(targetISO: string): CountdownValue {
  const [value, setValue] = useState<CountdownValue>(ZERO_VALUE);

  useEffect(() => {
    setValue(calculate(targetISO));
    const interval = setInterval(() => {
      setValue(calculate(targetISO));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetISO]);

  return value;
}
