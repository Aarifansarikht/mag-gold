import React from 'react';
import { 
  Droplets, 
  Layers, 
  ShieldCheck, 
  Factory, 
  Wrench, 
  Globe2,
  Waves,
  LayoutGrid,
  Truck,
  Building2,
  Construction,
  Warehouse,
  Fan,
  Shield,
  Zap,
  TowerControl,
  Home as HomeIcon,
  Maximize,
  DoorOpen,
  Settings,
  Fence
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Accreditation', path: '/accreditation' },
  { label: 'Contact', path: '/contact' }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "ARCHITECTURAL",
    highlight: "PRECISION",
    subtitle: "PREMIER DRAINAGE ACCESSORIES",
    description:
      "MAG & DMAG deliver bespoke industrial drainage solutions for the most complex construction hubs in Qatar and the UAE.",
    image: "/images/banner/banner-1.jpg",
    cta: "Explore Catalogue",
  },
  {
    id: 2,
    title: "STRUCTURAL",
    highlight: "INTEGRITY",
    subtitle: "HEAVY STEEL FABRICATION",
    description:
      "From stadiums to logistics warehouses, our steel systems define structural mastery across the Middle East.",
    image: "/images/banner/banner-2.jpg",
    cta: "Our Services",
  },
  {
    id: 3,
    title: "MANUFACTURING",
    highlight: "EXCELLENCE",
    subtitle: "IN-HOUSE QUALITY CONTROL",
    description:
      "State-of-the-art facilities in Doha and Dubai ensure 100% compliance with global ISO standards.",
    image: "/images/banner/banner-3.jpg",
    cta: "Get Consultation",
  },
];


export const PRODUCTS = [
  {
    id: "p1",
    title: "Drain Outlets",
    category: "Drainage Accessories",
    description: "Floor drains, cleanouts and shower drainage systems.",
    icon: <Droplets className="w-8 h-8" />,
    image: "/images/products/drain-outlets.jpg",
  },
  {
    id: "p2",
    title: "Rainwater Outlets",
    category: "Drainage Accessories",
    description: "Roof scupper drains and rainwater management systems.",
    icon: <Waves className="w-8 h-8" />,
    image: "/images/products/rainwater-outlets.jpg",
  },
  {
    id: "p3",
    title: "Parking & Area Drains",
    category: "Drainage Accessories",
    description: "Heavy duty drainage for parking and open areas.",
    icon: <Truck className="w-8 h-8" />,
    image: "/images/products/parking-area-drains.jpg",
  },
  {
    id: "p4",
    title: "Kitchen & Ablution Drains",
    category: "Drainage Accessories",
    description: "Hygienic drainage for kitchens and ablution zones.",
    icon: <Droplets className="w-8 h-8" />,
    image: "/images/products/kitchen-ablution-drains.jpg",
  },
  {
    id: "p5",
    title: "Gratings & Gullies",
    category: "Drainage Accessories",
    description: "Industrial gully gratings and trench covers.",
    icon: <LayoutGrid className="w-8 h-8" />,
    image: "/images/products/gratings-gully.jpg",
  },
  {
    id: "p6",
    title: "Manhole Covers",
    category: "Drainage Accessories",
    description: "Ductile iron and stainless steel manhole covers.",
    icon: <Layers className="w-8 h-8" />,
    image: "/images/products/manhole-covers.jpg",
  },
  {
    id: "p7",
    title: "Floor Drains",
    category: "Drainage Accessories",
    description: "Commercial and industrial floor drainage systems.",
    icon: <Droplets className="w-8 h-8" />,
    image: "/images/products/floor-drains.jpg",
  },
  {
    id: "p8",
    title: "Pipes & Valves",
    category: "Drainage Accessories",
    description: "Industrial piping and flow control valves.",
    icon: <Settings className="w-8 h-8" />,
    image: "/images/products/pipes-valves.jpg",
  },
  {
    id: "p9",
    title: "Pumice Aggregates",
    category: "Construction Materials",
    description: "Lightweight pumice aggregates for construction.",
    icon: <Layers className="w-8 h-8" />,
    image: "/images/products/pumice-aggregates.jpg",
  },
  {
    id: "p10",
    title: "Rolling Shutters",
    category: "Industrial Systems",
    description: "Automated rolling shutter solutions.",
    icon: <DoorOpen className="w-8 h-8" />,
    image: "/images/products/rolling-shutters.jpg",
  },
  {
    id: "p11",
    title: "Solar Lighting",
    category: "Energy Systems",
    description: "Outdoor solar lighting infrastructure.",
    icon: <Zap className="w-8 h-8" />,
    image: "/images/products/solar-lighting.jpg",
  },
  {
    id: "p12",
    title: "Garage Doors",
    category: "Industrial Systems",
    description: "Automated industrial garage doors.",
    icon: <HomeIcon className="w-8 h-8" />,
    image: "/images/products/garage-doors.jpg",
  },
];


