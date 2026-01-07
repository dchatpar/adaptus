import { Metadata } from 'next';
import {
  Lock,
  Key,
  Shield,
  Server,
  Database,
  Network,
  Eye,
  AlertCircle,
  FileKey,
  Layers,
} from 'lucide-react';

import { Section, SectionHeader } from '@/components/ui/section';

export const metadata: Metadata = {
  title: 'Security Controls | AdaptUs Group Security',
  description:
    'Technical security controls including IAM, encryption, network security, vulnerability management, and logging.',
};

const technicalControls = [
  {
    name: 'Identity & Access Management (IAM)',
    icon: Key,
    why: 'Prevents unauthorized access to systems and data through strict authentication and authorization.',
    how: [
      'MFA enforced for all privileged accounts (100% coverage)',
      'Role-Based Access Control (RBAC) with least privilege principle',
      'SCIM provisioning for automated user lifecycle management',
      'SSO integration with Okta for centralized authentication',
      'Quarterly access reviews and automated deprovisioning',
    ],
  },
  {
    name: 'Encryption',
    icon: Lock,
    why: 'Protects data confidentiality both in transit and at rest, preventing unauthorized data access.',
    how: [
      'TLS 1.3 enforced for all data in transit with HSTS',
      'AES-256 encryption for data at rest across all storage systems',
      'AWS KMS for key management with automatic rotation (90 days)',
      'Certificate rotation every 90 days with automated monitoring',
      'End-to-end encryption for sensitive customer data',
    ],
  },
  {
    name: 'Network Segmentation & Zero Trust',
    icon: Network,
    why: 'Limits blast radius of potential breaches and enforces defense-in-depth architecture.',
    how: [
      'Zero-trust network architecture with micro-segmentation',
      'Application-layer firewalls (WAF) on all public endpoints',
      'Private VPCs with strict security group rules',
      'Network traffic monitoring and anomaly detection',
      'VPN required for all remote access with MFA',
    ],
  },
  {
    name: 'Vulnerability Management',
    icon: AlertCircle,
    why: 'Proactively identifies and remediates security vulnerabilities before exploitation.',
    how: [
      'Weekly SAST (Static Application Security Testing) scans',
      'Monthly DAST (Dynamic Application Security Testing) scans',
      'Quarterly third-party penetration testing',
      'Automated dependency scanning (Snyk/Dependabot)',
      'Critical vulnerabilities patched within 48 hours',
    ],
  },
  {
    name: 'Logging & SIEM',
    icon: Eye,
    why: 'Provides visibility into security events and enables rapid incident detection and response.',
    how: [
      'Centralized logging with WORM (Write Once Read Many) retention',
      'Real-time SIEM integration for threat detection',
      'Log retention: 90 days hot, 365 days cold storage',
      'Automated alerting for security events',
      'Audit logs for all privileged actions',
    ],
  },
  {
    name: 'Secrets Management',
    icon: FileKey,
    why: 'Prevents hardcoded credentials and ensures secure storage of sensitive configuration.',
    how: [
      'AWS Secrets Manager / HashiCorp Vault for secret storage',
      'Automatic secret rotation every 90 days',
      'No secrets in source code (enforced via pre-commit hooks)',
      'Encrypted secrets in CI/CD pipelines',
      'Audit trail for all secret access',
    ],
  },
  {
    name: 'Endpoint Security',
    icon: Server,
    why: 'Protects employee devices from malware, ransomware, and unauthorized access.',
    how: [
      'EDR (Endpoint Detection and Response) on all devices',
      'Full disk encryption enforced (FileVault/BitLocker)',
      'Automatic security updates and patch management',
      'Mobile Device Management (MDM) for BYOD',
      'Remote wipe capability for lost/stolen devices',
    ],
  },
  {
    name: 'Data Loss Prevention (DLP)',
    icon: Database,
    why: 'Prevents unauthorized data exfiltration and ensures compliance with data protection regulations.',
    how: [
      'DLP policies enforced on email, cloud storage, and endpoints',
      'Automated classification of sensitive data',
      'Monitoring and alerting for data exfiltration attempts',
      'Encryption required for data transfers',
      'USB/external device restrictions',
    ],
  },
  {
    name: 'Infrastructure Security',
    icon: Layers,
    why: 'Hardens infrastructure against attacks and ensures secure configuration baselines.',
    how: [
      'Immutable infrastructure with Infrastructure as Code (Terraform)',
      'CIS Benchmarks enforced for all systems',
      'Automated configuration drift detection',
      'Container security scanning (Trivy/Snyk)',
      'Kubernetes security policies (Pod Security Standards)',
    ],
  },
  {
    name: 'Backup & Disaster Recovery',
    icon: Shield,
    why: 'Ensures business continuity and data recovery in case of incidents or disasters.',
    how: [
      'Automated daily backups with 30-day retention',
      'Geo-redundant backup storage (3 regions)',
      'RTO: 4 hours, RPO: 1 hour for critical systems',
      'Quarterly DR tests with documented results',
      'Immutable backups to prevent ransomware encryption',
    ],
  },
];

export default function ControlsPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="min-h-[50vh] flex items-center">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-800">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4">
              <span className="block text-5xl font-black tracking-tight text-slate-50 md:text-7xl">
                Security Controls
              </span>
            </h1>
            <p className="mb-12 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Our technical security controls are designed for defense-in-depth. Multiple layers of
              protection ensure that no single point of failure compromises security.
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Controls */}
      <Section background="grid">
        <SectionHeader
          subtitle="Defense in Depth"
          title="Technical Security Controls"
          description="Comprehensive security controls across infrastructure, application, and data layers."
          centered
        />

        <div className="container">
          <div className="space-y-6">
            {technicalControls.map((control) => (
              <div
                key={control.name}
                className="rounded-2xl border border-slate-800 bg-surface p-6 transition-all hover:border-primary/50"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-slate-900 p-3 ring-1 ring-slate-800">
                    <control.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-black text-slate-50">{control.name}</h3>
                    <div className="mb-4 rounded-lg bg-slate-900/50 p-3">
                      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Why it matters
                      </p>
                      <p className="mt-1 text-sm text-slate-400">{control.why}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
                        How we implement it
                      </p>
                      <ul className="space-y-2">
                        {control.how.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Security Metrics */}
      <Section background="elevated">
        <div className="container">
          <SectionHeader
            subtitle="Performance"
            title="Security Metrics"
            description="Key performance indicators for our security program."
            centered
          />

          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-black text-gradient">100%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                MFA Coverage
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-black text-gradient">&lt;48h</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Critical Patch SLA
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-black text-gradient">99.99%</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Uptime SLA
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-black text-gradient">24/7</div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                SOC Monitoring
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
