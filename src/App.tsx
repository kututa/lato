import { useCallback, useState } from "react";
import { Branches } from "./components/branches/Branches";
import { FinancingCalculator } from "./components/financing/FinancingCalculator";
import { Hero } from "./components/hero/Hero";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Showroom } from "./components/showroom/Showroom";
import { VehicleFilters } from "./components/showroom/VehicleFilters";
import { VehicleModal } from "./components/vehicle/VehicleModal";
import { vehicles } from "./data/vehicles";
import { useVehicleFilters } from "./hooks/useVehicleFilters";
import type { Vehicle } from "./types/vehicle";

const App = () => {
  const filters = useVehicleFilters(vehicles);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const closeModal = useCallback(() => setSelectedVehicle(null), []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VehicleFilters
          searchQuery={filters.searchQuery}
          activeCategory={filters.activeCategory}
          sortBy={filters.sortBy}
          onSearchChange={filters.setSearchQuery}
          onCategoryChange={filters.setActiveCategory}
          onSortChange={filters.setSortBy}
        />
        <Showroom
          vehicles={filters.filteredVehicles}
          onViewDetails={setSelectedVehicle}
        />
        <FinancingCalculator />
        <Branches />
      </main>
      <Footer />
      <VehicleModal vehicle={selectedVehicle} onClose={closeModal} />
    </>
  );
};
export default App;
