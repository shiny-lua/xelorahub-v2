import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://xelorahub.org"),
  title: "Portfolio - XELORAHUB",
  description: "View XELORAHUB's impressive portfolio of tech projects spanning 3D Web, Blockchain, Mobile Apps, and AI solutions.",
  keywords: "3D Web, Blockchain, AI, Mobile App Development, Full Stack Development, Tech Agency, XELORAHUB Technologies",
  authors: [{ name: "XELORAHUB Technologies" }],
  alternates: {
    canonical: "https://xelorahub.org/portfolio"
  },
  openGraph: {
    type: "website",
    url: "https://xelorahub.org/portfolio",
    title: "Portfolio - XELORAHUB",
    description: "View XELORAHUB's impressive portfolio of tech projects spanning 3D Web, Blockchain, Mobile Apps, and AI solutions.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "XELORAHUB Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://xelorahub.org/portfolio",
    title: "Portfolio - XELORAHUB",
    description: "View XELORAHUB's impressive portfolio of tech projects spanning 3D Web, Blockchain, Mobile Apps, and AI solutions.",
    images: ["assets/img/logo/logo.png"]
  }
};


const PortfolioLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default PortfolioLayout;