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
          text: tonrowEmail,
        },
      ],
    },
    {
      colTitle: "شماره تماس",
      colText: [
        {
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
        {
          text: "شرایط و قوانین سفیران",
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
        {
          text: "بازگشت وجه",
        },
        {
          text: "پشتیبانی",
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
        {
          text: "درباره ما",
        },
        {
          text: "تماس با ما",
        },
        {
          text: "فرصت شغلی",
        },
      ],
    },
  ],
  [
    {
      imgSrc: "./public/images/Tonrow-white.svg",
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
    imgSrc: "./public/images/Rectangleimg-footer.svg",
  },
  {
    imgSrc: "./public/images/Rectangle-footer.svg",
  },
];

export { colFooterGenerator, rowImageFooter };
