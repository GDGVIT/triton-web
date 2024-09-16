import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-[#2E2E2E] text-foreground p-6 rounded-lg shadow-md font-jetbrains-mono mb-10">
      <h1 className="text-2xl font-bold mb-4  text-secondary">Triton - GDSC VIT's pastebin and URL shortener</h1>
      <p className="mb-4">Sharing short code samples, logs or links is now easier than ever!</p>
      <h2 className="text-xl font-semibold mt-6 text-secondary">Basics</h2>
      <p className="mb-4">
        The easiest way to use triton, is from inside your browser. Type or paste your content into the text area on the homepage, save it, and copy the link. You can now share this link whenever you want. If you want to create a short url from a link, simply paste the link in the text field. You
        can now copy the resulting link and it will automatically redirect everyone.
      </p>

      <h2 className="text-xl font-semibold mt-6 text-secondary">Editing</h2>
      <p className="mb-4">
        You can edit your documents by clicking the edit button. When you create your first document we will automatically create an (anonymous) account for you, so you will be able to edit your documents for as long as you keep our cookie. If you want a more permanent way to keep your pastes and
        edit them from multiple devices you can create an account. Pastes which you created before signing up will be automatically transferred to your account.
      </p>

      <h2 className="text-xl font-semibold mt-6 text-secondary">Markdown support</h2>
      <p className="mb-4">We support markdown documents formatting in the CommonMark spec. Append ".md" to the end of the url to render any paste as markdown.</p>

      <h2 className="text-xl font-semibold mt-6 text-secondary">Analytics</h2>
      <p className="mb-4">
        We support per-page analytics using a privacy-friendly analytics provider,{' '}
        <a href="#" className="text-primary hover:underline">
          Simple Analytics
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 text-secondary">Document lifetime</h2>
      <p className="mb-4">There is no explicit expiration time for documents on triton. Documents may however be removed at any time without notice.</p>

      <h2 className="text-xl font-semibold mt-6 text-secondary">Open source</h2>
      <p className="mb-4">
        Triton is fully open source and built on open source technology. All sources can be found on{' '}
        <a href="#" className="text-primary hover:underline">
          GitHub
        </a>
        . You can easily deploy it yourself wherever you want.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default page;
