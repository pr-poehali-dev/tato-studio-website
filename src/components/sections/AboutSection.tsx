import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: "Award",
      title: "Опыт",
      description: "Более 10 лет работы в сфере татуировки",
      color: "text-tattoo-coral",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Стерильное оборудование и одноразовые материалы",
      color: "text-tattoo-turquoise",
    },
    {
      icon: "Palette",
      title: "Творчество",
      description: "Индивидуальный подход к каждому клиенту",
      color: "text-tattoo-blue",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tattoo-navy mb-4">
            О студии TaToTori
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Мы — команда профессиональных тату-мастеров с многолетним опытом.
            Наша студия оборудована современным оборудованием и соответствует
            всем стандартам безопасности.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow animate-scale-in"
            >
              <CardHeader>
                <Icon
                  name={feature.icon as any}
                  className={`mx-auto ${feature.color}`}
                  size={48}
                />
                <CardTitle className="text-tattoo-navy">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
