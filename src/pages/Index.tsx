import { MapPin, Building, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";


const departmentLogos = {
  "Accounts Department": "https://img.freepik.com/free-photo/indian-rupee-money-exchange-economy-concept_53876-139492.jpg",
  "Bridge Cell": "https://img.freepik.com/free-photo/bridge-over-river_1150-11117.jpg",
  "Bulk Collection System, Health Control room and Malaria": "https://img.freepik.com/free-photo/medical-banner-with-stethoscope_23-2149611199.jpg",
  "Colony Cell": "https://img.freepik.com/free-photo/modern-residential-building_1268-14735.jpg",
  "Death and Birth Department, Marriage": "https://img.freepik.com/free-photo/marriage-certificate-wedding-rings_93675-128320.jpg",
  "Drainage Department": "https://img.freepik.com/free-photo/sewer-drainage-system-city_1127-3169.jpg",
  "Electricity and maintenance department": "https://img.freepik.com/free-photo/electrician-working-electric-power-pole_1150-7005.jpg",
  "Establishment, Central Record and Central Store, Nigam Control room, Laboratory department": "https://img.freepik.com/free-photo/office-archive-storage_23-2149411260.jpg",
  "Garden Department": "https://img.freepik.com/free-photo/beautiful-park-garden_1417-1443.jpg",
  "Goshala Prakosth": "https://img.freepik.com/free-photo/cow-grazing-field_1150-11036.jpg",
  "IT Department": "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010127.jpg",
  "Law Department": "https://img.freepik.com/free-photo/law-justice-concept-legal-system_53876-138776.jpg",
  "Lease department": "https://img.freepik.com/free-photo/real-estate-agent-handing-over-keys_53876-14610.jpg",
  "NRY Department": "https://img.freepik.com/free-photo/urban-development-city-planning_23-2149411264.jpg",
  "Council Office": "https://img.freepik.com/free-photo/government-office-building_23-2149411270.jpg",
  "Planning Branch": "https://img.freepik.com/free-photo/urban-planning-development-concept_23-2149411300.jpg",
  "PWD Department": "https://img.freepik.com/free-photo/construction-concept-engineering-tools_23-2147768092.jpg",
  "Regional Park": "https://img.freepik.com/free-photo/park-with-green-trees_1150-11037.jpg",
  "Removal and kondwada": "https://img.freepik.com/free-photo/garbage-collection-truck_1150-11038.jpg",
  "Revenue Department": "https://img.freepik.com/free-photo/indian-rupee-money-exchange-economy-concept_53876-139492.jpg",
  "Shala Prakosth (Education Cell)": "https://img.freepik.com/free-photo/education-concept-books-graduation-cap_1150-11039.jpg",
  "Water Supply and tubewell": "https://img.freepik.com/free-photo/water-tap-flowing_1150-11040.jpg",
  "Workshop": "https://img.freepik.com/free-photo/industrial-workshop-tools_1150-11041.jpg",
  "yatayat department": "",
  "Zoo department": "https://img.freepik.com/free-photo/zebra-zoo_1150-11042.jpg",
  "DDARY & rain basera": "https://img.freepik.com/free-photo/homeless-shelter-building-exterior_23-2149411239.jpg",
  "deendayal(NULM)": "https://img.freepik.com/free-photo/social-welfare-community-support-concept_23-2149411243.jpg",
  "Election (nirvachan amd janganana)": "https://img.freepik.com/free-photo/indian-election-voting-concept_23-2149411256.jpg",
  "Stores": "https://img.freepik.com/free-photo/warehouse-storage-concept_23-2149411260.jpg",
  "science public works department": "https://img.freepik.com/free-photo/science-laboratory-equipment_1150-11043.jpg",
  "deprtment of general adminstration": "https://img.freepik.com/free-photo/office-archive-storage_23-2149411260.jpg",
  "urban poverty department": "https://img.freepik.com/free-photo/urban-development-city-planning_23-2149411264.jpg",
  "Commisioner": "https://img.freepik.com/free-photo/government-office-building_23-2149411270.jpg",
  "Swachhta & Thos": "https://img.freepik.com/free-photo/cleaning-service-concept_23-2149411286.jpg",
  "map department": "https://img.freepik.com/free-photo/city-map-navigation-concept_23-2149411275.jpg",
  "Fire": "https://img.freepik.com/free-photo/fire-emergency-service-concept_23-2149411280.jpg",
  "CM helpline": "https://img.freepik.com/free-photo/helpline-customer-service-concept_23-2149411285.jpg",
  "SBI ATM 1": "https://img.freepik.com/free-photo/indian-rupee-money-exchange-economy-concept_53876-139492.jpg",
  "City Bus pass": "https://img.freepik.com/free-photo/public-transport-concept-with-bus_23-2149411226.jpg"
};

const departments = [
  {
    name: "Accounts Department",
    name_hi: "लेखा विभाग",
    floor: 1,
    room: "101",
    link: "https://maps.app.goo.gl/cU8ECtJGzh7AzaSt7",
    id: "Accounts Department"
  },
  {
    name: "Bridge Cell",
    name_hi: "ब्रिज सेल",
    floor: 2,
    room: "202",
    link: "Bridge Cell",
    id: "property-tax-department"
  },
  {
    name: "Bulk Collection System, Health Control room and Malaria",
    name_hi: "थोक संग्रह प्रणाली, स्वास्थ्य नियंत्रण कक्ष और मलेरिया",
    floor: 3,
    room: "303",
    link: "https://maps.app.goo.gl/oZJbxy9mg6fgXp3c9",
    id: "Bulk Collection System, Health Control room and Malaria"
  },
  {
    name: "Colony Cell",
    name_hi: "कॉलोनी सेल",
    floor: 1,
    room: "105",
    link: "https://maps.app.goo.gl/PGJYdbmTh29HGqzG9",
    id: "Colony Cell"
  },
  {
    name: "Death and Birth Department, Marriage",
    name_hi: "मृत्यु एवं जन्म विभाग, विवाह",
    floor: 3,
    room: "310",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV9",
    id: "Death and Birth Department, Marriage"
  },
  {
    name: "Drainage Department",
    name_hi: "जल निकासी विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/PJ6jZL8d5B3YaY3i6",
    id: "Drainage Department"
  },
  {
    name: "Electricity and maintenance department",
    name_hi: "बिजली और रखरखाव विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/yFnqM4qy6dMyxB7H8",
    id: "Electricity and maintenance department"
  },
  {
    name: "Establishment, Central Record and Central Store, Nigam Control room, Laboratory department",
    name_hi: "स्थापना (स्थापना), केंद्रीय अभिलेख एवं केंद्रीय भण्डार, निगम नियंत्रण कक्ष, प्रयोगशाला विभाग",
    floor: 2,
    room: "250",
    link: "https://www.google.com/maps/place/22%C2%B043'19.7%22N+75%C2%B051'34.6%22E/@22.7221356,75.8570226,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.7221356!4d75.8595975?entry=ttu&g_ep=EgoyMDI1MDYxMC4xIKXMDSoASAFQAw%3D%3D",
    id: "Establishment, Central Record and Central Store, Nigam Control room, Laboratory department"
  },
  {
    name: "Garden Department",
    name_hi: "उद्यान विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/L83c1LKbHqCEf4F66",
    id: "Garden Department"
  },
  {
    name: "Goshala Prakosth",
    name_hi: "गोशाला प्रकोष्ठ",
    floor: 2,
    room: "250",
    link: "#court",
    id: "Goshala Prakosth"
  },
  {
    name: "IT Department",
    name_hi: "आईटी विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/bGgAa68YcLHW1yyZ9",
    id: "IT Department"
  },
  {
    name: "Law Department",
    name_hi: "विधि विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/C7xdkZ8rKs7iUCUi7",
    id: "Law Department"
  },
  {
    name: "Lease department",
    name_hi: "पट्टा विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/nNQ1JQXRbwnTnerq5",
    id: "Lease department"
  },
  {
    name: "NRY Department",
    name_hi: "एनआरवाई विभाग/शहरी गरीबी विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/rGShmW4kTybiogiW8",
    id: "NRY Department"
  },
  {
    name: "Council Office",
    name_hi: "परिषद कार्यालय",
    floor: 2,
    room: "250",
    link: "https://www.google.com/maps?q=22.7231693,75.8596246",
    id: "Planning Branch"
  },
  {
    name: "Planning Branch",
    name_hi: "योजना शाखा",
    floor: 2,
    room: "250",
    link: "https://www.google.com/maps?q=22.7231693,75.8596246",
    id: "Planning Branch"
  },
  {
    name: "PWD Department",
    name_hi: "पीडब्ल्यूडी विभाग",
    floor: 2,
    room: "250",
    link: "#court",
    id: "PWD Department"
  },
  {
    name: "Regional Park",
    name_hi: "क्षेत्रीय पार्क",
    floor: 2,
    room: "250",
    link: "#court",
    id: "Regional Park",
    img: ""
  },
  {
    name: "Removal and kondwada",
    name_hi: "निष्कासन और निपटान",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/5YY8RCTrntKDrAj49",
    id: "Removal and kondwada"
  },
  {
    name: "Revenue Department",
    name_hi: "राजस्व विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV9",
    id: "Revenue Department",
    img: "Revenue Department"
  },
  {
    name: "Shala Prakosth (Education Cell)",
    name_hi: "शाला प्रकोष्ठ (शिक्षा प्रकोष्ठ)",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV10",
    id: "Shala Prakosth (Education Cell)"
  },
  {
    name: "Water Supply and tubewell",
    name_hi: "जलापूर्ति एवं ट्यूबवेल",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV11",
    id: "Water Supply and tubewell"
  },
  {
    name: "Workshop",
    name_hi: "कार्यशाला",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV12",
    id: "Workshop"
  },
  {
    name: "yatayat department",
    name_hi: "यातायात (ट्रैफिक) डिपार्टमेंट",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/cvpwMiuZgcSihCqU6",
    id: "yatayat department"
  },
  {
    name: "Zoo department",
    name_hi: "चिड़ियाघर विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/n5H8rfn41LkBK7GV12",
    id: "Zoo department"
  },
  {
    name: "DDARY & rain basera",
    name_hi: "डी.डी.ए.आर.आई. एवं रैन बसेरा",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/nyCAGJeERkvhcKjn8",
    id: "DDARY & rain basera"
  },
  {
    name: " deendayal(NULM)",
    name_hi: "दीनदयाल{NULM}",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/nyCAGJeERkvhcKjn8",
    id: " deendayal (NULM)"
  },
  {
    name: "Election (nirvachan amd janganana)",
    name_hi: "इलेक्शन (निर्वाचन ामद जनगणना)",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/EJW9kDST6ZvqEzyh6",
    id: "Election (nirvachan amd janganana)"
  },
  {
    name: "Stores",
    name_hi: "स्टोर",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/EJW9kDST6ZvqEzyh6",
    id: "Stores "
  },
  {
    name: "science public works department",
    name_hi: "विज्ञान लोक निर्माण विभाग",
    floor: 2,
    room: "250",
    link: "science public works department",
    id: ""
  },
  {
    name: "deprtment of general adminstration",
    name_hi: "सामान्य प्रशासन विभाग",
    floor: 2,
    room: "250",
    link: "#court",
    id: " deprtment of general adminstration"
  },
  {
    name: "urban poverty department",
    name_hi: "शहरी गरीबी विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/rGShmW4kTybiogiW8",
    id: "urban poverty department "
  },
  {
    name: "Commisioner",
    name_hi: "आयुक्त",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/rGShmW4kTybiogiW8",
    id: "Commisioner "
  },
  {
    name: "Swachhta & Thos",
    name_hi: "स्वच्छता & ठोस",
    floor: 2,
    room: "250",
    link: "#court",
    id: "Swachhta & Thos "
  },
  {
    name: "map department",
    name_hi: "मानचित्र विभाग",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/XRo5QV6YYEYqzUDn9",
    id: "map department "
  },
  {
    name: "Fire",
    name_hi: "आग बुझाने का डिपो",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/kKNc4CJS738Wwxos6",
    id: "Fire"
  },
  {
    name: "CM helpline",
    name_hi: "सीएम हेल्पलाइन",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/qSwd46TtHhBnE7CU8",
    id: "CM helpline"
  },
  {
    name: "SBI ATM 1",
    name_hi: "एसबीआई एटीएम 1",
    floor: 2,
    room: "250",
    link: "https://www.google.com/maps?q=22.723224,75.8595619",
    id: "SBI ATM 1 "
  },
  {
    name: "City Bus pass",
    name_hi: "सिटी बस पास",
    floor: 2,
    room: "250",
    link: "https://maps.app.goo.gl/6uNA3nyyTxy9iAjXA",
    id: "City Bus pass "
  }
  
].map(dept => ({
  ...dept,
  logo: departmentLogos[dept.name] || "/img/Emblem_of_IMC_Indore.jpg" // fallback to IMC logo if no specific logo found
}));

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
              style={{ minHeight: '600px' }}
            >
              {/* Gradient Header */}
              <div className="h-2 bg-imc-accent"></div>
              <div className="p-6 flex flex-col h-full">
                {/* Department Logo */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-2xl shadow-md">
                    <img 
                      src={dept.logo}
                      alt={dept.name + " logo"}
                      className="h-28 w-28 object-contain"
                    />
                  </div>
                </div>
                {/* Department Name */}
                <h2 className="text-xl font-bold text-foreground mb-1 text-center group-hover:text-imc-primary transition-colors duration-300">
                  {dept.name}
                </h2>
                <div className="text-base text-muted-foreground mb-5 text-center font-semibold">
                  {dept.name_hi}
                </div>

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