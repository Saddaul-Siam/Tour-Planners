import React from "react";
import useAuth from "../../../../Hooks/useAuth";

export default function DashboardHome() {
  const { user } = useAuth();
  return (
    <div>
      <h2>
        Welcome Dashboard Home{" "}
        <span className="text-info">{user.displayName}</span>
      </h2>
    </div>
  );
}
