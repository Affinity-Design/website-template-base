import TemplateAuditPage from "./components/TemplateAuditPage";
import { auditRoutes } from "./templateRoutes";

export default function HomePage() {
  return <TemplateAuditPage route={auditRoutes.home} />;
}
