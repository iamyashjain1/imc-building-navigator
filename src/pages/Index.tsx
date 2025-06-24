import React, { useState } from "react";
import { MapPin, Building, QrCode, Sun, Moon } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const departmentLogos = {
  "Accounts Department": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  "Bridge Cell": "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  "Bulk Collection System, Health Control room and Malaria": "https://cdn-icons-png.flaticon.com/512/2966/2966484.png",
  "Colony Cell": "https://cdn-icons-png.flaticon.com/512/616/616494.png",
  "Death and Birth Department, Marriage": "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
  "Drainage Department": "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  "Electricity and maintenance department": "https://cdn-icons-png.flaticon.com/512/1046/1046858.png",
  "Establishment, Central Record and Central Store, Nigam Control room, Laboratory department": "https://cdn-icons-png.flaticon.com/512/2991/2991108.png",
  "Garden Department": "https://cdn-icons-png.flaticon.com/512/616/616494.png",
  "Goshala Prakosth": "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  "IT Department": "https://cdn-icons-png.flaticon.com/512/2721/2721296.png",
  "Law Department": "https://cdn-icons-png.flaticon.com/512/3062/3062633.png",
  "Lease department": "https://cdn-icons-png.flaticon.com/512/1046/1046875.png",
  "NRY Department": "https://cdn-icons-png.flaticon.com/512/1046/1046876.png",
  "Council Office": "https://cdn-icons-png.flaticon.com/512/1046/1046877.png",
  "Planning Branch": "https://cdn-icons-png.flaticon.com/512/1046/1046878.png",
  "PWD Department": "https://cdn-icons-png.flaticon.com/512/1046/1046879.png",
  "Regional Park": "https://cdn-icons-png.flaticon.com/512/616/616494.png",
  "Removal and kondwada": "https://cdn-icons-png.flaticon.com/512/1046/1046880.png",
  "Revenue Department": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  "Shala Prakosth (Education Cell)": "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
  "Water Supply and tubewell": "https://cdn-icons-png.flaticon.com/512/1046/1046881.png",
  "Workshop": "https://cdn-icons-png.flaticon.com/512/1046/1046882.png",
  "yatayat department": "https://cdn-icons-png.flaticon.com/512/1046/1046883.png",
  "Zoo department": "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  "DDARY & rain basera": "https://cdn-icons-png.flaticon.com/512/1046/1046884.png",
  "deendayal(NULM)": "https://cdn-icons-png.flaticon.com/512/1046/1046885.png",
  "Election (nirvachan amd janganana)": "https://cdn-icons-png.flaticon.com/512/1046/1046886.png",
  "Stores": "https://cdn-icons-png.flaticon.com/512/1046/1046887.png",
  "science public works department": "https://cdn-icons-png.flaticon.com/512/1046/1046888.png",
  "deprtment of general adminstration": "https://cdn-icons-png.flaticon.com/512/1046/1046889.png",
  "urban poverty department": "https://cdn-icons-png.flaticon.com/512/1046/1046890.png",
  "Commisioner": "https://cdn-icons-png.flaticon.com/512/1046/1046891.png",
  "Swachhta & Thos": "https://cdn-icons-png.flaticon.com/512/1046/1046892.png",
  "map department": "https://cdn-icons-png.flaticon.com/512/1046/1046893.png",
  "Fire": "https://cdn-icons-png.flaticon.com/512/1046/1046894.png",
  "CM helpline": "https://cdn-icons-png.flaticon.com/512/1046/1046895.png",
  "SBI ATM 1": "https://cdn-icons-png.flaticon.com/512/1046/1046896.png",
  "City Bus pass": "https://cdn-icons-png.flaticon.com/512/1046/1046897.png"
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
  // {
  //   name: "Bridge Cell",
  //   name_hi: "ब्रिज सेल",
  //   floor: 2,
  //   room: "202",
  //   link: "Bridge Cell",
  //   id: "property-tax-department"
  // },
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
  // {
  //   name: "Goshala Prakosth",
  //   name_hi: "गोशाला प्रकोष्ठ",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: "Goshala Prakosth"
  // },
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
  // {
  //   name: "PWD Department",
  //   name_hi: "पीडब्ल्यूडी विभाग",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: "PWD Department"
  // },
  // {
  //   name: "Regional Park",
  //   name_hi: "क्षेत्रीय पार्क",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: "Regional Park",
  //   img: ""
  // },
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
  // {
  //   name: "science public works department",
  //   name_hi: "विज्ञान लोक निर्माण विभाग",
  //   floor: 2,
  //   room: "250",
  //   link: "science public works department",
  //   id: ""
  // },
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
  // {
  //   name: "Swachhta & Thos",
  //   name_hi: "स्वच्छता & ठोस",
  //   floor: 2,
  //   room: "250",
  //   link: "#court",
  //   id: "Swachhta & Thos "
  // },
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
  const [search, setSearch] = useState("");
  const [imgLoaded, setImgLoaded] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const filteredDepartments = departments.filter(
    dept =>
      dept.name.toLowerCase().includes(search.toLowerCase()) ||
      (dept.name_hi && dept.name_hi.includes(search))
  );
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className="min-h-screen bg-background dark:bg-zinc-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-card/95 dark:bg-zinc-800/95 backdrop-blur-sm shadow-lg border-b border-border dark:border-zinc-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDarkMode(d => !d)}
              className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors shadow"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />}
            </button>
          </div>
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
          {/* Search Bar */}
          <div className="flex justify-center mt-8">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search department (English or Hindi)"
                className="w-full px-5 py-3 pr-12 border border-border dark:border-zinc-700 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-imc-primary text-lg bg-white/80 dark:bg-zinc-800/80 backdrop-blur placeholder:text-gray-400 dark:placeholder:text-zinc-400 transition-all duration-200"
                style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.04)' }}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-imc-primary focus:outline-none"
                  aria-label="Clear search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {filteredDepartments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <span className="text-3xl font-bold text-imc-primary dark:text-imc-accent mb-4">No results found</span>
            <span className="text-lg text-muted-foreground dark:text-zinc-400">Try a different search term.</span>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepartments.map((dept, index) => (
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
                  <div className="p-4 bg-white rounded-2xl shadow-md relative" style={{ minHeight: 120, minWidth: 120 }}>
                    {!imgLoaded[dept.name] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="animate-spin h-8 w-8 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                      </div>
                    )}
                    <img
                      src={dept.logo}
                      alt={dept.name + " logo"}
                      className={`h-28 w-28 object-contain transition-opacity duration-300 ${imgLoaded[dept.name] ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setImgLoaded(l => ({ ...l, [dept.name]: true }))}
                      onError={e => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/img/Emblem_of_IMC_Indore.jpg";
                        setImgLoaded(l => ({ ...l, [dept.name]: true }));
                      }}
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
        )}

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