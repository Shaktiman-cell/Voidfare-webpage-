import { LoadingScreen } from "@/components/loading-screen";
import { CustomCursor } from "@/components/custom-cursor";
import { ParticleBackground } from "@/components/particle-background";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { useKonamiCode } from "@/hooks/use-konami-code";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleKonamiActivation = () => {
    // Apply color filter effect
    document.body.style.filter = 'hue-rotate(180deg)';
    
    // Create celebration particles
    for (let i = 0; i < 50; i++) {
      setTimeout(() => createCelebrationParticle(), i * 50);
    }
    
    toast({
      title: "🎮 Konami Code Activated! 🎮",
      description: "You've unlocked the secret developer mode!",
      duration: 5000,
    });
    
    // Reset effect after 10 seconds
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 10000);
  };

  const createCelebrationParticle = () => {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-10px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.animation = 'particles 3s linear forwards';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 3000);
  };

  useKonamiCode(handleKonamiActivation);

  return (
    <div className="min-h-screen bg-void-black text-gray-100 overflow-x-hidden">
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-void-black py-8 border-t border-neon-purple/20" data-testid="footer">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 mb-2">© 2025 Voidmire | Crafted by Shalendra</p>
            <p className="text-gray-500 text-sm">Forging digital worlds, one line of code at a time</p>
            
            {/* Easter Egg Hint */}
            <div className="mt-4">
              <p className="text-gray-600 text-xs">
                <i className="fas fa-gamepad text-neon-purple/50"></i>
                {' '}Try the Konami Code for a surprise...
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}