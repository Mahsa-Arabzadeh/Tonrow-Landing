"use strict";

/**
 * Contains header data tailored for the public role, including logo information and navigation links.
 *
 * @type {Array<Object>}
 */
const publicHeaderData = [
  // Logo configuration and link
  {
    imgAddress: "./public/images/Tonrow.svg",
    logoLink: "#",
  },
  // Navigation links for public role
  {
    linkText: "خانه",
    LinkAddress: "#home",
  },
  {
    linkText: "درخواست سفیر",
    LinkAddress: "#home",
  },
  {
    linkText: "درخواست خرید",
    LinkAddress: "#home",
  },
  // Button for login/register action
  {
    content: "ورود / ثبت نام",
    size: "medium",
    statues: "primaryFill",
    type: "button",
    class: "btn-primary",
    anchorLink: "#dashboard",
  },
];

/**
 * Contains header data customized for the safir role, including logo, navigation links, and action buttons.
 *
 * @type {Array<Object>}
 */
const safirHeaderData = [
  // Logo and notification button
  {
    imgAddress: "./public/images/Tonrow.svg",
    logoLink: "#",
    size: "extraSmall",
    statues: "primaryOutLine",
    type: "button",
    class: "custom-class",
    anchorLink: "#",
    iconStart: "./images/notification.svg",
  },
  // Navigation links for safir role
  {
    linkText: "خانه",
    LinkAddress: "#home",
  },
  {
    linkText: "داشبورد",
    LinkAddress: "#home",
  },
  {
    linkText: "درخواست ها",
    LinkAddress: "#home",
  },
  {
    linkText: "کلاب من",
    LinkAddress: "#home",
  },
  {
    linkText: "اطلاعیه",
    LinkAddress: "#home",
  },
  // Button for user settings
  {
    size: "extraSmall",
    statues: "primaryOutLine",
    type: "button",
    class: "custom-class",
    anchorLink: "#MyRBN",
    iconStart: "./images/setting-2.svg",
  },
];

/**
 * Contains header data designed for the admin role, encompassing logo, navigation links, and administrative actions.
 *
 * @type {Array<Object>}
 */
const adminHeaderData = [
  // Logo and notification button
  {
    imgAddress: "./public/images/Tonrow.svg",
    logoLink: "#",
    size: "extraSmall",
    statues: "primaryOutLine",
    type: "button",
    class: "custom-class",
    anchorLink: "#",
    iconStart: "./images/notification.svg",
  },
  // Navigation links for admin role
  {
    linkText: "خانه",
    LinkAddress: "#home",
  },
  {
    linkText: "داشبورد",
    LinkAddress: "#home",
  },
  {
    linkText: "مدیریت سفارشات",
    LinkAddress: "#home",
  },
  {
    linkText: "مدیریت سفیران",
    LinkAddress: "#home",
  },
  {
    linkText: "لیست جابجایی",
    LinkAddress: "#home",
  },
  // Button for admin settings
  {
    size: "extraSmall",
    statues: "primaryOutLine",
    type: "button",
    class: "custom-class",
    anchorLink: "#MyRBN",
    iconStart: "./images/setting-2.svg",
  },
];

/**
 * Contains header data optimized for the user role, including logo, navigation links, and user-specific actions.
 *
 * @type {Array<Object>}
 */
const userHeaderData = [
  // Logo and notification button
  {
    imgAddress: "./public/images/Tonrow.svg",
    logoLink: "#",
    size: "extraSmall",
    statues: "primaryOutLine",
    type: "button",
    class: "custom-class",
    anchorLink: "#",
    iconStart: "./images/notification.svg",
  },
  // Navigation links for user role
  {
    linkText: "خانه",
    LinkAddress: "#home",
  },
  {
    linkText: "داشبورد",
    LinkAddress: "#home",
  },
  {
    linkText: "درخواست سفیر",
    LinkAddress: "#home",
  },
  {
    linkText: "درخواست خرید",
    LinkAddress: "#home",
  },
  // Button for user settings
  {
    size: "extraSmall",
    statues: "primaryOutLine",
    type: "button",
    class: "custom-class",
    anchorLink: "#",
    iconStart: "./images/setting-2.svg",
  },
];

// Export all header data arrays
export { safirHeaderData, adminHeaderData, userHeaderData, publicHeaderData };
