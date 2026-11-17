import { images } from "./images.js";

// Generates placeholder items. When you paste real text, replace a call like
// items("Platform", 3) with a literal array of { title, desc } objects.
const items = (label, n) =>
  Array.from({ length: n }, (_, i) => ({
    title: `${label} item ${i + 1}`, 
    desc: "Short description", 
  }));

export const nav = {
  logoText: "Zendesk", 
  items: [
    { label: "Platform", to: "/platform", mega: true }, 
    { label: "Products", mega: true }, 
    { label: "Solutions", mega: true }, 
    { label: "Resources", mega: true }, 
    { label: "Pricing", to: "/pricing" }, 
  ],
  signIn: "Sign in",
  contact: "View demo",
  viewDemo: "Try for free",
  

  menus: {
    Platform: {
      top: {
        title: "Zendesk Resolution Platform", 
        text: "Deliver faster, higher resolution with the only AI-first service platform ", 
            },
      columns: [
       {span: 4,
        items:[
          {
            title:"Zendesk AI",
            desc:"Power your service with AI that continuosly improves every resolution",
          },
          {
            title:"Zendesk Bridge",
            desc:"Deliver better outcomes with any AI agent, app, or experience "
          },
          {
            title:"Reporting and Analytics",
            desc:"Turn service insights into better outcomes"
          },
        ]
       },
        {span: 3,
        items:[
          {
            title:"Marketplace",
            desc:"Find 1,800+ apps, partners, and integrations to serve customers and employees",
          },
          {
            title:"Actions and integrations",
            desc:"Drive resolutions across unified data and systems"
          },
          {
            title:"Security and Trust",
            desc:"Deploy trusted service with enterprose-grade security and AI governance"         },
        ]
       },
      ],
    },

    ///for products menu
    Products: {
      columns: [
 {span: 7,
        items:[
          {
            title:"Customer Service",
            desc:"Power your service with AI that continuosly improves every resolution",
          },
          {
            title:"Employee Service",
            desc:"Deliver better outcomes with any AI agent, app, or experience "
          },
          {
            title:"Contact Center",
            desc:"Turn service insights into better outcomes"
          },
          {
            title:"AI Agents",
            desc:"Turn service insights into better outcomes"
          },
        ]
       },
        {span: 5,
        items:[
          {
            title:"Co-pilot",
            desc:"Find 1,800+ apps, partners, and integrations to serve customers and employees",
          },
          {
            title:"Quality Assurance",
            desc:"Drive resolutions across unified data and systems"
          },
          {
            title:"Workforce Management",
            desc:"Deploy trusted service with enterprose-grade security and AI governance"         },
        ]
       },
      ],
    },

    // 5 + 5, equal width
    Solutions: {
      columns: [
        { span: 6, heading: "Heading", items: items("Solutions A", 5) }, 
        { span: 6, heading: "Heading", items: items("Solutions B", 5) }, 
      ],
    },

    // 4 + 4 + 4 plus promo card
    Resources: {
      columns: [
        { span: 3, heading: "Heading", items: items("Resources A", 4) }, 
        { span: 3, heading: "Heading", items: items("Resources B", 4) }, 
        { span: 3, heading: "Heading", items: items("Resources C", 4) }, 
      ],
      promo: {
        image: images.nav.promo,
        title: "Promo title", 
        text: "Promo text", 
        button: "Register now", 
      },
    },
  },
};