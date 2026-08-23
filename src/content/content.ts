import { PortfolioContent } from "@/types/content";

/**
 * ============================================================
 *  SINGLE SOURCE OF TRUTH
 * ============================================================
 *  Every visible word, number, link and image slot on the site
 *  is driven from this file. To update the portfolio:
 *
 *  - Edit text directly below.
 *  - Add or remove array items (projects, experience, skills,
 *    achievements) freely, the layout adapts automatically.
 *  - To activate a link (LinkedIn, resume, a project report),
 *    set the field to a real URL or a local path such as
 *    "/reports/redrob.pdf". Leave it as an empty string "" to
 *    keep that title or button as plain, non-clickable text.
 *  - To add a photo, drop the image file in /public/images and
 *    make sure the path below points to that exact file name
 *    (e.g. "/images/profile.jpg"). Replacing the file with the
 *    same name automatically updates the site, no code changes
 *    needed.
 *  - PDF report links must point to a real file placed in
 *    /public/reports (e.g. "/reports/redrob.pdf").
 *
 *  No other file needs to change for content updates.
 * ============================================================
 */

export const content: PortfolioContent = {
  profile: {
    name: "Ayush Kumar",
    headline: "Data Science x AI/ML x Product",
    subheadline:
      "An IIT Guwahati undergraduate working at the intersection of AI/ML, product strategy, and data-driven problem solving, with experience across technology, entrepreneurship, and student-led initiatives.",
    education: {
      institute: "Indian Institute of Technology, Guwahati",
      major: "B.Tech. Civil Engineering",
      minor: "Electronics and Communication Engineering",
    },
    contact: {
      phone: "+91-9304924480",
      email_primary: "ayushk.4021@iitg.ac.in",
      email_secondary: "ayushsanu1705@gmail.com",
      github: "https://github.com/7Ayush-cyber",
      linkedin: "https://www.linkedin.com/in/ayush-kumar-5242152a3",
      resume: "",
    },
  },

  hero: {
    image: "/images/profile.jpg",
    image_alt: "Ayush Kumar headshot",
    caption: "Professional headshot",
  },

  featured_projects: [
    {
      title: "Redrob AI Candidate Ranking System",
      category: "AI / NLP / Retrieval",
      link: "https://github.com/7Ayush-cyber/redrob-ai-candidate-ranker",
      summary:
        "An end-to-end AI candidate ranking platform built for a hiring challenge, combining retrieval, reranking, feature engineering, and explainable reasoning.",
      bullets: [
        "JD understanding, candidate auditing, and feature engineering pipeline",
        "Hybrid retrieval using BM25 and dense embeddings with Reciprocal Rank Fusion",
        "Cross-encoder reranking and explainable ranking reasoning",
      ],
      tech_stack: ["Python", "BM25", "FAISS", "Embeddings", "Cross-Encoder", "RRF", "Streamlit"],
    },
        // {
    //   title: "Road Accident Analytics using Geospatial Data",
    //   category: "Geospatial Analytics / ML",
    //   link: "",
    //   summary:
    //     "B.Tech project focused on transforming heterogeneous iRAD accident records into a structured road-safety dataset for segment-level analysis.",
    //   bullets: [
    //     "Built a GIS pipeline for crash-to-road matching, chainage, segmentation, and segment-level feature extraction",
    //     "Integrated road geometry, curvature, intersections, and AADT using spatial methods",
    //     "Conducting EDA, feature engineering, and supervised ML using Logistic Regression, Random Forest, and XGBoost",
    //   ],
    //   tech_stack: [
    //     "Python",
    //     "GIS",
    //     "GeoPandas",
    //     "Pandas",
    //     "Scikit-learn",
    //     "Random Forest",
    //     "XGBoost",
    //   ],
    // },
    {
      title: "Semi-Supervised Learning for Weed Detection",
      category: "Computer Vision",
      link: "https://github.com/7Ayush-cyber/12_Semi_Supervised_Weed_Detection",
      summary:
        "A semi-supervised YOLOv9 pipeline for robust weed detection using labeled and unlabeled agricultural imagery.",
      bullets: [
        "Merged labeled and unlabeled data using confidence-based pseudo-labeling",
        "Improved localization using GIoU loss, F1-based evaluation, and Albumentations",
        "Achieved 0.89 precision, 0.88 recall, and 0.62 mAP@50–95 on test data",
      ],
      tech_stack: [
        "YOLOv9",
        "Python",
        "Albumentations",
        "Computer Vision",
        "Pseudo-labeling",
      ],
    },
    {
      title: "Legal Contract Intelligence Platform",
      category: "RAG / Legal AI",
      link: "https://github.com/7Ayush-cyber/legal-contract-intelligence-platform",
      summary:
        "An enterprise-style legal AI platform for contract question answering, clause extraction, risk detection, missing clause analysis, and contract comparison.",
      bullets: [
        "Hybrid retrieval with FAISS and BM25",
        "RAG-based answering with legal analysis workflows",
        "Built around CUAD contract data with comparison and risk analysis",
      ],
      tech_stack: ["Python", "RAG", "FAISS", "BM25", "LangChain", "Streamlit", "AWS Bedrock"],
    },
    {
      title: "Credit Risk Analysis",
      category: "Data Science / Machine Learning",
      link: "https://github.com/7Ayush-cyber/Credit-Risk-Project",
      summary:
        "A machine learning credit-risk prediction system built on 32k+ loan applicant records.",
      bullets: [
        "Applied KNN imputation and SMOTE for preprocessing",
        "Performed exploratory data analysis using correlations, pair plots, and heatmaps",
        "Trained multiple classification models and achieved up to 93% accuracy",
      ],
      tech_stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "SMOTE", "KNN Imputer"],
    },
    {
      title: "AgriScan",
      category: "Computer Vision",
      link: "https://github.com/7Ayush-cyber/Plant_disease_prediction-",
      summary: "Real-time plant disease detection application deployed using Streamlit.",
      bullets: [
        "Trained multiple CNN models on real-world agricultural datasets",
        "MobileNetV2 achieved 94% accuracy",
        "Integrated disease remedies and prevention support",
      ],
      tech_stack: ["TensorFlow", "Keras", "MobileNetV2", "CNN", "Streamlit"],
    },
  ],

  product_business_projects: [
    {
      title: "Updesha",
      summary:
        "Student-led JEE mentoring platform focused on accessible, community-driven preparation.",
      bullets: [
        "Mentored 2k+ students",
        "Scaled community to 2.5k+ Instagram and 2k+ Telegram members",
        "Helped drive 15L+ revenue through outreach initiatives",
      ],
      focus: ["Growth Strategy", "Product Validation", "Community Building"],
      link: "",
    },
        {
      title: "WaterWise",
      summary:
        "Campus water-management consulting solution developed for Kriti'25.",
      bullets: [
        "Diagnosed 30–40% campus water loss through supply-demand analysis and infrastructure assessment",
        "Surveyed 90+ users and analyzed BOD > 10 to identify purity and wastewater-management gaps",
        "Proposed a Rs. 1.2 Cr solution roadmap covering IoT valves, PAC dosing, and hostel-level tank upgrades",
      ],
      focus: ["Consulting", "Data Analysis", "Problem Solving", "Strategy"],
      link: "https://drive.google.com/file/d/1u4el5RFWLZFBK3Ur_LUALLt22aR_XNbg/view?usp=sharing",
    },
    {
      title: "Kaccha Chittha",
      summary: "Student-driven platform improving faculty visibility and mentorship transparency.",
      bullets: [
        "Built MVP using Node.js and Express.js",
        "Conducted survey with 500+ students for validation",
        "Led product scope, design coordination, and early-stage pitching",
      ],
      focus: ["Product Development", "User Research", "MVP"],
      link: "https://kacchachittha-render.onrender.com/",
    },
    
    {
      title: "HYGO: Hygiene On The Go",
      summary: "Sustainable flushable seat-cover product made using recycled cotton and water hyacinth.",
      bullets: [
        "Validated with 180+ hostel residents",
        "Built GTM strategy with 7 local shop partnerships",
        "Saved approximately 200L water and reduced approximately 1kg CO2 per product pack",
      ],
      focus: ["Sustainability", "GTM Strategy", "Product Validation"],
      link: "https://drive.google.com/drive/folders/1wodkTmqztVmfZuThfsv_1BxrzKdogqpi",
    },
    {
      title: "Directors Inc.",
      summary:
        "Global marketing and growth work focused on international GTM, pricing, market research, and segmentation.",
      bullets: [
        "Worked on international GTM strategy and pricing models",
        "Conducted market analysis and customer segmentation",
        "Contributed to international product expansion planning",
      ],
      focus: ["GTM", "Pricing", "Market Research", "Segmentation"],
      link: "",
    },
  ],

  experience_and_leadership: {
    title: "Experience and Leadership",
    subtitle: "Roles and positions of responsibility",
    description: "Leadership and organizational work, written by the outcomes they produced.",
    image: "/images/leadership.jpg",
    image_alt: "Leadership or event photo",
    caption: "",
    entries: [
      {
        title: "Global Marketing Intern",
        org: "Directors Inc.",
        duration: "Jan 2026 to Present",
        description:
          "Global marketing and growth work focused on international GTM, pricing, market research, and segmentation.",
        bullets: [
          "Worked on international GTM strategy and pricing models",
          "Conducted market analysis and customer segmentation",
          "Contributed to international product expansion planning",
        ],
        tags: ["GTM", "Pricing", "Market Research", "Segmentation"],
      },
      {
        title: "B.Tech Project — Road Accident Analytics",
        org: "Under Prof. Nipjyoti Bharadwaj, IIT Guwahati",
        duration: "Aug 2026 to Present",
        description:
          "Geospatial road-safety analytics using heterogeneous iRAD accident records.",
        bullets: [
          "Engineered a structured road-safety dataset for geospatial analysis",
          "Built crash-to-road matching, chainage, segmentation, and segment-level feature extraction pipelines",
          "Applying EDA, feature engineering, and supervised ML to identify road-safety patterns",
        ],
        tags: ["GIS", "Geospatial Analytics", "Machine Learning", "Road Safety"],
      },
      {
        title: "Welfare Secretary",
        org: "Kameng Hostel Management Committee, IIT Guwahati",
        duration: "Apr 2026 to Present",
        bullets: [
          "Represented the needs of 600+ students in committee meetings and welfare discussions",
          "Managed annual hostel budget exceeding Rs. 11 Lakhs",
          "Advocated for resident welfare improvements and policy changes",
        ],
      },
      {
        title: "Events Head",
        org: "Student Alumni Interaction Linkage (SAIL), IIT Guwahati",
        duration: "Apr 2025 to March 2026",
        bullets: [
          "Led strategic alumni engagement initiatives impacting 20,000+ alumni and 8,000+ students",
          "Supervised a team of 60+ executives",
          "Coordinated flagship programs including Alumni Greet, Mentorship, Graduation Tea Party, and Ball Dance",
        ],
      },
      {
        title: "Manager, Startup Expo",
        org: "Udgam'25",
        duration: "2025",
        bullets: [
          "Led outreach and overall execution for the Startup Expo module",
          "Coordinated partnerships and event operations",
        ],
      },
      {
        title: "Core Team Member",
        org: "Equinox, Tech Board, IIT Guwahati",
        duration: "Apr 2025 to March 2026",
        bullets: [
          "Launched an Astronomy Course for 200+ freshers",
          "Organized astronomy quizzes engaging 150+ students",
          "Coordinated stargazing sessions and workshops for 80+ participants",
        ],
      },
    ],
  },

  achievements: [
    "Best Head Award, SAIL Board — 2026",
    "1st in Robotics, Kriti 2025",
    "3rd in Cybersecurity CTF, 2025",
    "1st in Startup Sprint, 2024",
    "1st in Aeromodeling, 2024",
  ],

  skills: {
    "Data Science": ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "SQL", "MySQL"],
    "Machine Learning": ["Scikit-learn", "TensorFlow", "Keras", "SMOTE", "KNN Imputer"],
    "NLP / RAG": ["RAG", "LangChain", "FAISS", "BM25", "Cross-Encoder", "Embeddings"],
    "Computer Vision": ["YOLOv9", "CNNs", "Albumentations", "Streamlit"],
    "Product / Strategy": ["GTM", "Market Research", "Pricing", "Segmentation", "User Research", "Product Validation"],
  },

  portfolio_copy: {
    one_liner: "I build data-driven products, AI systems, and student-focused initiatives.",
    about_short:
      "Undergraduate at IIT Guwahati studying Civil Engineering with a minor in Electronics and Communication Engineering. I work across Data Science, AI/ML, and Product, building systems that combine technical depth with user impact.",
  },
};
