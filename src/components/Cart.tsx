import React from "react";
import { useState } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Badge } from "@nextui-org/react";

export const Cart = () => {
  return (
    <Badge
      content="3"
      color="secondary"
      variant="shadow"
      size="sm"
      showOutline={false}
    >
      <RiShoppingCart2Fill size={20} />{" "}
    </Badge>
  );
};
