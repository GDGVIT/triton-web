import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-background flex items-center justify-between p-4 mx-4 font-jetbrains-mono">
      <div className="flex items-center">
        <Image alt="logo" src="/logo.svg" width={45} height={30} />
        <div className="flex flex-col space-y-1">
          <span className="text-xl text-[#8F8F8F] ml-6">Untitled file</span>
          <div className="flex space-x-4 ml-6">
            <button className="text-muted hover:text-muted-foreground underline decoration-secondary underline-offset-4">Workspace</button>
            <button className="text-muted hover:text-muted-foreground underline decoration-secondary underline-offset-4">Preview</button>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-8">
        <button className="bg-white text-black px-4 py-1 rounded-2xl hover:bg-secondary">Analytics</button>
        <button className="text-muted hover:text-muted-foreground">
          <Image alt="save icon" src="/save.svg" width={25} height={25} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
