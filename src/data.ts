import {
  AmenityItem,
  FloorPlanUnit,
  CommuteDestination,
  SpecificationCategory,
  ConsultantItem,
  TrackRecordProject,
  MasterPlanPoint,
} from "./types";

export const projectSnapshot = {
  name: "ARS Svaasa",
  tagline: "Luxury Living, Elevated",
  developer: "ARS Infraa",
  developerFull: "ARS Infraa Pvt. Ltd.",
  developerBio:
    "ARS Infraa is dedicated to shaping landmark residential projects that seamlessly integrate architectural excellence, superior quality craftsmanship, and modern elevated lifestyle standards. Every space is meticulously planned to redefine urban living in Bengaluru.",
  address: "#001, 3rd Floor, SyNo.55/1, Yamare, Sarjapura Road, Bengaluru, Karnataka - 562125",
  locationName: "Sarjapura Road, Yamare, Bengaluru",
  phonePrimary: "+91 98765 43210",
  phoneSecondary: "+91 98765 43210",
  phoneRaw: "9876543210",
  email: "bhavishaproperties@gmail.com",
  website: "www.bhavishahomes.com",
  storeyCount: "G + 22 Floors Landmark",
  totalFloors: "G + 22 Floors",
  flatsCount: "88 Luxury Flats",
  openSpace: "Lush Landscaped Open Space",
  ceilingHeight: "Spacious & Well-Ventilated Layouts",
  clubhouseArea: "Modern Amenities & Recreation",
  amenitiesCount: "22+ Curated Amenities",
  parking: "Basement Parking Structure",
  unitGap: "Wide Corridors & Dedicated Fire Lobby",
  configuration: "3 BHK Luxury Residences (1839 & 2083 SQFT)",
  sizes: "3 BHK: 1839 & 2083 SQFT (Carpet Area: 1352 & 1537 SQFT)",
  lifts: "3 High-Speed Lifts (Schindler 8 Pax Capacity)",
};

export const keyHighlights = [
  { value: "G+22", label: "Storey Landmark", sub: "Architectural Beauty of ARS Svaasa" },
  { value: "88", label: "Flats", sub: "Exclusive High-Rise Community" },
  { value: "1839 & 2083", label: "SQFT Units", sub: "Spacious 3 BHK Floor Plans" },
  { value: "3", label: "Schindler Lifts", sub: "8 Passenger Capacity Each" },
  { value: "22+", label: "Curated Amenities", sub: "Sports, Leisure & Wellness" },
  { value: "Basement", label: "Dedicated Parking", sub: "Safe & Ample Parking Slots" },
  { value: "Sarjapura Rd", label: "Prime Location", sub: "Yamare, Bengaluru" },
  { value: "100%", label: "Power Backup", sub: "Generator with Load Controller" },
];

