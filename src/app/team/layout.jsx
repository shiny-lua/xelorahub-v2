import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  metadataBase: new URL("https://xelorahub.org"),
  title: "Team - XELORAHUB | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
  description: "Meet the talented team behind XELORAHUB - innovative tech leaders dedicated to delivering exceptional 3D Web, Blockchain, and AI solutions.",
  keywords: "3D Web, Blockchain, AI, Mobile App Development, Full Stack Development, Tech Agency, XELORAHUB Technologies",
  authors: [{ name: "XELORAHUB Technologies" }],
  alternates: {
    canonical: "https://xelorahub.org/team"
  },
  openGraph: {
    type: "website",
    url: "https://xelorahub.org/team",
    title: "Team - XELORAHUB | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Meet the talented team behind XELORAHUB - innovative tech leaders dedicated to delivering exceptional 3D Web, Blockchain, and AI solutions.",
    images: [
      {
        url: "assets/img/logo/logo.png",
        alt: "XELORAHUB Technologies Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "https://xelorahub.org/team",
    title: "Team - XELORAHUB | Leading Tech Agency for 3D Web, Blockchain & AI Solutions",
    description: "Meet the talented team behind XELORAHUB - innovative tech leaders dedicated to delivering exceptional 3D Web, Blockchain, and AI solutions.",
    images: ["assets/img/logo/logo.png"]
  }
};


const TeamLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default TeamLayout;