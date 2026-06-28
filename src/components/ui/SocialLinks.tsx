import { socialLinks } from "../../constants/social";

const SocialLinks = () => {
  return (
    <div className="mt-10 flex gap-5">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          title={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;