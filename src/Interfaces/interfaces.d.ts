import React from "react";

export interface ILayout {
  children: React.ReactNode;
}

export interface IMenu {
  lable: string;
  route: string;
  isActive: boolean;
}
