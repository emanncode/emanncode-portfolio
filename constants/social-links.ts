import { TwitterIcon } from "@/components/ui/twitter"
import { LinkedinIcon } from "@/components/ui/linkedin"
import { GithubIcon } from "@/components/ui/github"
import { LinktreeIcon } from "@/components/ui/linktree"
import { WhatsappIcon } from "@/components/ui/whatsapp"
import { EmailIcon } from "@/components/ui/email"
import type { SocialLinkItem } from "@/types/social"

export const socialLinks: SocialLinkItem[] = [
  { link: "https://x.com/emanncode", label: "Twitter", Icon: TwitterIcon },
  {
    link: "https://www.linkedin.com/in/emmanuel-olajubaje-86178a42a/",
    label: "LinkedIn",
    Icon: LinkedinIcon,
  },
  {
    link: "https://github.com/emanncode",
    label: "Github",
    Icon: GithubIcon,
  },
  { link: "https://linktr.ee/emanncodedev", label: "Linktree", Icon: LinktreeIcon },
  { link: "https://wa.me/2349048801668", label: "Whatsapp", Icon: WhatsappIcon },
  { link: "mailto:olajubajeifeoluwa93@gmail.com", label: "Email", Icon: EmailIcon },
]

