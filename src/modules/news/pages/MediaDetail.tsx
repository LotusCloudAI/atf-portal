import { useParams } from "react-router-dom";

export default function MediaDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Media Details</h1>
      <p>Media ID: {id}</p>
      {/* Fetch single media doc logic to be added later */}
    </div>
  );
}