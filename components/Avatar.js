//next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
     <Image 
     src={'/avatar.png'} width={630} height={580} alt="" className="translate-x-0 w-full" />
     </div>;
};

export default Avatar;
