import { Question } from '../types';

export const questions: Question[] = [
  {
    id: "welcome",
    text: "Welcome to Hero Network",
    type: "text",
    description: "Let's create your personalized video content strategy",
  },
  {
    id: "businessName",
    text: "What's your business name?",
    type: "text",
    placeholder: "Enter your business name",
    required: true,
  },
  {
    id: "email",
    text: "What's your email address?",
    type: "text",
    placeholder: "Enter your business email",
    required: true,
  },
  {
    id: "businessType",
    text: "Select your business type:",
    type: "single-select",
    hasOther: true,
    options: [
      { value: "retail", label: "Retail store" },
      { value: "restaurant", label: "Restaurant/Café" },
      { value: "personal-services", label: "Personal services (hair, beauty, fitness)" },
      { value: "professional-services", label: "Professional services (legal, financial, medical)" },
      { value: "construction", label: "Construction/Trade" },
      { value: "online", label: "Online business" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "customerSource",
    text: "How do you get most of your customers?",
    type: "single-select",
    hasOther: true,
    options: [
      { value: "referrals", label: "Referrals/Word of mouth" },
      { value: "google", label: "Google search" },
      { value: "social-ads", label: "Facebook/Instagram ads" },
      { value: "local-ads", label: "Local advertising (print, radio, TV)" },
      { value: "walk-in", label: "Walk-in traffic" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "socialPresence",
    text: "Do you currently post on social media?",
    type: "single-select",
    options: [
      { value: "outsourced", label: "Yes, but someone else does it for us" },
      { value: "multiple", label: "Yes, multiple times per week" },
      { value: "weekly", label: "Yes, weekly" },
      { value: "monthly", label: "Yes, once a month or less" },
      { value: "no", label: "No, not yet" },
    ],
  },
  {
    id: "platforms",
    text: "Which platforms do you want to use?",
    type: "multi-select",
    hasOther: true,
    description: "Select all that apply",
    options: [
      { value: "instagram", label: "Instagram" },
      { value: "tiktok", label: "TikTok" },
      { value: "facebook", label: "Facebook" },
      { value: "youtube", label: "YouTube" },
      { value: "linkedin", label: "LinkedIn" },
      { value: "website", label: "Website" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "contentTypes",
    text: "What do you want to show in your videos?",
    type: "multi-select",
    hasOther: true,
    description: "Select all that apply",
    options: [
      { value: "products", label: "Products/services in action" },
      { value: "testimonials", label: "Customer testimonials" },
      { value: "behind-scenes", label: "Behind the scenes" },
      { value: "educational", label: "How-to/Educational content" },
      { value: "team", label: "Team/staff introductions" },
      { value: "facility", label: "Facility/location tour" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "businessGoal",
    text: "What's your main business goal right now?",
    type: "single-select",
    hasOther: true,
    options: [
      { value: "customers", label: "Get more customers" },
      { value: "awareness", label: "Increase brand awareness" },
      { value: "launch", label: "Launch new products/services" },
      { value: "social-growth", label: "Grow social media following" },
      { value: "expertise", label: "Show business expertise" },
      { value: "other", label: "Other" },
    ],
  },
];