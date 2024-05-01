import {
  tonrowEmail,
  tonrowAddress,
  tonrowNumber,
} from "../../JS/constants/constants";

const colFooterGenerator = [
  [
    {
      colTitle: "ایمیل",
      colText: [
        {
          linkHref: "#",
          text: tonrowEmail,
        },
      ],
    },
    {
      colTitle: "شماره تماس",
      colText: [
        {
          linkHref: "#",
          text: tonrowNumber,
        },
      ],
    },
    {
      colTitle: "آدرس",
      colText: [
        {
          text: tonrowAddress,
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
        },
        {
          text: "پرسش های متداول سفیران",
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
        },
        {
          text: "درخواست جا به جایی",
        },
      ],
    },
  ],
  [
    {
      colTitle: "سفیر",
      colText: [
        {
          text: "وبلاگ سفیر",
        },
        {
          text: "لوگو و هویت سفیر",
        },
        {
          text: "قوانین و مقررات",
        },
      ],
    },
  ],
  [
    {
      imgSrc: "/images/Tonrow-white.svg",
      colTitle: "سفیر",
      colText: [
        {
          text: "حمل و نقل با ما, آسودگی خاطر برای شما !",
        },
      ],
    },
  ],
];

// Path data of images for the rowImageFooter section
const rowImageFooter = [
  {
    imgSrc: "/images/Rectangleimg-footer.svg",
  },
  {
    imgSrc: "/images/Rectangle-footer.svg",
  },
];

export { colFooterGenerator, rowImageFooter };
