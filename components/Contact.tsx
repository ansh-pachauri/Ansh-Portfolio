import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

export const Contact = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 pt-20 md:pt-32">
      
      {/* Heading */}
      <div className="w-full text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-500">
          Get In Touch
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-600 text-base sm:text-lg max-w-2xl px-2 sm:px-0 mb-10">
        Let's Chat. Have a project in mind?{" "}
        <span className="block sm:inline">
          I'd love to hear from you! Reach out to me, and let's turn your ideas into reality.
        </span>
      </p>

      {/* Contact Links */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full max-w-md">
        
        <ContactLink
          href="https://github.com/ansh-pachauri"
          icon={<IconBrandGithub className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />}
          label="GitHub"
        />

        <ContactLink
          href="https://www.linkedin.com/in/ansh-pachauri-798912250/"
          icon={<IconBrandLinkedin className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />}
          label="LinkedIn"
        />

        <ContactLink
          href="mailto:anshpachauri303@gmail.com"
          icon={<IconBrandGmail className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />}
          label="Email"
        />

        <ContactLink
          href="https://x.com/pachauri_ansh03"
          icon={<IconBrandX className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />}
          label="X"
        />
      </div>
    </div>
  );
};

// Reusable Link Component
const ContactLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    className="group/btn shadow-input relative flex h-12 w-full items-center justify-start space-x-3 rounded-md bg-gray-950 px-4 font-medium text-white dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
  >
    {icon}
    <span className="text-md text-neutral-300 dark:text-neutral-300">{label}</span>
    <BottomGradient />
  </a>
);

// Gradient Hover Effect
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100"></span>
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100"></span>
  </>
);
