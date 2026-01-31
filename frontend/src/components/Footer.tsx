import { Link } from "react-router-dom";
import MailIcon from "./icons/MailIcon.tsx";
import GitHub from "./icons/GitHub.tsx";


/**
 * 网站的页脚组件
 */
export function Footer() {
  return (
    <div className="text-white w-full mt-auto flex flex-col items-center justify-between px-5 pt-16 mb-10 md:px-10 mx-auto sm:flex-row">
      <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:mt-0">
        © 2026 TempMail.cc
      </p>
      <div className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
        {/* 社交媒体和联系方式链接 */}
        <a
          href="mailto:hello@tempmail.cc"
          title="Email"
          className="text-gray-400 hover:text-gray-500">
          <MailIcon className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/oiov/vmail"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          className="text-gray-400 hover:text-gray-500">
          <GitHub />
        </a>
      </div>
    </div>
  );
}
