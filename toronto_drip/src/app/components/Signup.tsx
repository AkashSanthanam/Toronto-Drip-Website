"use client";

import { signIn } from "next-auth/react";
import React from "react";

export const Signup = () => {
  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      Signup
    </button>
  );
};
