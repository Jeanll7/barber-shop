import Image from "next/image"

interface BannerProps {
  src: string
  alt: string
}

const Banner = ({ src, alt }: BannerProps) => {
  return (
    <div className="relative mt-6 h-[150px] w-full">
      <Image alt={alt} src={src} fill className="rounded-xl object-cover" />
    </div>
  )
}

export default Banner
