export interface FeatureItem {
  text: string;
}

export interface FeatureSection {
  icon: string;
  title: string;
  items: FeatureItem[];
  image?: string;
  imageCaption?: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  tags: string[];
  projectType: "client" | "personal";
  client?: string;
  myRole: string;
  description: string;
  overview: string;
  tech: string[];
  accentFrom: string;
  accentTo: string;
  thumbnail: string;
  featureSections: FeatureSection[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "snipverse",
    name: "Snipverse",
    tagline: "Decentralized Social Platform for Crypto & Web3",
    category: "Web3 · Social",
    tags: ["Web3 Social", "Client Project"],
    projectType: "client",
    client: "Jervis (USA)",
    myRole: "Full-Stack Developer",
    description:
      "A decentralized social platform for crypto enthusiasts and Web3 community building — with AI tools, crypto dashboards, voice features, and a full blogging system.",
    overview:
      "Snipverse is a feature-rich decentralized social platform built for the crypto and Web3 community. I built a wide range of features spanning AI automation, real-time crypto data, content management, voice tools, social mechanics, and production DevOps — all within a single cohesive platform using Next.js and Supabase.",
    tech: [
      "Next.js",
      "Supabase",
      "Material UI",
      "XPR Network",
      "CoinGecko API",
      "OneSignal",
      "GitHub Actions",
    ],
    accentFrom: "#38bdf8",
    accentTo: "#818cf8",
    thumbnail: "/images/projects/snipverse/thumbnail.png",
    liveUrl: "https://snipverse.com/",
    featureSections: [
      {
        icon: "🤖",
        title: "AI Integration",
        items: [
          {
            text: "AI-powered crypto post generator — users generate ready-to-publish posts with one click",
          },
          {
            text: "Pulls live market stats (price, volume, change) into generated content via CoinGecko API",
          },
        ],
        image: "/images/projects/snipverse/ai.png",
        imageCaption:
          "AI post generator with live crypto market data injected into content",
      },
      {
        icon: "✍️",
        title: "Blogging System",
        items: [
          {
            text: "Full blogging system with rich text editor and CRUD operations",
          },
          {
            text: "Draft and publish controls — save work in progress before going live",
          },
          {
            text: "Post scheduling — set a future date and time for automatic publishing",
          },
          { text: "Voice-to-text support — dictate blog content hands-free" },
          { text: "Text-to-voice support — listen to any post read aloud" },
        ],
      },
      {
        icon: "📊",
        title: "Crypto Portfolio Dashboard",
        items: [
          {
            text: "Personal portfolio tracker — users add their crypto holdings and track current value",
          },
          {
            text: "Real-time asset metrics — price, total value, profit/loss per coin",
          },
          {
            text: "Interactive charts showing portfolio performance over time",
          },
        ],
        image: "/images/projects/snipverse/portfolio.png",
        imageCaption:
          "Crypto portfolio dashboard with holdings, value tracking, and charts",
      },
      {
        icon: "🌐",
        title: "Crypto Market Overview",
        items: [
          { text: "Live market dashboard powered by CoinGecko API" },
          {
            text: "Displays price, 24h change, market cap, and volume for top cryptocurrencies",
          },
          { text: "Auto-refreshing data to keep the feed current" },
        ],
        image: "/images/projects/snipverse/market.png",
        imageCaption:
          "Live crypto market overview with real-time CoinGecko data",
      },
      {
        icon: "🗳️",
        title: "Poll Feature",
        items: [
          {
            text: "Twitter-style poll system — users create polls directly inside posts",
          },
          { text: "Multiple choice options with live vote counts" },
          { text: "One vote per user enforced, results update in real time" },
        ],
        image: "/images/projects/snipverse/polls.png",
        imageCaption:
          "Twitter-style polls embedded in posts with real-time vote results",
      },
      {
        icon: "🎁",
        title: "Referral System",
        items: [
          { text: "Each user gets a unique referral link to share" },
          {
            text: "Rewards are credited automatically when a referred user signs up",
          },
          {
            text: "Referral dashboard showing total referrals and earned rewards",
          },
        ],
        image: "/images/projects/snipverse/referral.png",
        imageCaption:
          "Referral dashboard with unique link, sign-up tracking, and rewards",
      },
      {
        icon: "🔔",
        title: "Notification System",
        items: [
          {
            text: "Split notification types — direct messages and general platform alerts handled separately",
          },
          {
            text: "OneSignal push notifications — users receive alerts even when not on the site",
          },
        ],
        image: "/images/projects/snipverse/notifications.png",
        imageCaption: "Notification center with push delivery",
      },
      {
        icon: "🔐",
        title: "Google Authentication",
        items: [
          {
            text: "Google Login via OAuth 2.0 — one-click sign in without a password",
          },
          {
            text: "Secure token exchange and user profile creation on first login",
          },
        ],
        image: "/images/projects/snipverse/google-auth.png",
        imageCaption: "Google OAuth login flow and authentication screen",
      },
      {
        icon: "🔑",
        title: "Session Management",
        items: [
          {
            text: "Secure session tokens with proper expiry and refresh logic",
          },
          { text: "Persistent login across browser sessions" },
          {
            text: "Forced logout on token invalidation or suspicious activity",
          },
        ],
        image: "/images/projects/snipverse/session.png",
        imageCaption: "Session management — active sessions and token handling",
      },
      {
        icon: "🔌",
        title: "Public API & API Key System",
        items: [
          {
            text: "Built a developer API for Snipverse — third-party sites can integrate via API key",
          },
          {
            text: "API key generation system — each user/developer gets a unique key from their dashboard",
          },
          {
            text: "Read access — external apps can fetch published posts and content from Snipverse",
          },
          {
            text: "Write access — authorised third-party sites can create and publish content to Snipverse",
          },
        ],
      },
      {
        icon: "⚙️",
        title: "DevOps & Deployment",
        items: [
          { text: "CI/CD pipeline with GitHub Actions" },
          { text: "Automated deployment on every push" },
        ],
      },
      {
        icon: "🚀",
        title: "SEO & Optimization",
        items: [
          { text: "OpenGraph tags for rich link previews" },
          { text: "Twitter meta tags for social sharing" },
        ],
      },
    ],
  },
  {
    id: "dao-dashboard",
    name: "DAO Dashboard",
    tagline: "Full DAO Governance Ecosystem for Snipverse",
    category: "Web3 · DAO",
    tags: ["Web3 DAO", "Client Project"],
    projectType: "client",
    client: "Jervis (USA)",
    myRole: "Full-Stack Web3 Developer",
    description:
      "A complete DAO governance system with voting, elections, moderation, treasury management, revenue sharing, and on-chain transparency — built solo using XPR Network smart contracts.",
    overview:
      "I built a full DAO governance ecosystem for Snipverse. This system replaces centralized control with community-driven decision-making: token holders elect council members, vote on proposals, manage a community treasury, and moderate content — all transparently recorded on-chain via XPR Network smart contracts.",
    tech: [
      "Smart Contracts",
      "XPR Network",
      "Proton Blockchain",
      "Next.js",
      "Material UI",
    ],
    accentFrom: "#38bdf8",
    accentTo: "#818cf8",
    thumbnail: "/images/projects/dao-dashboard/thumbnail.jpg",
    featureSections: [
      {
        icon: "🏛️",
        title: "Governance & Council System",
        items: [
          { text: "7-member DAO council structure (2 founding + 5 elected)" },
          { text: "Annual election system for community-elected seats" },
          { text: "Recall mechanism to remove underperforming members" },
        ],
        image: "/images/projects/dao-dashboard/council.jpg",
        imageCaption: "Council structure and governance overview dashboard",
      },
      {
        icon: "🗳️",
        title: "Voting & Elections",
        items: [
          { text: "Token-based voting (10M+ staked tokens required)" },
          { text: "Candidate application & campaigning system" },
          { text: "On-chain voting via XPR Network smart contracts" },
          { text: "Mid-term recall voting system" },
        ],
        image: "/images/projects/dao-dashboard/voting.jpg",
        imageCaption: "On-chain election interface with live vote counts",
      },
      {
        icon: "📊",
        title: "Member Performance Tracking",
        items: [
          { text: "Platform growth metrics per council member" },
          { text: "User engagement and revenue impact tracking" },
          { text: "Contribution/activity logging system" },
          { text: "Performance-based recall trigger system" },
        ],
        image: "/images/projects/dao-dashboard/performance.jpg",
        imageCaption: "Performance tracking dashboard with member metrics",
      },
      {
        icon: "🧾",
        title: "Proposal & Governance System",
        items: [
          {
            text: "Proposal submission — growth strategies, funding requests, operational changes",
          },
          { text: "Community voting on all proposals" },
          { text: "Structured decision-making workflow" },
        ],
        image: "/images/projects/dao-dashboard/proposal.jpg",
        imageCaption: "Proposal submission and community voting interface",
      },
      {
        icon: "🛡️",
        title: "Moderator Management System",
        items: [
          {
            text: "Moderator application flow with 1M token stake requirement",
          },
          { text: "Council-only approval voting (5/7 majority)" },
          { text: "On-chain vote recording for all approvals" },
          { text: "Moderator access control and content tools" },
          { text: "Recall voting with 4/7 majority removal logic" },
          { text: "Community reporting system" },
        ],
      },
      {
        icon: "🚨",
        title: "Content Moderation Workflow",
        items: [
          { text: "Moderator reporting system" },
          { text: "Auto-hide logic triggered at 3 reports" },
          { text: "Council review panel for flagged content" },
          { text: "Final decision voting — restore or delete" },
          { text: "User appeal system" },
          { text: "Moderation activity logs & tracking" },
        ],
      },
      {
        icon: "💰",
        title: "Incentives & Revenue Sharing",
        items: [
          { text: "Ad revenue distribution (12% to DAO)" },
          { text: "Per-member revenue allocation (2% each)" },
          { text: "Performance-based earnings logic" },
          { text: "Automated payouts via smart contracts" },
        ],
      },
      {
        icon: "🏦",
        title: "Community Rewards Wallet System",
        items: [
          {
            text: "Community wallet dashboard — balance, transactions, allocations",
          },
          { text: "Fund allocation proposal and voting system (4/7 approval)" },
          { text: "Automated token transfer via smart contract" },
          { text: "On-chain logging of all transactions" },
          { text: "Historical proposal and voting records" },
          {
            text: "Emergency stop, budget control, and spending cap mechanisms",
          },
        ],
        image: "/images/projects/dao-dashboard/treasury.jpg",
        imageCaption:
          "Community treasury dashboard with on-chain transaction history",
      },
    ],
  },
  {
    id: "snipdex",
    name: "SnipDex",
    tagline: "Decentralized Exchange on XPR Network",
    category: "Web3 · DeFi",
    tags: ["Web3 DEX", "Client Project"],
    projectType: "client",
    client: "Jervis (USA)",
    myRole: "Full-Stack Web3 Developer",
    description:
      "A DEX featuring order-book trading, AMM-based swaps, liquidity pool management, and a full crypto market section — built on XPR Network with React and Node.js.",
    overview:
      "SnipDex is a full-featured hybrid decentralized exchange on XPR Network / Proton Blockchain. It uniquely combines traditional order-book trading with AMM liquidity pool swaps, a comprehensive market data section, and a polished React trading interface backed by a Node.js matching engine.",
    tech: [
      "Smart Contracts",
      "XPR Network",
      "Proton Blockchain",
      "React",
      "Node.js",
    ],
    accentFrom: "#38bdf8",
    accentTo: "#818cf8",
    thumbnail: "/images/projects/snipdex/thumbnail.png",
    featureSections: [
      {
        icon: "📒",
        title: "Order-Book Trading",
        items: [
          { text: "Limit, market and stop-loss buy/sell orders" },
          { text: "Real-time order book with live depth display" },
          { text: "Trade history and order management" },
          { text: "On-chain settlement via smart contracts" },
        ],
        image: "/images/projects/snipdex/orderbook.png",
        imageCaption:
          "Live order book with buy/sell interface and trade history",
      },
      {
        icon: "🔄",
        title: "AMM Swap",
        items: [
          { text: "Instant token-to-token swaps via AMM pools" },
          { text: "Slippage tolerance controls" },
          { text: "Real-time swap price calculation" },
          { text: "Smart contract-powered non-custodial swaps" },
        ],
        image: "/images/projects/snipdex/amm-swap.png",
        imageCaption:
          "AMM swap interface with slippage controls and price impact",
      },
      {
        icon: "💧",
        title: "Liquidity Pools",
        items: [
          { text: "Add and remove liquidity from pools" },
          { text: "LP token issuance and redemption" },
          { text: "Pool share and earnings tracking" },
        ],
        image: "/images/projects/snipdex/liquidity.png",
        imageCaption: "Liquidity pool management with add/remove flow",
      },
      {
        icon: "📊",
        title: "Market Section",
        items: [
          {
            text: "Full market listing: Name, Price, 24h %, Market Cap, FDV, Vol. (24h), Circulating Supply, Max Supply",
          },
          { text: "Leading pair and total pair count per token" },
          { text: "Top exchange and volume percentage breakdown" },
          { text: "Sortable and searchable market table" },
        ],
        image: "/images/projects/snipdex/market.png",
        imageCaption: "Full crypto market section with detailed token metrics",
      },
    ],
  },
  {
    id: "qcfinder",
    name: "QCFinder",
    tagline: "QC Image Scraper for Chinese E-Commerce",
    category: "E-commerce · Scraper",
    tags: ["E-commerce", "Client Project"],
    projectType: "client",
    client: "Hamza (UK)",
    myRole: "Full-Stack Developer",
    description:
      "Paste a Taobao or Weidian product link to instantly find QC images and full product details from multiple Chinese e-commerce platforms.",
    overview:
      "QCFinder is a specialized scraper platform for the replica and reseller community. Users paste a Taobao or Weidian product link and the platform automatically fetches QC images, prices, product details, and seller info from multiple Chinese platforms — all in one clean interface.",
    tech: ["React.js", "Node.js", "Puppeteer", "MongoDB", "Tailwind CSS"],
    accentFrom: "#38bdf8",
    accentTo: "#818cf8",
    thumbnail: "/images/projects/qcfinder/thumbnail.png",
    githubUrl: "https://github.com/Ridoy-Mondol/qcfinder-frontend.git",
    featureSections: [
      {
        icon: "🔍",
        title: "Product Search",
        items: [
          { text: "Search using Taobao or Weidian product links" },
          { text: "Instant scraping from multiple Chinese platforms" },
          { text: "Fast cached results via MongoDB" },
        ],
        image: "/images/projects/qcfinder/search.png",
        imageCaption: "Search interface with Taobao/Weidian link input",
      },
      {
        icon: "🛍️",
        title: "Product Listing Section",
        items: [
          { text: "Pre-fetched product catalog with thumbnails" },
          { text: "Product name, price, and platform info displayed" },
          { text: "Grid layout for easy browsing" },
        ],
        image: "/images/projects/qcfinder/products.png",
        imageCaption: "Product listing section with pre-fetched items",
      },
      {
        icon: "🖼️",
        title: "Product Details Page",
        items: [
          { text: "Full QC image gallery with zoom support" },
          { text: "Product price, seller info, and platform details" },
          { text: "Multiple product images from the original listing" },
          { text: "Structured layout for fast QC review" },
        ],
        image: "/images/projects/qcfinder/details.png",
        imageCaption:
          "Product detail page with QC images and full product info",
      },
    ],
  },
  {
    id: "next-blog",
    name: "Next-Blog",
    tagline: "Full-Stack Blogging Platform",
    category: "Full-Stack",
    tags: ["Full-Stack", "Personal Project"],
    projectType: "personal",
    myRole: "Full-Stack Developer",
    description:
      "A full-stack blogging platform with post writing, listing, detail pages, and user profiles — built with Next.js, Tailwind CSS, and MongoDB.",
    overview:
      "Next-Blog is a complete blogging platform where users can create accounts, write and publish blog posts, browse the blog listing, read post detail pages, and manage their own profile. Built with Next.js for SSR performance, Tailwind CSS for a clean UI, and MongoDB for flexible content storage.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    accentFrom: "#38bdf8",
    accentTo: "#818cf8",
    thumbnail: "/images/projects/next-blog/thumbnail.png",
    liveUrl: "https://next-blog-bice-two.vercel.app/",
    githubUrl: "https://github.com/Ridoy-Mondol/next_blog",
    featureSections: [
      {
        icon: "📋",
        title: "Blog Listing",
        items: [
          { text: "Paginated blog post listing page" },
          { text: "Post cards with title, excerpt, author, and date" },
          { text: "Category and tag filtering" },
        ],
        image: "/images/projects/next-blog/listing.png",
        imageCaption: "Blog listing page with post cards and filters",
      },
      {
        icon: "📄",
        title: "Blog Detail Page",
        items: [
          { text: "Full post rendering with rich text content" },
          { text: "Author info and published date" },
          { text: "Related posts section" },
          { text: "SSR for fast load and SEO" },
        ],
        image: "/images/projects/next-blog/detail.png",
        imageCaption: "Blog post detail page with full content layout",
      },
      {
        icon: "✍️",
        title: "Blog Writing",
        items: [
          { text: "Rich text editor for creating posts" },
          { text: "Draft and publish workflow" },
          { text: "Category and tag assignment" },
        ],
        image: "/images/projects/next-blog/editor.png",
        imageCaption: "Blog writing interface with rich text editor",
      },
      {
        icon: "👤",
        title: "Profile Page",
        items: [
          { text: "User profile with name and avatar" },
          { text: "List of all posts by the author" },
          { text: "Profile editing capability" },
        ],
        image: "/images/projects/next-blog/profile.png",
        imageCaption: "User profile page with authored posts",
      },
    ],
  },
  {
    id: "carvila",
    name: "Carvila",
    tagline: "Modern Car Selling & Listing UI Template",
    category: "Frontend",
    tags: ["Frontend", "Personal Project"],
    projectType: "personal",
    myRole: "Frontend Developer",
    description:
      "A modern car marketplace UI template showcasing vehicle listings, filtering interfaces, and a clean, user-friendly layout designed for real-world applications.",
    overview:
      "Carvilla is a frontend-only UI template built with React.js, designed to simulate a modern car selling platform. It focuses on clean layout structure, reusable components, and a visually engaging user experience. While the filtering, listings, and sections are static and non-functional, the project demonstrates how a real-world car marketplace interface would be structured and presented.",
    tech: ["React.js", "CSS3"],
    accentFrom: "#38bdf8",
    accentTo: "#818cf8",
    thumbnail: "/images/projects/carvila/thumbnail.png",
    liveUrl: "https://ridoy-mondol.github.io/carvilla/",
    githubUrl: "https://github.com/Ridoy-Mondol/carvilla",
    featureSections: [
      {
        icon: "🏠",
        title: "Hero & Search Section",
        items: [
          { text: "Full-width hero banner with strong headline and CTA" },
          {
            text: "Car search interface with multiple filter fields (UI only)",
          },
          { text: "Smooth scroll navigation between sections" },
        ],
        image: "/images/projects/carvila/hero.png",
        imageCaption: "Hero section with search UI and CTA",
      },
      {
        icon: "🎞️",
        title: "Newest Cars Slider",
        items: [
          { text: "Full-width slider showcasing latest cars" },
          { text: "Each slide includes image, name, description, and CTA" },
          { text: "Designed for immersive browsing experience" },
        ],
        image: "/images/projects/carvila/newest.png",
        imageCaption: "Full-width slider for newest cars",
      },
      {
        icon: "🚗",
        title: "Featured Cars Grid",
        items: [
          { text: "Responsive grid layout with multiple car cards" },
          { text: "Each card displays image, model, price, and description" },
          { text: "Layout adapts based on screen width" },
        ],
        image: "/images/projects/carvila/listings.png",
        imageCaption: "Featured cars displayed in responsive card grid",
      },
      {
        icon: "💬",
        title: "Testimonials Section",
        items: [
          { text: "Customer review cards with names and locations" },
          { text: "Repeated layout to simulate real feedback" },
          { text: "Adds trust-building UI elements" },
        ],
      },
      {
        icon: "🏷️",
        title: "Brand Showcase",
        items: [
          { text: "Grid display of popular car brand logos" },
          { text: "Clean and minimal layout" },
          { text: "Enhances visual credibility" },
        ],
      },
      {
        icon: "📩",
        title: "Newsletter & Footer",
        items: [
          { text: "Newsletter subscription input UI" },
          { text: "Multi-column footer with navigation links" },
          { text: "Structured layout for company info" },
        ],
      },
    ],
  },
];
