import { useRole } from "../../context/RoleContext";

const RoleSwitcher = () => {
  const { setRole } = useRole();

  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 border rounded">
      <select onChange={(e) => setRole(e.target.value as any)}>
        <option value="guest">Guest</option>
        <option value="member">Member</option>
        <option value="editor">Editor</option>
        <option value="state-admin">State Admin</option>
        <option value="super-admin">Super Admin</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;
