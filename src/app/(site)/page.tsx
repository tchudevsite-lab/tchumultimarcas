import Hero from '@/sections/Hero';
import FeaturedVehicles from '@/sections/FeaturedVehicles';
import WhyChooseUs from '@/sections/WhyChooseUs';
import BrowseByBrands from '@/sections/BrowseByBrands';
import FinancingSimulator from '@/sections/FinancingSimulator';
import Testimonials from '@/sections/Testimonials';
import LocationContact from '@/sections/LocationContact';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedVehicles />
      <WhyChooseUs />
      <BrowseByBrands />
      <FinancingSimulator />
      <Testimonials />
      <LocationContact />
      <WhatsAppFloat message="Olá, quero saber sobre os carros disponíveis!" />
    </main>
  );
}