export const amenitiesData: AmenityItem[] = [
  {
    id: "sports-recreation",
    title: "Active Sports & Recreation",
    category: "HEALTH & SPORTS",
    tagline: "Designed for Movement, Energy & Active Play",
    description:
      "Comprehensive sports facilities and open recreation zones encourage active, energetic lifestyles for residents of all ages.",
    imageUrl: "/assets/silver_horizon/sport_basketball.webp",
    images: [
      "/assets/silver_horizon/sport_basketball.webp",
      "/assets/silver_horizon/sport_cricket.webp",
      "/assets/silver_horizon/sport_futsal.webp",
      "/assets/silver_horizon/indoor_gym.webp",
    ],
    bullets: [
      "Mini Football Ground",
      "Cricket Practice Pitch",
      "Basketball Court",
      "Badminton Court",
      "Outdoor Gym & Indoor Gym",
      "Skating Rink & Jogging Track",
      "Sand Pit & Rock Climbing Area",
    ],
  },
  {
    id: "leisure-wellness",
    title: "Leisure & Wellness Oasis",
    category: "SERENITY & RECREATION",
    tagline: "Relax, Unwind and Rejuvenate",
    description:
      "Relaxation and nature blend harmoniously with landscaped gardens, swimming pool, and quiet meditation zones.",
    imageUrl: "/assets/silver_horizon/indoor_pool.webp",
    images: [
      "/assets/silver_horizon/indoor_pool.webp",
      "/assets/silver_horizon/wellness_pool.webp",
      "/assets/silver_horizon/pet_park.webp",
    ],
    bullets: [
      "Swimming Pool with Dedicated Kids Pool",
      "Senior Citizen Park & Seating Pavilions",
      "Landscaped Garden Area & Mini Forest",
      "Dedicated Pets Park",
      "Yoga / Meditation Hall",
      "Indoor Games Room",
    ],
  },
  {
    id: "community-events",
    title: "Community & Social Hub",
    category: "COMMUNITY LIVING",
    tagline: "Where Neighbors Become Family",
    description:
      "Thoughtfully designed social spaces foster meaningful community connections and celebratory gatherings.",
    imageUrl: "/assets/silver_horizon/pavilion_amphitheatre.webp",
    images: [
      "/assets/silver_horizon/pavilion_amphitheatre.webp",
      "/assets/silver_horizon/kids_play_area.webp",
    ],
    bullets: [
      "Open-Air Amphitheater",
      "Children Play Area",
      "Party Hall for Celebrations",
      "Association Office",
    ],
  },
  {
    id: "safety-infrastructure",
    title: "Safety & Eco Infrastructure",
    category: "SUSTAINABILITY & SAFETY",
    tagline: "Reliable, Sustainable and Secure",
    description:
      "Modern infrastructure and round-the-clock safety systems provide total peace of mind for every family.",
    imageUrl: "/assets/silver_horizon/ev_charging.webp",
    images: [
      "/assets/silver_horizon/ev_charging.webp",
    ],
    bullets: [
      "24/7 Security with CCTV Surveillance & Security Room",
      "24/7 Power Backup Generator with Load Controller",
      "STP (Sewage Treatment Plant) for Recycled Water",
      "Dedicated Transformer Yard & Seismic Zone-II BIS Compliance",
      "3 High-Speed Lifts (Schindler 8 Passengers Capacity)",
      "Basement Parking Structure",
    ],
  },
];

export const floorPlansData: FloorPlanUnit[] = [
  {
    id: "unit-01",
    unitNo: "Flat No 1",
    title: "3 BHK Residence (Flat No 1)",
    type: "3 BHK",
    facing: "East Facing",
    sbua: "2083 Sft",
    carpetArea: "1537 Sft",
    imageUrl: "/assets/silver_horizon/unit_plan_01.webp",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    highlights: [
      "East Facing 3 BHK layout with SBUA of 2083 Sq.Ft and 1537 Sq.Ft Carpet Area",
      "Spacious Living & Dining area (27'11\" x 12'0\") with attached sit-out (8'0\" x 12'0\")",
      "Master Bedroom (12'0\" x 14'5\") with attached dress room (8'6\" x 8'6\") and private toilet",
      "Modern Kitchen (9'4\" x 9'10\") with attached Utility area (7'5\" x 4'7\")",
      "Two additional bedrooms (12'0\" x 13'11\" & 11'6\" x 13'11\") with attached balconies",
      "Wide corridors, dedicated fire lobby, and 3 Schindler lifts access",
    ],
  },
  {
    id: "unit-02",
    unitNo: "Flat No 2, 3, 4",
    title: "3 BHK Residence (Flat No 2, 3, 4)",
    type: "3 BHK",
    facing: "North Facing",
    sbua: "1839 Sft",
    carpetArea: "1352 Sft",
    imageUrl: "/assets/silver_horizon/unit_plan_02.webp",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    highlights: [
      "North Facing 3 BHK layout with SBUA of 1839 Sq.Ft and 1352 Sq.Ft Carpet Area",
      "Expansive Living & Dining area (25'4\" x 12'0\") with attached sit-out (10'7\" x 7'0\")",
      "Master Bedroom (12'0\" x 14'5\") with walk-in wardrobe (8'6\" x 4'5\") & ensuite toilet",
      "Ergonomic Kitchen (9'4\" x 8'11\") with laundry utility area (7'5\" x 4'6\")",
      "Two secondary bedrooms (10'0\" x 13'0\" & 10'0\" x 13'0\") with multiple balconies",
      "Cross ventilation designed for maximum airflow and natural ambient light",
    ],
  },
];

