import { FaUser } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="flex gap-2 items-center">
      <span>
        <FaUser className="text-3xl" />
      </span>
      <span>Hadiuzzaman</span>
    </div>
  );
}
