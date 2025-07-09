import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: "Геометрия",
      style: "Геометрический",
      image: "img/0fee9a07-c9ec-461f-a9af-7ba0f612999d.jpg",
    },
    {
      id: 2,
      title: "Традиционная",
      style: "Олд скул",
      image: "img/971b4592-4843-405c-b1d8-e4dcd08b565d.jpg",
    },
    {
      id: 3,
      title: "Минимализм",
      style: "Лайнворк",
      image: "img/162af86f-5e50-43f0-96fa-f51a273eccf2.jpg",
    },
  ];

  const masters = [
    {
      name: "Анна Кузнецова",
      specialty: "Реализм",
      experience: "8 лет",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop",
    },
    {
      name: "Максим Волков",
      specialty: "Традиционные",
      experience: "12 лет",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Елена Сидорова",
      specialty: "Минимализм",
      experience: "5 лет",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
  ];

  const services = [
    {
      name: "Татуировка",
      price: "от 3000₽",
      description: "Любой сложности и размера",
    },
    { name: "Эскиз", price: "от 1500₽", description: "Индивидуальный дизайн" },
    {
      name: "Коррекция",
      price: "от 2000₽",
      description: "Исправление старых работ",
    },
    {
      name: "Консультация",
      price: "бесплатно",
      description: "Обсуждение идей",
    },
  ];

  const reviews = [
    {
      name: "Мария",
      rating: 5,
      text: "Потрясающая работа! Анна сделала именно то, что я хотела. Студия очень чистая и уютная.",
    },
    {
      name: "Дмитрий",
      rating: 5,
      text: "Максим - настоящий профессионал. Татуировка зажила быстро, результат превзошел ожидания.",
    },
    {
      name: "Алиса",
      rating: 5,
      text: "Спасибо Елене за прекрасную работу! Минималистичный дизайн получился идеальным.",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-tattoo-gray via-white to-tattoo-gray">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-tattoo-coral" size={32} />
              <h1 className="text-2xl font-bold text-tattoo-navy">TaToTori</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Главная" },
                { id: "about", label: "О студии" },
                { id: "portfolio", label: "Портфолио" },
                { id: "masters", label: "Мастера" },
                { id: "services", label: "Услуги" },
                { id: "reviews", label: "Отзывы" },
                { id: "contact", label: "Контакты" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-tattoo-coral ${
                    activeSection === item.id
                      ? "text-tattoo-coral"
                      : "text-tattoo-navy"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-tattoo-navy"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              {[
                { id: "home", label: "Главная" },
                { id: "about", label: "О студии" },
                { id: "portfolio", label: "Портфолио" },
                { id: "masters", label: "Мастера" },
                { id: "services", label: "Услуги" },
                { id: "reviews", label: "Отзывы" },
                { id: "contact", label: "Контакты" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium text-tattoo-navy hover:text-tattoo-coral transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
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

      {/* About Section */}
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
            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon
                  name="Award"
                  className="mx-auto text-tattoo-coral"
                  size={48}
                />
                <CardTitle className="text-tattoo-navy">Опыт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Более 10 лет работы в сфере татуировки
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon
                  name="Shield"
                  className="mx-auto text-tattoo-turquoise"
                  size={48}
                />
                <CardTitle className="text-tattoo-navy">Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Стерильное оборудование и одноразовые материалы
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon
                  name="Palette"
                  className="mx-auto text-tattoo-blue"
                  size={48}
                />
                <CardTitle className="text-tattoo-navy">Творчество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Индивидуальный подход к каждому клиенту
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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
            {portfolioItems.map((item) => (
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

      {/* Masters Section */}
      <section id="masters" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tattoo-navy mb-4">
              Наши мастера
            </h2>
            <p className="text-gray-600">Профессионалы своего дела</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master, index) => (
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

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tattoo-navy mb-4">
              Услуги и цены
            </h2>
            <p className="text-gray-600">Прозрачное ценообразование</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
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

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tattoo-navy mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-gray-600">Что говорят о нас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tattoo-navy mb-4">
              Контакты
            </h2>
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
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    className="text-tattoo-coral mr-3"
                    size={20}
                  />
                  <p className="text-gray-600">ул. Тверская, 15, Москва</p>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    className="text-tattoo-turquoise mr-3"
                    size={20}
                  />
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Mail"
                    className="text-tattoo-blue mr-3"
                    size={20}
                  />
                  <p className="text-gray-600">info@tatotori.ru</p>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    className="text-tattoo-navy mr-3"
                    size={20}
                  />
                  <p className="text-gray-600">Ежедневно с 10:00 до 22:00</p>
                </div>
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

      {/* Footer */}
      <footer className="bg-tattoo-navy text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" className="text-tattoo-coral" size={24} />
              <span className="text-xl font-bold">TaToTori</span>
            </div>
            <p className="text-center md:text-right text-gray-300">
              © 2024 TaToTori Studio. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
