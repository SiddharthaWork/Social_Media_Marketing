import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link className="text-xl font-bold" href="#">
            WebStudio
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link className="text-sm font-medium hover:text-primary" href="#">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>SEO Services</DropdownMenuItem>
                <DropdownMenuItem>PPC Services</DropdownMenuItem>
                <DropdownMenuItem>Content Marketing</DropdownMenuItem>
                <DropdownMenuItem>Video Promotions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Industries <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>E-commerce</DropdownMenuItem>
                <DropdownMenuItem>Technology</DropdownMenuItem>
                <DropdownMenuItem>Healthcare</DropdownMenuItem>
                <DropdownMenuItem>Education</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link className="text-sm font-medium hover:text-primary" href="#">
              Career
            </Link>
          </div>
          <button className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Contact Us
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0F0B1E] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute right-0 bottom-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PROFESSIONAL SOCIAL MEDIA MARKETING
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              WebStudio Nepal is the best social media marketing agency in Nepal, offering excellent social media marketing
              services personalised for your company. As a leading social media marketing company, we provide comprehensive
              digital marketing services to elevate your brand&apos;s online presence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90">SEO Services</Button>
              <Button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90">PPC Services</Button>
              <Button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90">Content Marketing</Button>
              <Button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90">Video promotions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Social Media Marketing Agency
              <br />
              For Businesses in Nepal
            </h2>
            <p className="text-gray-600 mb-8">
              Being the top social media marketing company, we understand your target audience, examine their online activity,
              and choose the best time to publish content to increase interaction. As the top social media marketing company
              in Nepal, we produce excellent social media content that perfectly reflects your brand. Additionally, we make
              use of paid advertising techniques to improve conversion rates through efficient advertising and immediate
              visibility. Our writers and designers are committed to creating excellent content and running campaigns that
              increase the effect of your brand.
            </p>
            <button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90">Let&apos;s team up</button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-black mx-auto relative w-48">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Social Media Icons */}
                <div className="relative w-full h-full">
                  {[
                    { icon: "🌐", top: "0%", left: "50%", transform: "translate(-50%, -120%)" },
                    { icon: "📱", top: "15%", right: "0%", transform: "translate(120%, 0%)" },
                    { icon: "📺", bottom: "15%", right: "0%", transform: "translate(120%, 0%)" },
                    { icon: "💼", bottom: "0%", left: "50%", transform: "translate(-50%, 120%)" },
                    { icon: "🔍", bottom: "15%", left: "0%", transform: "translate(-120%, 0%)" },
                    { icon: "🐦", top: "15%", left: "0%", transform: "translate(-120%, 0%)" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl"
                      style={{
                        top: item.top,
                        left: item.left,
                        right: item.right,
                        bottom: item.bottom,
                        transform: item.transform,
                      }}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const items = [
    { src: "/globe.png", alt: "Globe", top: "0%", left: "50%", transform: "translate(-50%, -120%)" },
    { src: "/phone.png", alt: "Phone", top: "15%", right: "0%", transform: "translate(120%, 0%)" },
    { src: "/tv.png", alt: "TV", bottom: "15%", right: "0%", transform: "translate(120%, 0%)" },
    { src: "/briefcase.png", alt: "Briefcase", bottom: "0%", left: "50%", transform: "translate(-50%, 120%)" },
    { src: "/search.png", alt: "Search", bottom: "15%", left: "0%", transform: "translate(-120%, 0%)" },
    { src: "/bird.png", alt: "Bird", top: "15%", left: "0%", transform: "translate(-120%, 0%)" },
  ];


  import { Button } from "@/components/ui/button"
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Social Media Marketing Agency
            <br />
            For Businesses in Nepal
          </h2>
          <p className="text-gray-600">
            Being the top social media marketing company, we understand your target audience, examine their online activity,
            and choose the best time to publish content to increase interaction. As the top social media marketing company in
            Nepal, we produce excellent social media content that perfectly reflects your brand Additionally, we make use of
            paid advertising techniques to improve conversion rates through efficient advertising and immediate visibility.
            Our writers and designers are committed to creating excellent content and running campaigns that increase the
            effect of your brand.
          </p>
          <Button className="bg-[#31B1E7] hover:bg-[#31B1E7]/90 text-white px-8">Let&apos;s team up</Button>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-full bg-black mx-auto relative w-64">
            <div className="absolute inset-0">
              {[
                {
                  icon: <Facebook className="w-6 h-6 text-[#1877F2]" />,
                  position: "top-0 left-1/2 -translate-y-1/2 -translate-x-1/2",
                },
                {
                  icon: <Youtube className="w-6 h-6 text-[#FF0000]" />,
                  position: "top-1/4 right-0 translate-x-1/2 -translate-y-1/2",
                },
                {
                  icon: <Linkedin className="w-6 h-6 text-[#0A66C2]" />,
                  position: "bottom-1/4 right-0 translate-x-1/2 translate-y-1/2",
                },
                {
                  content: "G+",
                  position: "bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2",
                  className: "text-[#DB4437] font-bold",
                },
                {
                  icon: <Twitter className="w-6 h-6 text-[#1DA1F2]" />,
                  position: "bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2",
                },
                {
                  icon: <Instagram className="w-6 h-6 text-[#E4405F]" />,
                  position: "top-1/4 left-0 -translate-x-1/2 -translate-y-1/2",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`absolute ${item.position} w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center`}
                >
                  {item.icon || <span className={item.className}>{item.content}</span>}
                </div>
              ))}
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: "scale(1.6)" }}>
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <line
                    key={angle}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + 30 * Math.cos((angle * Math.PI) / 180)}%`}
                    y2={`${50 + 30 * Math.sin((angle * Math.PI) / 180)}%`}
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}