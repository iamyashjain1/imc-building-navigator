
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <Building className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">IMC Department Locator</h1>
          </div>
          <p className="text-center text-muted-foreground mt-2">
            Find your way to any department in the Municipal Building
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Department Name */}
                <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
                  {dept.name}
                </h2>

                {/* Location Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-medium">Floor:</span>
                    <span className="text-foreground font-semibold">{dept.floor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-medium">Room:</span>
                    <span className="text-foreground font-semibold">{dept.room}</span>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-100 p-3 rounded-lg border border-border">
                    <img
                      src="https://via.placeholder.com/100x100/e5e7eb/6b7280?text=QR"
                      alt={`QR Code for ${dept.name}`}
                      className="w-20 h-20"
                    />
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href={dept.link}
                  className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>View Location</span>
                </a>
              </div>

              {/* Footer Badge */}
              <div className="bg-muted px-6 py-3 border-t border-border">
                <div className="flex items-center justify-center space-x-2">
                  <QrCode className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Scan QR for directions
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            Building Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-muted-foreground">Floors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-muted-foreground">Departments</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Emergency Services</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-muted-foreground">
          <p className="text-sm">
            © 2024 Municipal Building Directory. For assistance, contact the main desk.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
