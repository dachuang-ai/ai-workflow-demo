export interface WorkflowNode {
  id: string;
  name: string;
  description: string;
  agentRef?: string;
  icon: string;
  status: 'idle' | 'running' | 'completed' | 'active';
  color: string;
}

export interface ScenarioCard {
  id: string;
  title: string;
  description: string;
  flowStep: string;
  icon: string;
}

export interface AgentCard {
  id: string;
  name: string;
  role: string;
  description: string;
  emoji: string;
  skills: string[];
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  metric: string;
  icon: string;
}

export interface LogMessage {
  id: string;
  time: string;
  type: 'info' | 'success' | 'agent' | 'system';
  nodeName?: string;
  content: string;
}
