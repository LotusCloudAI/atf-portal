interface Props {
  text: string;
}

const Badge = ({ text }: Props) => {
  return (
    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
      {text}
    </span>
  );
};

export default Badge;
