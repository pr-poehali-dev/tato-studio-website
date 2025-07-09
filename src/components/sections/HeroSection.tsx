import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onSectionChange: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSectionChange,
}) => {
  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-tattoo-navy mb-6">
            Искусство на <span className="text-tattoo-coral">твоей коже</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональная тату студия в самом сердце города. Создаем
            уникальные произведения искусства, которые останутся с вами
            навсегда.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-tattoo-coral hover:bg-tattoo-coral/90 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection("portfolio")}
            >
              <Icon name="ImageIcon" className="mr-2" size={20} />
              Портфолио
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-tattoo-turquoise text-tattoo-turquoise hover:bg-tattoo-turquoise hover:text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection("contact")}
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
