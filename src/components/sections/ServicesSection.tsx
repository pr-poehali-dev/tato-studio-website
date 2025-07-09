import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data";
import { Service } from "@/types";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tattoo-navy mb-4">
            Услуги и цены
          </h2>
          <p className="text-gray-600">Прозрачное ценообразование</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service: Service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-tattoo-navy">
                    {service.name}
                  </h3>
                  <span className="text-tattoo-coral font-bold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
