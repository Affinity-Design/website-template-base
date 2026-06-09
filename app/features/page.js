import TemplateAuditPage from "../components/TemplateAuditPage";
import { auditRoutes } from "../templateRoutes";

export default function FeaturesPage() {
  return <TemplateAuditPage route={auditRoutes.features} />;
}
