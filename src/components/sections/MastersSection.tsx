import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { masters } from "@/data";
import { Master } from "@/types";

export const MastersSection: React.FC = () => {
  return (
    <section id="masters" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tattoo-navy mb-4">
            Наши мастера
          </h2>
          <p className="text-gray-600">Профессионалы своего дела</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {masters.map((master: Master, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img
                    src={master.image}
                    alt={master.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-tattoo-navy">
                  {master.name}
                </CardTitle>
                <p className="text-tattoo-coral font-medium">
                  {master.specialty}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{master.experience} опыта</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
