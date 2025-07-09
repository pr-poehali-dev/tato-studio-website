import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      color: "text-tattoo-coral",
      text: "ул. Тверская, 15, Москва",
    },
    {
      icon: "Phone",
      color: "text-tattoo-turquoise",
      text: "+7 (495) 123-45-67",
    },
    {
      icon: "Mail",
      color: "text-tattoo-blue",
      text: "info@tatotori.ru",
    },
    {
      icon: "Clock",
      color: "text-tattoo-navy",
      text: "Ежедневно с 10:00 до 22:00",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tattoo-navy mb-4">Контакты</h2>
          <p className="text-gray-600">
            Свяжитесь с нами или запишитесь на сеанс
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-tattoo-navy mb-6">
              Информация
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <Icon
                    name={info.icon as any}
                    className={`${info.color} mr-3`}
                    size={20}
                  />
                  <p className="text-gray-600">{info.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-tattoo-navy mb-6">
              Запись на сеанс
            </h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (000) 000-00-00" />
              </div>
              <div>
                <Label htmlFor="message">Описание татуировки</Label>
                <Textarea
                  id="message"
                  placeholder="Опишите идею вашей татуировки"
                />
              </div>
              <Button className="w-full bg-tattoo-coral hover:bg-tattoo-coral/90 text-white">
                <Icon name="Send" className="mr-2" size={16} />
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
