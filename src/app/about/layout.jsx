import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://xelorahub.org"),
  title: "About XELORAHUB | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
  description: "Learn about XELORAHUB, a premier tech agency with expert teams in 3D Web, Blockchain, Full Stack Development, AI, and Mobile Apps. Our history, mission, and values.",
  keywords: "about xelorahub, tech agency, company history, tech solutions, 3D web, blockchain, AI, mobile development, digital innovation, tech company",
  authors: [{ name: "XELORAHUB Technologies" }],
  alternates: {
    canonical: "https://xelorahub.org/about"
  },
  openGraph: {
    type: "website",
    url: "https://xelorahub.org/about",
    title: "About XELORAHUB - Innovative Tech Agency | Our Story",
    description: "Learn about XELORAHUB, a multidisciplinary tech agency empowering bold ideas with transformative technology. Discover our mission, values and expertise.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "XELORAHUB Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://xelorahub.org/about",
    title: "About XELORAHUB - Innovative Tech Agency | Our Story",
    description: "Learn about XELORAHUB, a multidisciplinary tech agency empowering bold ideas with transformative technology. Discover our mission, values and expertise.",
    images: ["assets/img/logo/logo.png"]
  }
};

const AboutLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default AboutLayout;