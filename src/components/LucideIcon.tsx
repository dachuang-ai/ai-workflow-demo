import React from 'react';
import {
  FormInput,
  Bot,
  Layers,
  Bell,
  Database,
  FileSpreadsheet,
  Cpu,
  Sparkles,
  UserCheck,
  BellRing,
  RefreshCw,
  TrendingUp,
  Zap,
  Activity,
  ArrowRight,
  Check,
  Play,
  Pause,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  ShieldAlert,
  Loader2,
  Calendar,
  Send,
  Sliders,
  Sparkle
} from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string; size?: number }> } = {
  FormInput,
  Bot,
  Layers,
  Bell,
  Database,
  FileSpreadsheet,
  Cpu,
  Sparkles,
  UserCheck,
  BellRing,
  RefreshCw,
  TrendingUp,
  Zap,
  Activity,
  ArrowRight,
  Check,
  Play,
  Pause,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  ShieldAlert,
  Loader2,
  Calendar,
  Send,
  Sliders,
  Sparkle
};

export default function LucideIcon({ name, className = '', size = 20 }: LucideIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <Sparkle className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
