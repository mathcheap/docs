import { FaDiscord } from "react-icons/fa";
import Link from "@/components/custom-link";

export const DiscordButton: React.FC = () => {
  return (
    <Link
      href="https://discord.gg/c2mKdBVt7n"
      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-200"
    >
      <FaDiscord className="size-6" />
    </Link>
  );
};
