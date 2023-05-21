import Image from 'next/image'

const Logo = ({ alt = 'logo' }: { alt?: string }) => (
  <>
    <Image
      src="/assets/logo/coding-logo-with-text-light.svg"
      alt={alt}
      width={152}
      height={40}
      className="max-w-full dark:hidden"
    />
    <Image
      src="/assets/logo/coding-logo-with-text-dark.svg"
      alt={alt}
      width={152}
      height={40}
      className="hidden max-w-full dark:block"
    />
  </>
)

export default Logo
