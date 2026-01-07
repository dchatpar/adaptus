import { Brain, Shield, Code2, TrendingUp, Network, Route, type LucideIcon } from 'lucide-react';

export interface Division {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const DIVISIONS: Division[] = [
  {
    id: 'cortex',
    name: 'ADAPTUS CORTEX™',
    tagline: 'AI & Automation',
    description: 'Central intelligence for enterprise automation and decision systems',
    icon: Brain,
    href: '/divisions/cortex',
  },
  {
    id: 'sentinel',
    name: 'ADAPTUS SENTINEL™',
    tagline: 'Managed IT & Cybersecurity',
    description: 'Defense-grade security and infrastructure monitoring',
    icon: Shield,
    href: '/divisions/sentinel',
  },
  {
    id: 'forge',
    name: 'ADAPTUS FORGE™',
    tagline: 'Software Development',
    description: 'Building durable, scalable enterprise solutions',
    icon: Code2,
    href: '/divisions/forge',
  },
  {
    id: 'kinetic',
    name: 'ADAPTUS KINETIC™',
    tagline: 'Digital Marketing',
    description: 'Data-driven growth and market momentum',
    icon: TrendingUp,
    href: '/divisions/kinetic',
  },
  {
    id: 'nexus',
    name: 'ADAPTUS NEXUS™',
    tagline: 'Talent Solutions',
    description: 'Connecting enterprise talent at scale',
    icon: Network,
    href: '/divisions/nexus',
  },
  {
    id: 'vector',
    name: 'ADAPTUS VECTOR™',
    tagline: 'Logistics & Distribution',
    description: 'Precision logistics and supply chain optimization',
    icon: Route,
    href: '/divisions/vector',
  },
];

export const COMPANY_INFO = {
  name: 'AdaptUs Group Inc.',
  tagline: 'Enterprise Technology. Global Scale.',
  description:
    'A global enterprise technology holding company delivering specialized solutions across AI, cybersecurity, software development, marketing, talent, and logistics.',
  headquarters: 'Vancouver, Canada',
  locations: ['Vancouver', 'Dubai', 'Mumbai'],
  founded: 2018,
};

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Divisions', href: '#divisions' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '/contact' },
];
