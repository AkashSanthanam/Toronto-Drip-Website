"use client";

import { signOut } from "next-auth/react";
import React from "react";

export const Signout = () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      Signout
    </button>
  );
};
