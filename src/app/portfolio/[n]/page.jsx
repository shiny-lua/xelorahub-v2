import ClientPortfolioPage from "@/app/portfolio/[n]/ClientPortfolioPage";
import { ClientsSection, TestimonialsSection } from "@/components";
import { portfolioItems } from "@/data/PortfolioItems";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return portfolioItems.map(({ id }) => ({ n: id.toString() }));
}

export default async function PortfolioPage({ params }) {
  const { n: projectId } = await params;

  if (!portfolioItems.some(({ id }) => id.toString() === projectId)) {
    notFound();
  }

  return (
    <div className="pt-32">
      <ClientPortfolioPage n={projectId} />
      <ClientsSection />
      <TestimonialsSection />
    </div>
  );
}