export const STEEL_SYSTEMS = [
  { name: 'Structural Steel Systems', icon: <TowerControl size={20} /> },
  { name: 'Light Steel Systems', icon: <Maximize size={20} /> },
  { name: 'Steel Mezzanines', icon: <Layers size={20} /> },
  { name: 'Steel Suspended Floors', icon: <LayoutGrid size={20} /> },
  { name: 'Prefabricated Building Systems', icon: <Building2 size={20} /> },
  { name: 'Tarpaulin-Covered Construction', icon: <Warehouse size={20} /> },
  { name: 'Industrial Facilities', icon: <Factory size={20} /> },
  { name: 'Logistics Warehouses', icon: <Truck size={20} /> },
  { name: 'Steel Bridges', icon: <Construction size={20} /> },
  { name: 'Stadium Frameworks', icon: <Settings size={20} /> },
  { name: 'Villas', icon: <HomeIcon size={20} /> },
  { name: 'Retractable Glass Roofs', icon: <Fan size={20} /> },
  { name: 'Steel Transformer Doors', icon: <Zap size={20} /> },
  { name: 'Steel Energy Doors', icon: <Shield size={20} /> },
  { name: 'Steel Shutter Systems', icon: <DoorOpen size={20} /> },
  { name: 'Protective Railing Systems', icon: <Fence size={20} /> }
];

export const SERVICES = [
  {
    id: "s1",
    title: "Steel Fabrication",
    description: "Precision fabrication for industrial steel structures.",
    image: "/images/services/steel-fabrication-1.jpg",
    tags: ["Fabrication", "Heavy Steel"],
  },
  {
    id: "s2",
    title: "Structural Steel Systems",
    description: "Complex steel structural frameworks.",
    image: "/images/services/structural-steel.jpg",
    tags: ["Structural", "Engineering"],
  },
  {
    id: "s3",
    title: "Logistics Warehouses",
    description: "Large scale warehouse construction.",
    image: "/images/services/logistics-warehouse.jpg",
    tags: ["Warehousing", "Industrial"],
  },
  {
    id: "s4",
    title: "Prefab Buildings",
    description: "Prefabricated modular building systems.",
    image: "/images/services/prefab-buildings.jpg",
    tags: ["Prefab", "Modular"],
  },
  {
    id: "s5",
    title: "Mezzanine Steel Floors",
    description: "Steel mezzanine platforms and floors.",
    image: "/images/services/mezzanine-steel.jpg",
    tags: ["Mezzanine", "Platforms"],
  },
  {
    id: "s6",
    title: "Retractable Roof Systems",
    description: "Automated retractable roofing solutions.",
    image: "/images/services/retractable-systems.jpg",
    tags: ["Roof", "Automation"],
  },
  {
    id: "s7",
    title: "Protective Railings",
    description: "Industrial safety railing systems.",
    image: "/images/services/protective-railings.jpg",
    tags: ["Safety", "Railings"],
  },
  {
    id: "s8",
    title: "Steel Villas",
    description: "Luxury prefabricated steel villas.",
    image: "/images/services/steel-villas.jpg",
    tags: ["Residential", "Steel"],
  },
  {
    id: "s9",
    title: "Energy Doors",
    description: "High security industrial energy doors.",
    image: "/images/services/energy-doors.jpg",
    tags: ["Doors", "Security"],
  },
];


export const STATS = [
  { label: 'Market Tenure', value: '25+', icon: <Factory /> },
  { label: 'Fabricated Units', value: '1.5M', icon: <Wrench /> },
  { label: 'Global Compliance', value: 'ISO', icon: <ShieldCheck /> },
  { label: 'Regional Focus', value: 'GCC', icon: <Globe2 /> }
];

export const ACCREDITATIONS = [
  { name: 'ISO 9001:2015', logo: 'https://cdn-icons-png.flaticon.com/512/3252/3252110.png' },
  { name: 'ISO 14001', logo: 'https://cdn-icons-png.flaticon.com/512/3252/3252110.png' },
  { name: 'BS EN Certified', logo: 'https://cdn-icons-png.flaticon.com/512/3252/3252110.png' },
  { name: 'TUV Approved', logo: 'https://cdn-icons-png.flaticon.com/512/3252/3252110.png' }
];