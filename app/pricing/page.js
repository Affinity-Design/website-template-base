import TemplateAuditPage from "../components/TemplateAuditPage";
import { auditRoutes } from "../templateRoutes";

export default function PricingPage() {
  return <TemplateAuditPage route={auditRoutes.pricing} />;
}
