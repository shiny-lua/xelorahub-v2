import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://xelorahub.org"),
  title: "Services - XELORAHUB | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
  description: "Explore XELORAHUB's comprehensive tech services including 3D Web & VR Development, Blockchain, AI Solutions, Mobile App Development, and Full Stack Engineering.",
  keywords: "3D Web, Blockchain, AI, Mobile App Development, Full Stack Development, Tech Agency, XELORAHUB Technologies",
  authors: [{ name: "XELORAHUB Technologies" }],
  alternates: {
    canonical: "https://xelorahub.org/services"
  },
  openGraph: {
    type: "website",
    url: "https://xelorahub.org/services",
    title: "Services - XELORAHUB | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Explore XELORAHUB's comprehensive tech services including 3D Web & VR Development, Blockchain, AI Solutions, Mobile App Development, and Full Stack Engineering.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "XELORAHUB Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://xelorahub.org/services",
    title: "Services - XELORAHUB | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Explore XELORAHUB's comprehensive tech services including 3D Web & VR Development, Blockchain, AI Solutions, Mobile App Development, and Full Stack Engineering.",
    images: ["assets/img/logo/logo.png"]
  }
};

const ServicesLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default ServicesLayout;