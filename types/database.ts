export type TaskStatus = "pending" | "in_progress" | "completed" | "rejected";

export type ClientStatus =
  | "lead"
  | "in_progress"
  | "delivered"
  | "paid"
  | "archived";

export type ProjectStatus =
  | "active"
  | "completed"
  | "on_hold"
  | "cancelled";

export type InvoiceStatus = "draft" | "sent" | "paid" | "overdue";

export interface Profile {
  id: string;
  full_name: string | null;
  language_pref: "hi" | "en";
  device_context: string | null;
  onboarding_stage: "freelancer" | "agency" | "learner";
  created_at: string;
}

export interface Task {
  id: string;
  user_id: string;
  platform_id: string | null;
  project_id: string | null;
  title: string;
  description: string | null;
  ai_steps: unknown;
  deadline: string | null;
  payout_estimate: number | null;
  status: TaskStatus;
  created_at: string;
  completed_at: string | null;
}

export interface Project {
  id: string;
  user_id: string;
  client_id: string | null;
  title: string;
  type: "ui_ux" | "web" | "other" | null;
  status: ProjectStatus;
  brief: string | null;
  milestones: unknown;
  created_at: string;
}

export interface Client {
  id: string;
  user_id: string;
  name: string;
  company: string | null;
  email: string | null;
  phone: string | null;
  status: ClientStatus;
  budget: number | null;
  deadline: string | null;
  created_at: string;
}

export interface Invoice {
  id: string;
  user_id: string;
  client_id: string | null;
  project_id: string | null;
  amount: number;
  status: InvoiceStatus;
  issued_date: string | null;
  due_date: string | null;
  paid_date: string | null;
  created_at: string;
}

export interface EarningsLogEntry {
  id: string;
  user_id: string;
  source: "platform_task" | "invoice" | "other";
  source_id: string | null;
  amount: number;
  earned_date: string;
  notes: string | null;
  created_at: string;
}

export interface DailyDashboard {
  id: string;
  user_id: string;
  date: string;
  priorities: unknown;
  pending_tasks_snapshot: unknown;
  estimated_earnings: number | null;
  learning_goal: string | null;
  generated_at: string;
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Partial<Profile>;
        Update: Partial<Profile>;
      };

      tasks: {
        Row: Task;
        Insert: Partial<Task>;
        Update: Partial<Task>;
      };

      projects: {
        Row: Project;
        Insert: Partial<Project>;
        Update: Partial<Project>;
      };

      clients: {
        Row: Client;
        Insert: Partial<Client>;
        Update: Partial<Client>;
      };

      invoices: {
        Row: Invoice;
        Insert: Partial<Invoice>;
        Update: Partial<Invoice>;
      };

      earnings_log: {
        Row: EarningsLogEntry;
        Insert: Partial<EarningsLogEntry>;
        Update: Partial<EarningsLogEntry>;
      };

      daily_dashboards: {
        Row: DailyDashboard;
        Insert: Partial<DailyDashboard>;
        Update: Partial<DailyDashboard>;
      };
    };
  };
}
