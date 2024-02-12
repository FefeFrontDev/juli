const BadgeAnimatedGradientBorder = () => {
    return (
      <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#70FF8B_50%,#30FF24_100%)]' />
        <div className='inline-flex h-full text-green-500 w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-xs font-medium backdrop-blur-3xl'>
          Hace tu pedido acá
        </div>
      </span>
    );
  };
  
  export default BadgeAnimatedGradientBorder;
  