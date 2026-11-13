// src/data/images.js
// Single source of truth for every image on the site.
// All URLs come from the four reference pages (home, platform, pricing, contact).
// To swap any image later (or move to local files), edit ONLY this file.

const CDN = "https://web-assets.zendesk.com";

// resized/optimised variant used on most product screenshots
const w = (path, width = 1600) =>
  `${CDN}/cdn-cgi/image/q=65,f=auto,width=${width},fit=scale-down/${path}`;

// plain asset
const raw = (path) => `${CDN}/${path}`;

// "is/image" renderer used for photos and logos
const is = (name) => `${CDN}/is/image/zendesk/${name}?fmt=avif-alpha&qlt=65`;

// customer logos (dark monochrome variant)
const logo = (name) =>
  `${CDN}/is/image/zendesk/${name}?$primary=%2311110D&$secondary=%235d5d59&$tertiary=%23777773&fmt=avif-alpha&qlt=65&scale=2`;

export const images = {
  nav: {
    promo: `${CDN}/cdn-cgi/image/width=1080,q=80,f=auto/images/global-navigation/global-header/AISummit2026_NavPromo2__en_us.jpg`,
  },

  home: {
    hero: w("zendesk/pages/home/Hero-image_V01.jpg"),
    heroFallback: raw("zendesk/pages/home/animation-fallbacks/hero/Hero_Homepage__en_us.png"),
    logoStrip: ["Siemens", "Github", "Uber", "Box", "Vimeo", "Lush", "Tesco", "Discord"].map((n) =>
      logo(`${n}_Default`)
    ),
    eventLockup: w("zendesk/pages/home/zais2026/AI%20Summit%2026%20lockup%20horizontal@2x.png"),
    learningLoop: [1, 2, 3].map((n) =>
      `${CDN}/cdn-cgi/image/width=828,q=45,f=auto/zendesk/pages/home/animation-fallbacks/rll/RLL_ProductImagery_0${n}__en_gb.png`
    ),
    forethought: is("Photo_ZendeskForethought"),
    openServiceDirectory: `${CDN}/cdn-cgi/image/width=384,q=45,f=auto/zendesk/pages/campaigns/open-service-directory/OSD-blog.png`,
    aiFirst: {
      highVolume: w("zendesk/pages/home/ProductImagery_AIAgent_Messaging_CustomEntityIntent__en_us.png"),
      agentBuilder: w("zendesk/pages/home/ProductImagery_AIAgentBuilder_AIAgent_ProductImagery__en_us.png"),
      insights: w("zendesk/pages/home/ProductImagery_AIAgents_Insights__en_us.png"),
      qa: w("zendesk/pages/home/ProductImagery_QualityAssurance_AIAgent_ProductImagery__en_us.png"),
      voice: is("ProductImagery_Intent_VoiceAIAgents__en_us"),
    },
    employeeService: is("ProductImagery_EmployeeService__en_us"),
    contactCenter: is("ProductImagery_ContactCenter__en_us"),
    gartner: w("zendesk/pages/home/gartner2026.png"),
    testimonials: [
      { logo: logo("Next_Default"), photo: is("Next_Image_Testimonials_2x") },
      { logo: logo("Vimeo_Large"), photo: is("Vimeo_Image_Testimonials_2x") },
      { logo: logo("Openly_Large"), photo: is("Openly_Image_Testimonials_2x") },
      { logo: logo("NOBULL_Default"), photo: is("NOBULL_Image_Testimonials_2x") },
    ],
    marketplace: w("zendesk/pages/home/Logos_Marketplace.png"),
  },

  pricing: {
    features: {
      ticketing: w("zendesk/pages/pricing/featured/Product_Screenshot_Ticketing__en_us.png"),
      routing: w("zendesk/pages/pricing/featured/Blockframe_RouteCustomers__en_us.png"),
      dashboards: w("zendesk/pages/pricing/featured/Blockframe_ImproveHistoricalReporting__en_us.png"),
      replies: w("zendesk/pages/pricing/featured/Blockframe_SurfaceBestReply__en_us.png"),
      customerContext: w("zendesk/pages/pricing/featured/ProductImagery_CustomerContext__en_us.png"),
      workflows: w("zendesk/pages/pricing/featured/Blockframe_BuildCustomWorkflows__en_us.png"),
      aiAgents: w("zendesk/pages/pricing/ProductImagery_AIAgents__en-us.png"),
      actionBuilder: w("zendesk/pages/pricing/ProductImagery_ActionBuilder_Screenshot.png"),
      messaging: w("zendesk/pages/pricing/featured/ProductImagery_ReduceWaitTimes__en_us.png"),
      telephony: w("zendesk/pages/pricing/featured/ProductImagery_ReceivingCalls__en_us.png"),
      adminCopilot: w("zendesk/pages/pricing/ProductBlockframe_AdminCenter__en_us.png"),
      writingTools: w("zendesk/pages/pricing/ToneShift_AI_ProductImagery__en_us.png"),
      quickReports: w("zendesk/pages/pricing/ProductBlockframe_QuickReports.png"),
      skillsRouting: w("zendesk/pages/pricing/featured/ProductImagery_SkillsBasedRouting__en_us.png"),
      intelligentTriage: w("zendesk/pages/pricing/ProductBlockframe_IntelligentTriageBlock__en-us.png"),
      autoAssist: w("zendesk/pages/pricing/ProductBlockframe_CopilotAutoAssist__en-us.png"),
      voiceSummary: w("zendesk/pages/pricing/ProductImagery_Voice_PostCallSummary__en-us.png"),
      sandbox: w("zendesk/pages/pricing/featured/ProductImagery_Sandbox__en_us.png"),
      customRoles: w("zendesk/pages/pricing/featured/ProductImagery_CustomAgentRoles__en_us.png"),
    },
    forethought: is("Photo_ZendeskForethought"),
    startups: is("Photos_People_Relate_2025_Retail_4x3_01"),
    logoStrip: ["Discord", "Grubhub", "Shopify", "OpenTable", "Squarespace", "Airbnb", "Slack"].map((n) =>
      logo(`${n}_Default`)
    ),
    roiCalculator: w("zendesk/pages/pricing/BlockFrame_ROI_Calculator__en_us.png"),
  },

  platform: {
    hero: is("ResolutionPlatform_Hero__en_us"),
    valueIcons: [
      raw("zendesk/icons/72/AIAgents.png"),
      raw("zendesk/icons/72/Sales.png"),
      raw("zendesk/icons/72/Data.png"),
    ],
    agents: w("zendesk/pages/platform/home/Zendesk_AI_Agent_001__en_gb.png"),
    knowledge: [
      w("zendesk/pages/platform/home/Unified_Accordion1_Resolution_001__en_gb.png"),
      w("zendesk/pages/platform/home/Unified_Accordion1_EcoSystem_002__en_gb.png"),
      w("zendesk/pages/platform/home/CustomerInsights_AdvancedRouting2_updated_ProductImagery__en_us.png"),
      w("zendesk/pages/platform/home/Unified_Accordion1_Deliver_004__en_gb.png"),
    ],
    actions: [
      is("WrokFlow_Accordion2_LinkService_001__en_gb"), // "Wrok" typo is in the real URL
      is("WrokFlow_Accordion2_Empower_002__en_gb"),
      is("WrokFlow_Accordion2_Intergrate_003__en_gb"),
      w("zendesk/pages/service/ai/ai-agents/ConversationalCommerceAPI_AIAgent_ProductImagery__en_us.png"),
    ],
    measurement: [
      w("zendesk/pages/platform/Analytics_QuickReport_ProductImagery___en_us.png"),
      w("zendesk/pages/platform/home/FuelFaster_Accordion3_ServiceData_002__en_gb.png"),
      w("zendesk/pages/platform/home/FuelFaster_Accordion3_Tailor_003__en_gb.png"),
      w("zendesk/pages/platform/home/FuelFaster_Accordion3_Transformer_004__en_gb.png"),
    ],
    governance: [
      w("zendesk/pages/platform/home/Enterprise_Accordion4_Foundation_001__en_gb.png"),
      w("zendesk/pages/platform/home/Enterprise_Accordion4_Protect_002__en_gb.png"),
      w("zendesk/pages/platform/home/Enterprise_Accordion4_Minimize_003__en_gb.png"),
      w("zendesk/pages/platform/home/Enterprise_Accordion4_Control_004__en_gb.png"),
    ],
    testimonials: [
      { logo: raw("zendesk/partner-logos/Dunlop_Large.svg") },
      { logo: logo("Siemens_Large") },
      { logo: logo("Indigov_Large") },
    ],
  },
};

// Usage reminder: <img src={images.home.hero} alt="..." referrerPolicy="no-referrer" loading="lazy" />