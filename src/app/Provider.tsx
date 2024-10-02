"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextUIProvider>{children} </NextUIProvider>;
}
