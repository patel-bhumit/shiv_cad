import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex w-fit"
          >
            <LogoIcon />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/profile.php?id=61551488176412&mibextid=2JQ9oc"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://x.com/CadShiv28147"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/shiv_cad_designs"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/company/shiv-cad-designs/"
              className="opacity-60 hover:opacity-100"
            >
              Linkedin
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://api.whatsapp.com/send/?phone=918799591655&text=Hello%2C+I+am+Interested+in+knowing+more+about+your+service.&type=phone_number&app_absent=0"
              className="opacity-60 hover:opacity-100"
            >
              Whatsapp
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Official Info</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-5 text-center">
        <h3>
          &copy; 2024 Landing page made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/bhumit-p/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Bhumit Patel
          </a>
        </h3>
      </section>
    </footer>
  );
};
