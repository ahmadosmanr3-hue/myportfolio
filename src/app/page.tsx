import { PageShell } from "@/components/portfolio/page-shell";
import { getPublicPortrait } from "@/lib/get-portrait";

export default function Home() {
  return <PageShell portrait={getPublicPortrait()} />;
}
