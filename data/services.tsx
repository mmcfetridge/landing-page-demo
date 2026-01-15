export const sectionServices = [
  {
    id: 7,
    imgSrc: "/image/section-services-item/expert-review.jpg",
    title: "Expert Clinical Review",
    description: `
        Every automated report undergoes a rigorous secondary review by 
        <br />
        certified neuroradiologists to ensure clinical accuracy and 
        <br />
        legal admissibility.
     `,
    benefits: [
      "Neuroradiologist Over-read",
      "Standardized Clinical Lexicon",
      "Pathology Correlation",
      "Admissibility Quality Control",
    ],
  },
  {
    id: 8,
    imgSrc: "/image/section-services-item/case-consult.jpg",
    title: "Case Consultation",
    description: `
        Full-service support for interpreting brain health data, from initial
        <br />
        intake and scan scheduling to expert testimony and legal
        <br />
        admissibility at trial.
      `,
    benefits: [
      "Litigation Support Strategy",
      "Expert Witness Preparation",
      "Deposition Data Analysis",
      "Complex Injury Interpretation",
    ],
  },
];

export const servicesData = [
  {
    id: "qluminate",
    title: "QLuminate™ Expert Review",
    videoSrc: "/assets/videos/qluminate.mp4",
    description: "The gold standard in brain health interpretation. QLuminate™ combines our automated Quantify™ data with a high-level functional interpretation by certified medical experts to correlate symptoms with imaging.",
    benefits: [
      "Expert-vetted diagnostic reporting",
      "Correlation of symptoms to imaging",
      "Simplified complex findings for juries",
      "Certified Neuroradiologist signature"
    ],
    linkText: "FREE Information Package",
    isActive: true,
  },
  {
    id: "quantify",
    title: "Quantify™ Analysis",
    videoSrc: "/assets/videos/Quantify-Analysis.mp4",
    description: "Our proprietary, fully-automated pipeline that converts raw DICOM data into objective clinical insights without manual intervention.",
    benefits: [
      "FDA-cleared diagnostic support",
      "Seamless PACS integration",
      "Zero-footprint cloud processing",
      "Automated PDF reporting"
    ],
    linkText: "FREE Information Package",
  },
  {
    id: "dti-fa",
    title: "DTI & White Matter Integrity",
    videoSrc: "/assets/videos/Brain-White-Matter.mp4",
    description: "Advanced Diffusion Tensor Imaging (DTI) analysis to identify microstructural white matter injuries (traumatic axonal injury) often invisible on standard 1.5T or 3T MRI scans.",
    benefits: [
      "Fractional Anisotropy (FA) quantification",
      "Statistical deviation mapping",
      "Fiber tractography visualization",
      "Evidence-based injury localization"
    ],
    linkText: "FREE Information Package",
  },
  {
    id: "volumetrics",
    title: "Clinical Volumetrics",
    videoSrc: "/assets/videos/clinical-bg.mp4",
    description: "Automated segmentation and volume measurement of brain structures compared against an extensive normative database for objective atrophy detection.",
    benefits: [
      "Age & sex-matched normative data",
      "Longitudinal tracking of brain volume",
      "Detailed hippocampal & cortical mapping",
      "Objective markers for neurodegeneration"
    ],
    linkText: "FREE Information Package",
  }
];
export const caseStudiesData = [
  {
    id: "tab1",
    tabTitle: "Legal Professionals",
    imgSrc: "/image/section/legal-tech.jpg",
    imgWidth: 585,
    imgHeight: 439,
    title: "Evidence-Based Litigation",
    description:
      "MINDSET provides the scientific foundation for traumatic brain injury (TBI) claims, turning 'invisible' injuries into objective, data-driven evidence for trial.",
    benefits: [
      "Objective TBI validation",
      "Expert witness credibility",
      "Data-backed settlement leverage",
    ],
    isActive: true,
  },
  {
    id: "tab2",
    tabTitle: "Imaging Centers",
    imgSrc: "/image/section/radiology-tech.jpg",
    imgWidth: 878,
    imgHeight: 659,
    title: "Precision Radiology",
    description:
      "Boost diagnostic confidence and center revenue by integrating advanced DTI and Volumetric analysis into standard clinical workflows.",
    benefits: [
      "Automated clinical workflows",
      "Enhanced diagnostic accuracy",
      "Referral base expansion",
    ],
    isActive: false,
  },
];