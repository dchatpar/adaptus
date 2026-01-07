import type { Meta, StoryObj } from '@storybook/react';
import { BentoGrid, BentoTile } from './bento-grid';
import { Brain, Shield, Code, Rocket, Globe, TrendingUp } from 'lucide-react';

const meta: Meta<typeof BentoGrid> = {
  title: 'UI/BentoGrid',
  component: BentoGrid,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BentoGrid>;

export const Default: Story = {
  render: () => (
    <div className="p-8 bg-background min-h-screen">
      <BentoGrid columns={3} gap="lg">
        <BentoTile size="lg" gradient="linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)">
          <div className="flex h-full flex-col justify-between">
            <div>
              <Brain className="mb-4 h-12 w-12 text-white" />
              <h3 className="mb-3 text-3xl font-black text-white">CORTEX</h3>
              <p className="text-white/80">AI & Machine Learning</p>
            </div>
          </div>
        </BentoTile>

        <BentoTile size="md" gradient="linear-gradient(135deg, #ef4444 0%, #f97316 100%)">
          <Shield className="mb-4 h-10 w-10 text-white" />
          <h3 className="mb-2 text-2xl font-black text-white">SENTINEL</h3>
          <p className="text-sm text-white/80">Security & IT</p>
        </BentoTile>

        <BentoTile size="md" gradient="linear-gradient(135deg, #f59e0b 0%, #eab308 100%)">
          <Code className="mb-4 h-10 w-10 text-white" />
          <h3 className="mb-2 text-2xl font-black text-white">FORGE</h3>
          <p className="text-sm text-white/80">Software Development</p>
        </BentoTile>

        <BentoTile size="md" gradient="linear-gradient(135deg, #ec4899 0%, #f472b6 100%)">
          <Rocket className="mb-4 h-10 w-10 text-white" />
          <h3 className="mb-2 text-2xl font-black text-white">KINETIC</h3>
          <p className="text-sm text-white/80">Marketing</p>
        </BentoTile>

        <BentoTile size="md" gradient="linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)">
          <Globe className="mb-4 h-10 w-10 text-white" />
          <h3 className="mb-2 text-2xl font-black text-white">NEXUS</h3>
          <p className="text-sm text-white/80">Cloud Infrastructure</p>
        </BentoTile>

        <BentoTile size="md" gradient="linear-gradient(135deg, #10b981 0%, #34d399 100%)">
          <TrendingUp className="mb-4 h-10 w-10 text-white" />
          <h3 className="mb-2 text-2xl font-black text-white">VECTOR</h3>
          <p className="text-sm text-white/80">Logistics</p>
        </BentoTile>
      </BentoGrid>
    </div>
  ),
};

export const SmallGrid: Story = {
  render: () => (
    <div className="p-8 bg-background min-h-screen">
      <BentoGrid columns={4} gap="md">
        {Array.from({ length: 8 }).map((_, i) => (
          <BentoTile key={i} size="sm">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-2 text-sm font-semibold text-primary">Category</div>
              <div className="text-lg font-black text-white">Item {i + 1}</div>
            </div>
          </BentoTile>
        ))}
      </BentoGrid>
    </div>
  ),
};
