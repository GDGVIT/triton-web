import Pastebin from "./components/Pastebin";
import { MarkdownProvider } from "./components/MarkdownContent";

const Page = () => {
  return (
    <MarkdownProvider>
      <Pastebin />
    </MarkdownProvider>
  );
};

export default Page;
