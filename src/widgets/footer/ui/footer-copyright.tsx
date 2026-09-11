export const FooterCopyright = () => {
  return (
    <p className='text-nowrap items-center justify-center text-control-background flex flex-row gap-5 sm:gap-12 border-t border-t-foreground/10 w-full p-5'>
      <span>Nataliia Hrushanyk</span>

      <span>© {new Date().getFullYear()}</span>
    </p>
  );
};
