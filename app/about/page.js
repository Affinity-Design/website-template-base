import TemplateAuditPage from "../components/TemplateAuditPage";
import { auditRoutes } from "../templateRoutes";

export default function AboutPage() {
  return <TemplateAuditPage route={auditRoutes.about} />;
}
