
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
    id: 'p1',
    title: 'Drain Outlets',
    category: 'Drainage Accessories',
    description: 'Bespoke Floor Drains, Cleanouts, and Shower Drains engineered for high hydraulic flow.',
    icon: <Droplets className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800'
  },
  {
    id: 'p2',
    title: 'Rainwater Systems',
    category: 'Drainage Accessories',
    description: 'Roof Scupper Drains and high-capacity outlets designed for extreme weather loads.',
    icon: <Waves className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1621905252507-b354bcadc0d6?q=80&w=800'
  },
  {
    id: 'p3',
    title: 'Parking & Area Drains',
    category: 'Drainage Accessories',
    description: 'Heavy-duty structural drains for commercial parking zones and urban infrastructure.',
    icon: <Truck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1573486145949-18244fe27426?q=80&w=800'
  },
  {
    id: 'p4',
    title: 'Kitchen & Ablution',
    category: 'Drainage Accessories',
    description: 'Hygiene-focused drainage solutions and custom-spec ablution gratings.',
    icon: <Droplets className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800'
  },
  {
    id: 'p5',
    title: 'Gratings & Gullies',
    category: 'Drainage Accessories',
    description: 'Industrial-grade gully gratings and security covers for public area management.',
    icon: <LayoutGrid className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1605273523318-706786c2367b?q=80&w=800'
  },
  {
    id: 'p6',
    title: 'Manhole Covers',
    category: 'Drainage Accessories',
    description: 'Certified ductile iron and stainless steel covers meeting EN 124 global benchmarks.',
    icon: <Layers className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070'
  }
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
    id: 's1',
    title: 'Structural Steel Mastery',
    description: 'Heavy structural frameworks and complex architectural steel systems.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800',
    tags: ['Heavy Steel', 'Structural', 'Suspended']
  },
  {
    id: 's2',
    title: 'Logistics Infrastructure',
    description: 'Large-scale warehouses and industrial facilities designed for heavy operational loads.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
    tags: ['Warehouses', 'Industrial', 'Logistics']
  },
  {
    id: 's3',
    title: 'Architectural Frameworks',
    description: 'Specialized systems like retractable roofs and stadium steel frameworks.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800',
    tags: ['Stadiums', 'Retractable', 'Custom']
  },
  {
    id: 's4',
    title: 'Industrial Door Systems',
    description: 'High-security energy doors, transformer doors, and steel shutter systems.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
    tags: ['Transformer', 'Shutter', 'Energy']
  }
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
