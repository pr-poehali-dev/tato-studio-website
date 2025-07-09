import { PortfolioItem, Master, Service, Review, NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О студии" },
  { id: "portfolio", label: "Портфолио" },
  { id: "masters", label: "Мастера" },
  { id: "services", label: "Услуги" },
  { id: "reviews", label: "Отзывы" },
  { id: "contact", label: "Контакты" },
];

export const portfolioItems: PortfolioItem[] = [
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

export const masters: Master[] = [
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

export const services: Service[] = [
  {
    name: "Татуировка",
    price: "от 3000₽",
    description: "Любой сложности и размера",
  },
  {
    name: "Эскиз",
    price: "от 1500₽",
    description: "Индивидуальный дизайн",
  },
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

export const reviews: Review[] = [
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
