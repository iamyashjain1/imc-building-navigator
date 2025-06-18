import { MapPin, Building, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";


const departments = [
{
    name: "Accounts Department",
    floor: 1,
    room: "101",
    link: "https://maps.app.goo.gl/cU8ECtJGzh7AzaSt7",
    id: "Accounts Department"
  },
  // {
  //   name: "Bridge Cell",
  //   floor: 2,
  //   room: "202",
  //   link: "Bridge Cell",
  //   id: "property-tax-department"
  // },
  {
    name: "Bulk Collection System, Health Control room and Malaria",
    floor: 3,
    room: "303",
    link: "https://maps.app.goo.gl/oZJbxy9mg6fgXp3c9",
    id: "Bulk Collection System, Health Control room and Malaria"
  },
  {
    name: "Colony Cell",
    floor: 1,
    room: "105",
    link: "https://maps.app.goo.gl/PGJYdbmTh29HGqzG9",
    id: "Colony Cell"
  },
  {
    name: "Death and Birth Department, Marriage",
    floor: 3,
    room: "310",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV9",
    id: "Death and Birth Department, Marriage"
  },
  {
    name: "Drainage Department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/PJ6jZL8d5B3YaY3i6",
    id: "Drainage Department"
  },
  {
    name: "Electricity and maintenance department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/yFnqM4qy6dMyxB7H8",
    id: "Electricity and maintenance department"
  },
  {
    name: "Establishment, Central Record and Central Store, Nigam Control room, Laboratory department",
    floor: 2,
    room: "250",
    link: "https://www.google.com/maps/place/22%C2%B043'19.7%22N+75%C2%B051'34.6%22E/@22.7221356,75.8570226,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.7221356!4d75.8595975?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D",
    id: "Establishment, Central Record and Central Store, Nigam Control room, Laboratory department"
  },
  {
    name: "Garden Department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/L83c1LKbHqCEf4F66",
    id: "Garden Department"
  },
  // {
  //   name: "Goshala Prakosth",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: "Goshala Prakosth"
  // },
  {
    name: "IT Department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/bGgAa68YcLHW1yyZ9",
    id: "IT Department"
  },
  {
    name: "Law Department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/C7xdkZ8rKs7iUCUi7",
    id: "Law Department"
  },
  {
    name: "Lease department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/nNQ1JQXRbwnTnerq5",
    id: "Lease department"
  },
  {
    name: "NRY Department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/rGShmW4kTybiogiW8",
    id: "NRY Department"
  },
  {
    name: "Planning Branch",
    floor: 2,
    room: "250",
    link: "https://www.google.com/maps?q=22.7231693,75.8596246",
    id: "Planning Branch"
  },
  // {
  //   name: "PMAY Department",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: "PMAY Department"
  // },
  // {
  //   name: "PWD Department",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: "PWD Department"
  // },
  // {
  //   name: "Regional Park",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: "Regional Park",
  //   img: ""
  // },
  {
    name: "Removal and kondwada",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/5YY8RCTrntKDrAj49",
    id: "Removal and kondwada"
  },
  {
    name: "Revenue Department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV9",
    id: "Revenue Department",
    img: "Revenue Department"
  },
  {
    name: "Shala Prakosth (Education Cell)",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV10",
    id: "Shala Prakosth (Education Cell)"
  },
  // {
  //   name: "Water Supply and tubewell",
  //   floor: 2,
  //   room: "250",
  //   link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV11", "iski link galat h"
  //   id: "Water Supply and tubewell"
  // },
  {
    name: "Workshop",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV12",
    id: "Workshop"
  },
  {
    name: "yatayat department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/cvpwMiuZgcSihCqU6",
    id: "yatayat department"
  },
  // {
  //   name: "Zoo department",
  //   floor: 2,
  //   room: "250",
  //   link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV12",
  //   id: "Zoo department"
  // },
  {
    name: "DDARY & rain basera",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/nyCAGJeERkvhcKjn8",
    id: "DDARY & rain basera"
  },
  {
    name: " deendayal(NULM)",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/nyCAGJeERkvhcKjn8",
    id: " deendayal (NULM)"
  },
  {
    name: "Election (nirvachan amd janganana)",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/EJW9kDST6ZvqEzyh6",
    id: "Election (nirvachan amd janganana)"
  },
  {
    name: "Stores ",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/EJW9kDST6ZvqEzyh6",
    id: "Stores "
  },
  // {
  //   name: "science public works department",
  //   floor: 2,
  //   room: "250",
  //   link: "science public works department",
  //   id: ""
  // },
  // {
  //   name: "deprtment of general adminstration ",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: " deprtment of general adminstration"
  // },
  {
    name: "urban poverty department ",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/rGShmW4kTybiogiW8",
    id: "urban poverty department "
  },
  {
    name: "Commisioner ",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/rGShmW4kTybiogiW8",
    id: "Commisioner "
  },
  // {
  //   name: " Swachhta & Thos",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: "Swachhta & Thos "
  // },
  {
    name: " map department",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/XRo5QV6YYEYqzUDn9",
    id: "map department "
  },
  {
    name: "Fire  ",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/kKNc4CJS738Wwxos6",
    id: "Fire"
  },
  {
    name: "CM helpline ",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/qSwd46TtHhBnE7CU8",
    id: "CM helpline"
  },
  {
    name: "SBI ATM 1",
    floor: 2,
    room: "250",
    link: "https://www.google.com/maps?q=22.723224,75.8595619",
    id: "SBI ATM 1 "
  },
  {
    name: "City Bus pass",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/6uNA3nyyTxy9iAjXA",
    id: "City Bus pass "
  }
  
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm shadow-lg border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="mt-12 text-center">
          {/* <img
            src="src/img/Emblem_of_IMC_Indore.jpg"></img> */}
        </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="p-3 bg-imc-primary rounded-full shadow-lg">
              <Building className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-imc-primary">
                IMC Department Locator Map
              </h1>
              <div className="h-1 w-32 bg-imc-accent rounded-full mx-auto mt-2"></div>
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
              className="group bg-card backdrop-blur-sm rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className="h-2 bg-imc-accent"></div>
              
              <div className="p-8">
                {/* Department Name */}
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center group-hover:text-imc-primary transition-colors duration-300">
                  {dept.name}
                </h2>

                {/* Location Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                    <span className="text-muted-foreground font-semibold">Floor:</span>
                    <span className="text-imc-primary font-bold text-lg">
                      {dept.floor}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                    <span className="text-muted-foreground font-semibold">Room:</span>
                    <span className="text-imc-primary font-bold text-lg">
                      {dept.room}
                    </span>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex justify-center mb-8">
                  <div className="bg-secondary p-4 rounded-2xl border border-border shadow-inner">
                    <QRCodeSVG
  value={dept.link}
  size={96}
  bgColor="#ffffff"
  fgColor="#000000"
  level="Q"
  className="rounded-lg"
/>
</div>
                </div>
{/* <div>
<img src={dept.img}></img>
</div> */}
                  

                {/* Action Button */}
                <a
                  href={dept.link}
                  target="_blank"              // 👈 opens in new tab
                  rel="noopener noreferrer"    // 👈 security best practice
                  className="w-full bg-imc-primary text-primary-foreground py-4 px-6 rounded-xl font-semibold hover:bg-imc-primary/90 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group shadow-lg hover:shadow-xl"
                >
                  <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>View Location</span>
                </a>
              </div>

              {/* Footer Badge */}
              <div className="bg-secondary px-8 py-4 border-t border-border">
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
        <div className="mt-16 bg-card backdrop-blur-sm rounded-2xl shadow-xl border border-border p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-imc-primary">
            Building Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-secondary rounded-2xl border border-border">
              <div className="text-4xl font-bold text-imc-primary mb-2">3</div>
              <div className="text-muted-foreground font-semibold">Total Floors</div>
            </div>
            <div className="p-6 bg-muted rounded-2xl border border-border">
              <div className="text-4xl font-bold text-imc-primary mb-2">6</div>
              <div className="text-muted-foreground font-semibold">Active Departments</div>
            </div>
            <div className="p-6 bg-secondary rounded-2xl border border-border">
              <div className="text-4xl font-bold text-imc-accent mb-2">24/7</div>
              <div className="text-muted-foreground font-semibold">Emergency Services</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border">
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