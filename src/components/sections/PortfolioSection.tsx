import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioItems } from "@/data";
import { PortfolioItem } from "@/types";

export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tattoo-navy mb-4">
            Наши работы
          </h2>
          <p className="text-gray-600">
            Каждая татуировка — это уникальное произведение искусства
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item: PortfolioItem) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-tattoo-navy mb-2">
                  {item.title}
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-tattoo-turquoise/20 text-tattoo-turquoise"
                >
                  {item.style}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
