export default function Home() {
  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zoek je stage",
    "url": "https://zoekjestage.nl",
    "description": "Platform om de perfecte stage te vinden op basis van jouw interesses",
    "inLanguage": "nl-NL",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zoekjestage.nl/zoeken?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zoek je stage",
    "url": "https://zoekjestage.nl",
    "logo": "https://zoekjestage.nl/logo.png",
    "description": "Zoek je stage helpt studenten de perfecte stage te vinden op basis van hun interesses",
    "sameAs": [
      "https://twitter.com/zoekjestage",
      "https://linkedin.com/company/zoekjestage"
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <header>
            <h1 className="text-4xl font-bold">zoekjestage.nl</h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Vind de perfecte stage op basis van jouw interesses
            </p>
          </header>
        </main>
      </div>
    </>
  );
}
