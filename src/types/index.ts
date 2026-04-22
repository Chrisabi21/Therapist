// ─── Domain types ────────────────────────────────────────────────────────────

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  ok: boolean;
  message?: string;
}

// ─── UI utility types ─────────────────────────────────────────────────────────

export type Size = "sm" | "md" | "lg";
export type Variant = "primary" | "secondary" | "ghost" | "danger";

export interface WithChildren {
  children: React.ReactNode;
}

export interface WithClassName {
  className?: string;
}
