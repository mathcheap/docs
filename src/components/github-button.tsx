import { FaGithub } from "react-icons/fa";
import Link from "@/components/custom-link";

export const GithubButton: React.FC = () => {
  return (
    <Link
      href="https://github.com/shenlu89/litedocs"
      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-200"
    >
      <FaGithub className="size-6" />
    </Link>
  );
};
