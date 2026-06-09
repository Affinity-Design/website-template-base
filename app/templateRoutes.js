export const auditNavigationItems = [
  { href: "/", label: "TODO_WEBSITE_DAY_NAV_HOME" },
  { href: "/features/", label: "TODO_WEBSITE_DAY_NAV_FEATURES" },
  { href: "/pricing/", label: "TODO_WEBSITE_DAY_NAV_PRICING" },
  { href: "/about/", label: "TODO_WEBSITE_DAY_NAV_ABOUT" },
  { href: "/contact/", label: "TODO_WEBSITE_DAY_NAV_CONTACT" },
  { href: "/blog/", label: "TODO_WEBSITE_DAY_NAV_BLOG" }
];

export const auditRoutes = {
  home: createAuditRoute("home", "HOME"),
  features: createAuditRoute("features", "FEATURES"),
  pricing: createAuditRoute("pricing", "PRICING"),
  about: createAuditRoute("about", "ABOUT"),
  contact: createAuditRoute("contact", "CONTACT"),
  blog: createAuditRoute("blog", "BLOG"),
  samplePost: createAuditRoute("sample-post", "BLOG_SAMPLE_POST")
};

function createAuditRoute(id, marker) {
  return {
    id,
    eyebrow: `TODO_WEBSITE_DAY_${marker}_EYEBROW`,
    heading: `TODO_WEBSITE_DAY_${marker}_H1`,
    summary: `TODO_WEBSITE_DAY_${marker}_SUMMARY`,
    primaryAction: `TODO_WEBSITE_DAY_${marker}_PRIMARY_ACTION`,
    secondaryAction: `TODO_WEBSITE_DAY_${marker}_SECONDARY_ACTION`,
    detailEyebrow: `TODO_WEBSITE_DAY_${marker}_DETAIL_EYEBROW`,
    detailHeading: `TODO_WEBSITE_DAY_${marker}_DETAIL_HEADING`,
    detailCopy: `TODO_WEBSITE_DAY_${marker}_DETAIL_COPY`,
    auditNote: `TODO_WEBSITE_DAY_${marker}_AUDIT_ROUTE_READY`
  };
}
