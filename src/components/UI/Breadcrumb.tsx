import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const Breadcrumb = ({ title }: Props) => {
  return (
    <div className="text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>{" "}
      /{" "}
      <Link to="/news" className="hover:underline">
        News
      </Link>{" "}
      / {title}
    </div>
  );
};

export default Breadcrumb;