export const masterPlanLegends: MasterPlanPoint[] = [
  { id: 1, name: "Mini Football Ground", category: "Sports & Wellness" },
  { id: 2, name: "Mini Forest", category: "Nature & Landscape" },
  { id: 3, name: "Children Play Area", category: "Family & Kids" },
  { id: 4, name: "Amphitheater", category: "Family & Kids" },
  { id: 5, name: "Outdoor Gym", category: "Sports & Wellness" },
  { id: 6, name: "Senior Citizen Park", category: "Nature & Landscape" },
  { id: 7, name: "Skating Rink", category: "Sports & Wellness" },
  { id: 8, name: "Swimming Pool & Kids Pool", category: "Sports & Wellness" },
  { id: 9, name: "Pet Park", category: "Family & Kids" },
  { id: 10, name: "Landscape Garden Area", category: "Nature & Landscape" },
  { id: 11, name: "Sand Pit & Rock Climbing", category: "Family & Kids" },
  { id: 12, name: "Security Room", category: "Entrance & Arrival" },
  { id: 13, name: "Cricket Practice Pitch", category: "Sports & Wellness" },
  { id: 14, name: "Basketball Court", category: "Sports & Wellness" },
  { id: 15, name: "Badminton Court", category: "Sports & Wellness" },
  { id: 16, name: "Yoga / Meditation Hall", category: "Sports & Wellness" },
  { id: 17, name: "Association Office", category: "Infrastructure" },
  { id: 18, name: "Indoor Games", category: "Family & Kids" },
  { id: 19, name: "Gym", category: "Sports & Wellness" },
  { id: 20, name: "Party Hall", category: "Family & Kids" },
  { id: 21, name: "STP (Sewage Treatment Plant)", category: "Infrastructure" },
  { id: 22, name: "Transformer Yard", category: "Infrastructure" },
];

export const locationsData: CommuteDestination[] = [
  {
    id: "rga-techpark",
    name: "RGA Tech Park",
    distance: "Sarjapura Road",
    icon: "business_center",
    category: "Business",
    times: { driving: 10, transit: 15, walking: 40 },
  },
  {
    id: "wipro-campus",
    name: "Wipro New Campus",
    distance: "Sarjapura Road",
    icon: "apartment",
    category: "Business",
    times: { driving: 12, transit: 18, walking: 45 },
  },
  {
    id: "isme-school",
    name: "ISME International School",
    distance: "Yamare / Sarjapura",
    icon: "school",
    category: "School",
    times: { driving: 5, transit: 8, walking: 15 },
  },
  {
    id: "manipal-hospital",
    name: "Manipal Hospital",
    distance: "Sarjapura Road",
    icon: "local_hospital",
    category: "Hospital",
    times: { driving: 15, transit: 20, walking: 60 },
  },
  {
    id: "forum-mall",
    name: "Forum Prestige City Mall",
    distance: "Upcoming Mall",
    icon: "shopping_bag",
    category: "Leisure",
    times: { driving: 10, transit: 15, walking: 35 },
  },
];

export const nearbyPointsOfInterest = {
  businessHubs: [
    { name: "Sabic Technology Center", dist: "Sarjapura Road" },
    { name: "RGA Tech Park", dist: "Sarjapura Road" },
    { name: "Wipro New Campus", dist: "Sarjapura Road" },
    { name: "RMZ ECO Space", dist: "Outer Ring Road" },
    { name: "Infosys SEZ Tech Park", dist: "Sarjapura" },
  ],
  schools: [
    { name: "ISME International School", dist: "Yamare / Sarjapura" },
    { name: "Azim Premji University", dist: "Sarjapura Road" },
    { name: "Oakridge International School", dist: "Sarjapura" },
    { name: "Delhi Public School", dist: "East Bengaluru" },
    { name: "Greenwood International School", dist: "Sarjapura Road" },
    { name: "Manipal International School", dist: "Nearby" },
    { name: "Oxford Medical College & Hospital", dist: "Nearby" },
    { name: "Indus International School", dist: "Sarjapura" },
  ],
  hospitals: [
    { name: "Swastic Hospital", dist: "Nearby" },
    { name: "Manipal Hospital", dist: "Sarjapura Road" },
    { name: "Motherhood Hospital", dist: "Sarjapura Road" },
    { name: "Narayana Hrudayalaya", dist: "Nearby" },
  ],
  leisure: [
    { name: "Forum Prestige City Mall (Upcoming)", dist: "Sarjapura Road" },
    { name: "Decathlon", dist: "Sarjapura Road" },
    { name: "D-Mart", dist: "Sarjapura Road" },
    { name: "More Supermarket Food", dist: "Nearby" },
    { name: "City Hyper Market", dist: "Nearby" },
    { name: "Total Mall", dist: "Sarjapura Road" },
    { name: "Confident Oxygen Mall", dist: "Sarjapura" },
    { name: "Nature Walk Mall", dist: "Nearby" },
  ],
  infrastructure: [
    {
      title: "Sarjapura Road Arterial Highway",
      desc: "Direct connectivity to major tech hubs including RGA Tech Park, Wipro New Campus, and Outer Ring Road.",
      badge: "Prime Location",
      img: "/assets/silver_horizon/prr_expressway.webp",
    },
    {
      title: "Carmelaram Railway Station & Transit",
      desc: "Easy access to suburban rail and public transit networks for seamless cross-city commuting.",
      badge: "Transit Hub",
      img: "/assets/silver_horizon/metro_train.webp",
    },
  ],
};

