import { ReactNode } from "react";

interface Props {
  role: string;
  allowed: string[];
  children: ReactNode;
}

const RoleGuard = ({ role, allowed, children }: Props) => {
  if (!allowed.includes(role)) {
    return <p className="p-6">Unauthorized Access</p>;
  }

  return <>{children}</>;
};

export default RoleGuard;
