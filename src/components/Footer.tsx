import Icon from "@/components/ui/icon";

export const Footer: React.FC = () => {
  return (
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
  );
};
