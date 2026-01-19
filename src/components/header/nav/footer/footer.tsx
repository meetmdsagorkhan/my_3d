import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa6"; // Changed icons
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { config } from "@/data/config"; // Import your config

export default function Footer() {
  return (
    <div className="flex w-full flex-col justify-end pb-[100px] px-[40px]">
      <div className="text-xs font-bold text-gray-500 mb-4">SOCIALS</div>
      <div className="flex gap-4">
        {/* LinkedIn */}
        {config.social.linkedin && (
          <Link href={config.social.linkedin} target="_blank">
            <Button variant="outline" size="icon" className="rounded-full">
              <FaLinkedin className="h-4 w-4" />
            </Button>
          </Link>
        )}
        
        {/* Facebook */}
        <Link href="https://www.facebook.com/meetsagorkhan/" target="_blank">
          <Button variant="outline" size="icon" className="rounded-full">
            <FaFacebook className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}