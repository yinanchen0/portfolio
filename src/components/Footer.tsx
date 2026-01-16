const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Yinan Chen. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Designed & built with care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
