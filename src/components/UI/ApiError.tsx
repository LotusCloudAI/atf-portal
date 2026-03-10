interface Props {
  message: string;
}

const ApiError = ({ message }: Props) => {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded">
      {message}
    </div>
  );
};

export default ApiError;
