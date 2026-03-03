import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MemberForm from "../components/MemberForm";
import { registerMember } from "../services/membershipService";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (data: any) => {
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
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>ATF Member Registration</h2>
      <MemberForm onSubmit={handleRegister} loading={loading} />
    </div>
  );
};

export default Register;