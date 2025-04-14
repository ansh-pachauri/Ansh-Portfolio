import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

export const Contact = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center p-20 ">
      <div className="flex flex-col h-full w-full items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-purple-500">
          Get In Touch
        </h1>
      </div>
      <p className="text-gray-500 text-xl">
        Let's Chat. Have a project in mind?
        <span>
          I'd love to hear from you! Reach out to me, and let's turn your ideas
          into reality.
        </span>
      </p>
      <div className="flex flex-col gap-4 p-10 items-center justify-center">
        {/* GITHUB LINK */}
        <a
          href="#"
          className="group/btn shadow-input relative flex h-12  w-[200px] items-center justify-start space-x-2 rounded-md bg-gray-950  px-4 font-medium text-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
        >
          <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-md text-neutral-300 dark:text-neutral-300">
            GitHub
          </span>
          <BottomGradient />
        </a>

        {/* LINKEDIN LINK */}
        <a
          href="#"
          className="group/btn shadow-input relative flex h-12  w-[200px] items-center justify-start space-x-2 rounded-md bg-gray-950  px-4 font-medium text-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
        >
          <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-md text-neutral-300 dark:text-neutral-300">
            LinkedIn
          </span>
          <BottomGradient />
        </a>

        {/* EMAIL LINK */}
        <a
          href="#"
          className="group/btn shadow-input relative flex h-12  w-[200px] items-center justify-start space-x-2 rounded-md bg-gray-950  px-4 font-medium text-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
        >
          <IconBrandGmail className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-md text-neutral-300 dark:text-neutral-300">
            Email
          </span>
          <BottomGradient />
        </a>

        {/* X LINK */}
        <a
          href="#"
          className="group/btn shadow-input relative flex h-12  w-[200px] items-center justify-start space-x-2 rounded-md bg-gray-950  px-4 font-medium text-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
        >
          <IconBrandX className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
          <span className="text-md text-neutral-300 dark:text-neutral-300">
                X
          </span>
          <BottomGradient />
        </a>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute text-white text-4xl inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"></span>
      <span className="absolute text-white text-4xl inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"></span>
    </>
  );
};
