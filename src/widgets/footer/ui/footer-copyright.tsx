export const FooterCopyright = () => {
  return (
    <p className='text-control-background border-t-foreground/10 flex w-full flex-row items-center justify-center gap-5 border-t px-5 pt-5 text-nowrap sm:gap-12'>
      <span>Nataliia Hrushanyk</span>

      <span>© {new Date().getFullYear()}</span>
    </p>
  );
};
