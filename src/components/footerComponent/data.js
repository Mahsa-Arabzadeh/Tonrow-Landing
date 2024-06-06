"use strict";

import {
  tonrowEmail,
  tonrowAddress,
  tonrowNumber,
  tonrowMap,
} from "../../JS/constants/constants";

export const colFooterGenerator = [
  [
    {
      imgSrc: "/images/Tonrow-white.svg",
      colTitle: "تنرو",
      colText: [
        {
          text: "حمل و نقل با ما, آسودگی خاطر برای شما !",
        },
      ],
    },
  ],
  [
    {
      colTitle: "تنرو",
      colText: [
        {
          text: "وبلاگ تنرو",
          linkHref: "#",
        },
        {
          text: "لوگو و هویت تنرو",
          linkHref: "#",
        },
        {
          text: "قوانین و مقررات",
          linkHref: "#",
        },
        {
          text: "درباره ما",
          linkHref: "#",
        },
        {
          text: "تماس با ما",
          linkHref: "#",
        },
        {
          text: "فرصت شغلی",
          linkHref: "#",
        },
      ],
    },
  ],
  [
    {
      colTitle: "خدمات",
      colText: [
        {
          text: "خرید منزل",
          linkHref: "#",
        },
        {
          text: "درخواست جا به جایی",
          linkHref: "#",
        },
        {
          text: "بازگشت وجه",
          linkHref: "#",
        },
        {
          text: "پشتیبانی",
          linkHref: "#",
        },
      ],
    },
  ],
  [
    {
      colTitle: "سفیران",
      colText: [
        {
          text: "دانلود اپ سفیر",
          linkHref: "#",
        },
        {
          text: "پرسش های متداول سفیران",
          linkHref: "#",
        },
        {
          text: "شرایط و قوانین سفیران",
          linkHref: "#",
        },
      ],
    },
  ],
  [
    {
      colTitle: "ایمیل",
      colText: [
        {
          linkHref: `mailto: ${"info@tonrow.mail.com"}`,
          text: tonrowEmail,
          decoration: "link-active",
        },
      ],
    },
    {
      colTitle: "شماره تماس",
      colText: [
        {
          linkHref: `tel: ${tonrowNumber}`,
          text: tonrowNumber,
          decoration: "link-active",
        },
      ],
    },
    {
      colTitle: "آدرس",
      colText: [
        {
          linkHref: `${tonrowMap}`,
          text: tonrowAddress,
        },
      ],
    },
  ],
];

// Path data of images for the rowImageFooter section
export const rowImageFooter = [
  {
    imgSrc: "/images/Rectangleimg-footer.svg",
  },
  {
    imgSrc: "/images/Rectangle-footer.svg",
  },
];
