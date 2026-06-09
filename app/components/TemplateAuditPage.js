import Link from "next/link";
import { auditNavigationItems } from "../templateRoutes";

export default function TemplateAuditPage({ route }) {
  return (
    <div className="template-page-shell">
      <TemplateHeader />
      <main className="template-main">
        <section className="template-hero" aria-labelledby={`${route.id}-title`}>
          <div className="template-hero__inner container">
            <p className="section-label">{route.eyebrow}</p>
            <h1 id={`${route.id}-title`}>{route.heading}</h1>
            <p className="template-hero__summary">{route.summary}</p>
            <div className="template-hero__actions" aria-label="TODO_WEBSITE_DAY_ACTIONS">
              <Link className="btn" href="/contact/">
                {route.primaryAction}
              </Link>
              <Link className="template-secondary-link" href="/features/">
                {route.secondaryAction}
              </Link>
            </div>
          </div>
        </section>
        <section className="template-content-band" aria-labelledby={`${route.id}-detail-title`}>
          <div className="template-content-band__inner container">
            <article className="template-detail-panel">
              <p className="section-label">{route.detailEyebrow}</p>
              <h2 id={`${route.id}-detail-title`}>{route.detailHeading}</h2>
              <p>{route.detailCopy}</p>
            </article>
            <aside className="template-route-note" aria-label="TODO_WEBSITE_DAY_ROUTE_NOTE">
              <p>{route.auditNote}</p>
            </aside>
          </div>
        </section>
      </main>
      <TemplateFooter />
    </div>
  );
}

function TemplateHeader() {
  return (
    <header className="template-header">
      <nav className="template-navigation container" aria-label="Primary">
        <Link className="template-brand" href="/">
          TODO_WEBSITE_DAY_BRAND_NAME
        </Link>
        <div className="template-navigation__links">
          {auditNavigationItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function TemplateFooter() {
  return (
    <footer className="template-footer">
      <div className="template-footer__inner container">
        <p>TODO_WEBSITE_DAY_FOOTER_COPY</p>
        <Link href="/blog/sample-post/">TODO_WEBSITE_DAY_SAMPLE_POST_LINK</Link>
      </div>
    </footer>
  );
}
