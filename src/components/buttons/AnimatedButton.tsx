export function AnimatedButton({
  title,
  disabled,
  backgroundColor,
  icon,
  onClick,
}: {
  title: string;
  disabled?: boolean;
  backgroundColor: string;
  icon: unknown;
  onClick?: (() => void) | undefined;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${backgroundColor} group relative w-full cursor-pointer overflow-hidden rounded-md border-[1px] border-slate-100/20 px-3 pt-2 pb-2 uppercase text-white transition-colors disabled:cursor-not-allowed disabled:bg-gray-400
      `}
    >
      <div>
        <>{icon}</>
        <span className='relative z-20'>{title}</span>
        <span className='absolute left-[-42%] top-[-5px] z-10 h-[120%] w-[5px] rotate-[22deg] bg-white/10 transition-all group-hover:left-[52%]'></span>
        <span className='absolute left-[-42%] top-[-5px] z-10 h-[120%] w-[5px] rotate-[22deg] bg-white/10 transition-all group-hover:left-[60%]'></span>
        <span className='absolute left-[-42%] top-[-5px] z-10 h-[120%] w-[8px] rotate-[22deg] bg-white/10 transition-all group-hover:left-[70%]'></span>
      </div>
    </button>
  );
}

export default AnimatedButton;
