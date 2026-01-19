import { config } from "@/data/config";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { SiX } from "react-icons/si";

const SocialMediaButtons = () => {
  return (
    <div className="flex gap-2">
      {/* Github */}
      {config.social.github && (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link href={config.social.github} target="_blank">
              <Button variant="ghost" size="icon">
                <FaGithub className="h-4 w-4" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
      )}

      {/* LinkedIn */}
      {config.social.linkedin && (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link href={config.social.linkedin} target="_blank">
              <Button variant="ghost" size="icon">
                <FaLinkedin className="h-4 w-4" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Linkedin</p>
          </TooltipContent>
        </Tooltip>
      )}

      {/* Twitter / X */}
      {config.social.twitter && (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link href={config.social.twitter} target="_blank">
              <Button variant="ghost" size="icon">
                <SiX className="h-4 w-4" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>X (Twitter)</p>
          </TooltipContent>
        </Tooltip>
      )}

      {/* Instagram */}
      {config.social.instagram && (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link href={config.social.instagram} target="_blank">
              <Button variant="ghost" size="icon">
                <FaInstagram className="h-4 w-4" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Instagram</p>
          </TooltipContent>
        </Tooltip>
      )}

      {/* Facebook */}
      {config.social.facebook && (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link href={config.social.facebook} target="_blank">
              <Button variant="ghost" size="icon">
                <FaFacebook className="h-4 w-4" />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Facebook</p>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};

export default SocialMediaButtons;