import Image from 'next/image';

const FooterCarousel = () => {
  const prefix = '/portfolio-template';

  return (
    <div>
      <div className="flex animate-infinite-scroll repeat-infinite space-x-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex items-center whitespace-nowrap font-clashDisplay font-normal text-xl space-x-2">
            <p>Let&apos;s work together! Contact me at</p>
            <div className='relative inline-block py-[.5rem] hover:bg-gray-400 bg-black text-white px-[1.5rem]'>
              <a
                href='#'
                onClick={() => navigator.clipboard.writeText('JOHNSMITH@GMAIL.COM')}
                className='hover:text-gray-400 cursor-pointer relative group'
              >
                johnsmith@gmail.com
                <span className='absolute left-1/2 transform -translate-x-1/2 translate-y-[-.5rem] bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Click to copy
                </span>
              </a>
            </div>
            <Image src={`${prefix}/star.svg`} alt="star" width={23} height={23} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterCarousel