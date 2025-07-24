import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://xelorahub.org"),
  title: "XELORAHUB LLC | IT Agency & Digital Solutions IT Agency & Digital Solutions",
  description: "Get in touch with XELORAHUB's tech experts for innovative solutions in 3D Web, Blockchain, AI, and Mobile App development. Contact us today.",
  keywords: "about xelorahub, tech agency, company history, tech solutions, 3D web, blockchain, AI, mobile development, digital innovation, tech company",
  authors: [{ name: "XELORAHUB Technologies" }],
  alternates: {
    canonical: "https://xelorahub.org/contact"
  },
  openGraph: {
    type: "website",
    url: "https://xelorahub.org/contact",
    title: "Contact XELORAHUB - Innovative Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Get in touch with XELORAHUB's tech experts for innovative solutions in 3D Web, Blockchain, AI, and Mobile App development. Contact us today.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "XELORAHUB Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://xelorahub.org/contact",
    title: "Contact XELORAHUB - Innovative Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Get in touch with XELORAHUB's tech experts for innovative solutions in 3D Web, Blockchain, AI, and Mobile App development. Contact us today.",
    images: ["assets/img/logo/logo.png"]
  }
};

const ContactLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default ContactLayout;