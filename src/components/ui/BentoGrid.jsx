import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  stars,
  email,
  profile,
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        
        <div className="flex items-center text-sm text-gray-400">
          <span className="p-1 bg-white rounded-full mr-2">{profile}</span>
          {email}
        </div>
        <div
          className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div
          className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
        <div className="mt-3">{stars}</div>
      </div>
    </div>
  );
};
