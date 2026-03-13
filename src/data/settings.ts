export const settings = {
  title: "Welcome to Infeeds",
  logo: "/images/logo.png",
  description: "This is Infeeds, an online directory for news, stories and ideas. Become a part of the directory to share your story.",
  color_scheme: "auto",
  menu: {
    items: [
      { title: "Home", url: "/" },
      { title: "News", url: "/tags/news" },
      { title: "Business", url: "/tags/business" },
      { title: "Lifestyle", url: "/tags/lifestyle" },
      {
        title: "Categories",
        submenu: [
          { url: "/tags/travel", title: "Travel" },
          { url: "/tags/health", title: "Health" },
          { url: "/tags/food", title: "Food" },
          { url: "/tags/finance", title: "Finance" },
          { url: "/tags/technology", title: "Technology" },
          { url: "/blog/", title: "Read more" },
        ],
      },
      { title: "Contact Us", url: "mailto:exmgks@gmail.com" },
    ],
  },
  hero: {
    enable: true,
    title: "thoughts, stories and ideas.",
    description: "This is Infeeds, an online directory for news, stories and ideas. Share your story with us.",
    image: null,
  },
  author: {
    name: "Adam Makins",
    bio: "I’m a published content creator, brand copywriter, photographer, and social media content creator and manager. I help brands connect with their customers by developing engaging content that entertains, educates, and offers value to their audience.",
    avatar: "/images/001.jpg",
  },
  social: [
    { icon: "twitter", link: "https://twitter.com/infeeds" },
    { icon: "facebook", link: "https://facebook.com/infeeds" },
    { icon: "instagram", link: "https://instagram.com/infeeds" },
    { icon: "pinterest", link: "https://pinterest.com/infeeds" },
  ],
  author__section: {
    enable: true,
    author__section__title: "Hello, my name is Adam. I’m reviewer and content creator.",
    author__section__description: "I’m a published content creator, brand copywriter, photographer, and social media content creator and manager. I help brands connect with their customers by developing engaging content that entertains, educates, and offers value to their audience.",
    aurhor__section__button__text: "More About Me",
    aurhor__section__button__link: "/about",
    author__section__big__image: "/images/001.jpg",
    author__section__small__image: "/images/logo.png",
  },
  tag__settings: {
    enable: false,
    tag: "travel",
  },
  blog__settings: {
    enable: true,
    blog__title: "Latest Posts",
    blog__description: "Read latest on Infeeds",
  },
  footer: {
    description: "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    menu: [
      { title: "Business", url: "/tags/business" },
      { title: "Lifestyle", url: "/tags/lifestyle" },
      { title: "Finance", url: "/tags/finance" },
      { title: "Contact", url: "mailto:exmgks@gmail.com" },
    ],
  },
  disqus_identifier: "infeeds-com",
  google_analytics: "G-HJMYMX5JGZ",
  ads: {
    homepage: {
      header_ad: {
        enabled: true,
        type: 'html',
        html_content: '<a href="https://infeeds.com/why-high-quality-content-partnerships-are-becoming-essential-for-modern-digital-platforms"><img src="/images/ads/ad-728.png" alt="Infeeds 728x90 Ad"></a><br /><sub><a href="mailto:exmgks@gmail.com" target="_blank">Write an email to us</a></sub>'
      },
      footer_ad: {
        enabled: true,
        type: 'html',
        html_content: '<a href="https://infeeds.com/why-high-quality-content-partnerships-are-becoming-essential-for-modern-digital-platforms"><img src="/images/ads/ad-728-footer.png" alt="Infeeds 728x90 Ad"></a><br /><sub><a href="mailto:exmgks@gmail.com" target="_blank">Write an email to us</a></sub>'
      }
    },
    blog: {
      header_ad: {
        enabled: true,
        type: 'html',
        html_content: '<a href="https://infeeds.com/why-high-quality-content-partnerships-are-becoming-essential-for-modern-digital-platforms"><img src="/images/ads/ad-728.png" alt="Infeeds 728x90 Ad"></a><br /><sub><a href="mailto:exmgks@gmail.com" target="_blank">Write an email to us</a></sub>'
      },
      footer_ad: {
        enabled: true,
        type: 'html',
        html_content: '<a href="https://infeeds.com/why-high-quality-content-partnerships-are-becoming-essential-for-modern-digital-platforms"><img src="/images/ads/ad-728-footer.png" alt="Infeeds 728x90 Ad"></a><br /><sub><a href="mailto:exmgks@gmail.com" target="_blank">Write an email to us</a></sub>'
      },
      sidebar_ad: {
        enabled: true,
        type: 'html',
        html_content: '<a href="https://infeeds.com/why-high-quality-content-partnerships-are-becoming-essential-for-modern-digital-platforms"><img src="/images/ads/ad-300.png" alt="Infeeds 250x300 Ad"></a><br /><sub><a href="mailto:exmgks@gmail.com" target="_blank">Write an email to us</a></sub>'
      }
    }
  }
};