export const specificationsData: SpecificationCategory[] = [
  {
    title: "Structure",
    icon: "architecture",
    items: [
      "R.C.C framed Structure (Aluminum form work concrete walls) with M-45 grade concrete and FE 550 D Grade TMT steel.",
      "Designed as per relevant BIS Code for earthquake resistance (seismic Zone-II), structurally efficient systems implemented.",
    ],
  },
  {
    title: "Doors & Windows",
    icon: "door_front",
    items: [
      "Main entrance door and Bed Rooms are engineered wood frames and shutters finished.",
      "Other doors are WPVC doors.",
      "UPVC sliding windows with mosquito mesh.",
    ],
  },
  {
    title: "Flooring",
    icon: "format_paint",
    items: [
      "Polished vitrified tiles flooring with 4\" skirting in drawing, kitchen, dining and bedrooms.",
      "Anti-skid ceramic tiles for balconies with RAK, Kajaria, Hindware or Equivalent Brand.",
    ],
  },
  {
    title: "Electrification & Generator",
    icon: "bolt",
    items: [
      "Anchor or equivalent make switches and concealed wiring.",
      "Power Back-up provided with load controller for each flat.",
      "Additional power back up for water pump and common area lightings.",
      "TV points in living room.",
    ],
  },
  {
    title: "Toilets & Plumbing",
    icon: "shower",
    items: [
      "Anti-skid ceramic tiles flooring and glazed ceramic tiles dadoing up to 8'0\".",
      "Jaquar or Totto or equivalent make ISI CP and sanitary fittings.",
      "CPVC water supply lines.",
    ],
  },
  {
    title: "Lifts & Safety",
    icon: "elevator",
    items: [
      "Lift with a capacity of 8 passengers of Schindler make (3 Lifts).",
      "Security room portal with 24/7 CCTV surveillance.",
      "Integrated STP (Sewage Treatment Plant) & Transformer Yard.",
    ],
  },
];

export const approvalsData = [
  { name: "Gram Panchayath Approval", authority: "Yamare / Sarjapura Gram Panchayath", status: "Sanctioned" },
  { name: "SEIAA Environmental Clearance", authority: "State Level Environment Impact Assessment Authority", status: "Cleared" },
  { name: "KSPCB Consent", authority: "Karnataka State Pollution Control Board", status: "Approved" },
  { name: "FIRE NOC", authority: "Karnataka State Fire & Emergency Services", status: "Sanctioned" },
  { name: "BESCOM Power", authority: "Bangalore Electricity Supply Company Limited", status: "Sanctioned" },
];

export const consultantsData: ConsultantItem[] = [
  {
    role: "Developer",
    name: "ARS INFRAA",
    address: "#001, 3rd Floor, SyNo.55/1, Yamare, Sarjapura Road, Bengaluru, Karnataka - 562125",
  },
  {
    role: "Design & Creative Studio",
    name: "MAARGA CREATIVE",
    address: "Bengaluru, Karnataka",
  },
];

export const trackRecordData: TrackRecordProject[] = [
  {
    title: "ARS SVAASA",
    type: "3 BHK Luxury Residences",
    location: "Sarjapura Road, Yamare, Bengaluru",
    imageUrl: "/assets/silver_horizon/tower_day_view.webp",
  },
  {
    title: "BHAVISHA HOMES",
    type: "Premium Residential Projects",
    location: "Bengaluru, Karnataka",
    imageUrl: "/assets/silver_horizon/track_casero.webp",
  },
];
