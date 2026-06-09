import TemplateAuditPage from "../components/TemplateAuditPage";
import { auditRoutes } from "../templateRoutes";

export default function BlogPage() {
  return <TemplateAuditPage route={auditRoutes.blog} />;
}
