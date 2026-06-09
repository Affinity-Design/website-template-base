import TemplateAuditPage from "../components/TemplateAuditPage";
import { auditRoutes } from "../templateRoutes";

export default function ContactPage() {
  return <TemplateAuditPage route={auditRoutes.contact} />;
}
