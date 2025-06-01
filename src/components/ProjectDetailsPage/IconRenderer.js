"use client";

import React from "react";
import {
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineCubeTransparent,
  HiOutlineLockClosed,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineCreditCard,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineChatAlt2,
  HiOutlineLink,
} from "react-icons/hi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiStripe,
  SiJsonwebtokens,
  SiTailwindcss,
  SiNextdotjs,
  SiOpenai,
  SiTypescript,
  SiLangchain,
} from "react-icons/si";

const iconLibraries = {
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineCubeTransparent,
  HiOutlineLockClosed,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineCreditCard,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineChatAlt2,
  HiOutlineLink,
  HiOutlinePaintBrush,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiStripe,
  SiJsonwebtokens,
  SiTailwindcss,
  SiNextdotjs,
  SiOpenai,
  SiTypescript,
  SiLangchain,
};

const IconRenderer = ({ iconName, className }) => {
  if (!iconName) {
    return null;
  }

  const IconComponent = iconLibraries[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in provided libraries.`);
    return null; // Or a default fallback icon
  }

  return <IconComponent className={className} />;
};

export default IconRenderer;
