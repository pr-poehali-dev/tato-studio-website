import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { reviews } from "@/data";
import { Review } from "@/types";

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tattoo-navy mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-gray-600">Что говорят о нас</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review: Review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-tattoo-navy">
                    {review.name}
                  </CardTitle>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
