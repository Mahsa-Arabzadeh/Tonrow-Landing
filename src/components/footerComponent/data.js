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
          linkHref: `tel: ${1800}`,
          text: tonrowNumber,
          decoration: "link-active",
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
      colTitle: "سفیر",
      colText: [
        {
          text: "وبلاگ سفیر",
          linkHref: "#",
        },
        {
          text: "لوگو و هویت سفیر",
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
