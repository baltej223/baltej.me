import { Content, Text } from "@/blogsUI/blogUI";
import { Divide } from "lucide-react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaStackOverflow,
  FaCode,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="h-[250px] flex flex-col justify-center w-full mt-20 bg-[var(--background-muted)] border-t-1 border-gray-400 dark:border-gray-600">
        <Content className="flex w-[70%] flex-col h-full items-center justify-around md:justify-between md:flex-row w-auto gap-y-10 md:pl-10 md:pr-10">
          <div className="h-auto">
            baltej.me
            <Text size="sm" className="opacity-75">
              © {new Date().getFullYear()} baltej.me. All rights reserved.
            </Text>
            <div className="mt-4 flex flex-row gap-x-7">
              <a
                href="https://github.com/baltej223#connect-with-me"
                className="text-sm text-gray-400 hover:underline"
              >
                Contact Me
              </a>
              <a
                href="https://baltej.me/pubkey.html"
                className="text-sm text-gray-400 hover:underline"
              >
                Public Key
              </a>
            </div>
          </div>
          <div className="w-max h-auto">
            <div className="flex space-x-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/baltej_223/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-300 transform hover:scale-110 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/Baltej_223"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300 transform hover:scale-110 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/baltej-singh-7789b4313"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition duration-300 transform hover:scale-110 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>

              {/* Stack Overflow */}
              <a
                href="https://stackoverflow.com/users/18618367/baltej-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition duration-300 transform hover:scale-110 transition duration-300"
              >
                <FaStackOverflow size={24} />
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/baltej_singh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition duration-300 transform hover:scale-110 transition duration-300"
              >
                <FaCode size={24} />
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@baltejsingh21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-300 transform hover:scale-110 transition duration-300"
              >
                <FaYoutube size={24} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/baltej223"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-800 transition duration-300 transform hover:scale-110 transition duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
}
