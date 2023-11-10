// next image
import Image from "next/image";


const Circles = () => {
  return (
    <div className="2-[200px] xl:w-[300px] absolute -right-16 -bottom-2 
    mix-blend-color-dodge animate-pulse duration-75 z-5">
    <Image
      src={'/circles.png'} 
      width={260}
      height={260}
      className="w-full h-full"
      alt=""

    />

    </div>
  )
};

export default Circles;
