const config = {
  title: "Md Sagor Khan | Customer Experience Lead",
  description: {
    long: "CX leader with a strong track record in boosting CSAT, retention, and onboarding success for high-growth digital service organizations. Experienced in managing large user bases and guiding teams to deliver human-centred support.",
    short:
      "CX leader and Client Success Specialist dedicated to boosting retention and delivering human-centred support.",
  },
  keywords: [
    "Md Sagor Khan",
    "Customer Experience",
    "CX Lead",
    "Client Success",
    "Operations Manager",
    "Zendesk",
    "CRM",
    "Team Leadership",
    "Priyo Pay",
    "Ostad",
  ],
  author: "Md Sagor Khan",
  email: "meetmdsagorkhan@gmail.com",
  site: "https://your-portfolio-url.com", // Replace with your actual live URL

  // for github stars button (Optional: You can leave these or remove the button component later)
  githubUsername: "meetmdsagorkhan", 
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "", // Add if you have one
    linkedin: "https://www.linkedin.com/in/meetmdsagorkhan/",
    instagram: "",
    facebook: "",
    github: "", 
    // Added specific email link since it's prominent in your CV
    email: "mailto:meetmdsagorkhan@gmail.com", 
  },
};
export { config };