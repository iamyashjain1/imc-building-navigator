
import { MapPin, Building, QrCode } from "lucide-react";

const departments = [
  {
    name: "Water Department",
    floor: 1,
    room: "101",
    link: "#water",
    id: "water-department"
  },
  {
    name: "Property Tax",
    floor: 2,
    room: "202",
    link: "#property-tax",
    id: "property-tax-department"
  },
  {
    name: "Health & Sanitation",
    floor: 3,
    room: "303",
    link: "#health",
    id: "health-department"
  },
  {
    name: "Building Permits",
    floor: 1,
    room: "105",
    link: "#permits",
    id: "permits-department"
  },
  {
    name: "City Planning",
    floor: 3,
    room: "310",
    link: "#planning",
    id: "planning-department"
  },
  {
    name: "Municipal Court",
    floor: 2,
    room: "250",
    link: "#court",
    id: "court-department"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-border/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg">
              <Building className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                IMC Department Locator Map
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-4 text-lg">
            Navigate your way through the Municipal Building with ease
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
              
              <div className="p-8">
                {/* Department Name */}
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {dept.name}
                </h2>

                {/* Location Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <span className="text-muted-foreground font-semibold">Floor:</span>
                    <span className="text-foreground font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {dept.floor}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                    <span className="text-muted-foreground font-semibold">Room:</span>
                    <span className="text-foreground font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {dept.room}
                    </span>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-2xl border border-gray-200 shadow-inner">
                    <img
                      src="https://via.placeholder.com/120x120/e5e7eb/6b7280?text=QR"
                      alt={`QR Code for ${dept.name}`}
                      className="w-24 h-24 rounded-lg"
                    />
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={dept.link}
                  className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group shadow-lg hover:shadow-xl"
                >
                  <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Location</span>
                </a>
              </div>

              {/* Footer Badge */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-4 border-t border-gray-200/50">
                <div className="flex items-center justify-center space-x-2">
                  <QrCode className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Scan QR for instant directions
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Building Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">3</div>
              <div className="text-muted-foreground font-semibold">Total Floors</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">6</div>
              <div className="text-muted-foreground font-semibold">Active Departments</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-muted-foreground font-semibold">Emergency Services</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-muted-foreground">
              © 2024 Municipal Building Directory • For assistance, contact the main reception desk
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
