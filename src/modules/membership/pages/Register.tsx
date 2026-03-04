import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MemberForm from "../components/MemberForm";
import { registerMember } from "../services/membershipService";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (data: any) => {
    setError(null);

    if (!data.email.includes("@")) {
      setError("Invalid email format");
      return;
    }

    try {
      setLoading(true);

      await registerMember(data.email, data.password, {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        state: data.state,
        chapter: data.chapter,
        role: "member",
        membershipStatus: "active",
      });

      navigate("/membership/dashboard");
    } catch (err: any) {
      // Replaced alert() with setError
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>ATF Member Registration</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <MemberForm onSubmit={handleRegister} loading={loading} />
    </div>
  );
};

export default Register;