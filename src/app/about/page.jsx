import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import TeamSection from "@/components/sections/TeamSection";
import SkillsSection from "@/components/sections/SkillsSection";

const AboutPage = () => {
  return (
    <div className="pt-32">
      <AboutSection />
      <StatsSection />
      <AchievementsSection />
      <TeamSection />
      <SkillsSection />
    </div>
  )
}

export default AboutPage;