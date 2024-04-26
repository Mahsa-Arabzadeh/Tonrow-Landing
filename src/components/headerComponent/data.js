/**
 * Header data for public role.
 * @type {Array<Object>}
 */
const publicHeaderData = [
  {
    imgAddress: "./public/images/Tonrow.svg",
    LinkAddress: "#home",
    btnText: "ورود/ثبت نام",
    btnLink: "#register",
    imgLinkAddress: "#",
    public: true, 
  },
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
];

/**
 * Header data for safir role.
 * @type {Array<Object>}
 */
const safirHeaderData = [
  {
    imgAddress: "./public/images/Tonrow.svg",
    linkText: "تماس با ما",
    LinkAddress: "#home",
    btnText: "Register",
    btnLink: "#register",
    imgLinkAddress: "#",
  },
  {
    linkText: "خانه",
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
  {
    btnText: "Register",
    btnLink: "#",
  },
];

/**
 * Header data for admin role.
 * @type {Array<Object>}
 */
const adminHeaderData = [
  {
    imgAddress: "./public/images/Tonrow.svg",
    linkText: "تماس با ما",
    LinkAddress: "#home",
    btnText: "Register",
    btnLink: "#register",
    imgLinkAddress: "#",
  },
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
    linkText: "مدیران سفیران",
    LinkAddress: "#home",
  },
  {
    linkText: "لیست جابجایی ها",
    LinkAddress: "#home",
  },
];

/**
 * Header data for user role.
 * @type {Array<Object>}
 */
const userHeaderData = [
  {
    imgAddress: "./public/images/Tonrow.svg",
    linkText: "تماس با ما",
    LinkAddress: "#home",
    btnText: "",
    btnLink: "#register",
    btnImage: "./public/images/notification.svg",
    imgLinkAddress: "#",
  },
  {
    linkText: "خانه",
    LinkAddress: "#home",
  },
  {
    linkText: "درخواست خرید",
    LinkAddress: "#home",
  },
  {
    linkText: "درخواست سفیر",
    LinkAddress: "#home",
  },
  {
    linkText: "تماس با ما",
    LinkAddress: "#home",
  },
  {
    btnText: "",
    btnLink: "#hi",
    btnImage: "./public/images/setting-2.svg",
  },
];

// Export all header data arrays
export { safirHeaderData, adminHeaderData, userHeaderData, publicHeaderData };
