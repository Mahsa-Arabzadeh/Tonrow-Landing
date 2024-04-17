import domGenerator from '/dom-generator';
import "./index.scss";


export default function header(imgAddress, linkText, LinkAddress, btnText) {
  const headerGenerator = document.body.appendChild(
    domGenerator({
      tag: 'header',
      attributes: { id: 'header' },
      children: [
        {
          tag: 'div',
          attributes: { class: 'header-content' },
          children: [
            {
              tag: 'img',
              attributes: {
                src: imgAddress,
                alt: 'Logo',
                class: 'logo',
              },
            },
            {
              tag: 'nav',
              children: [
                {
                  tag: 'ul',
                  children: [
                    {
                      tag: 'li',
                      children: [
                        {
                          tag: 'a',
                          properties: { textContent: linkText},
                          attributes: { href: LinkAddress },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              tag: 'button',
              dataAttributes: { id: 'register' },
              properties: { textContent: btnText },
              eventListeners: {
                click: () => {
                  // Handle logout functionality here
                },
              },
            },
          ],
        },
      ],
    })
  );

  return headerGenerator;
}

