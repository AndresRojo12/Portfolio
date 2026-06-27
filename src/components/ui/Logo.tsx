import { siteConfig } from "../../config/site";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 font-black text-black">
        {siteConfig.shortName}
      </div>

      <div>

        <h2 className="font-bold">
          {siteConfig.name}
        </h2>

        <p className="text-sm text-slate-400">
          {siteConfig.role}
        </p>

      </div>

    </div>
  );
};

export default Logo;