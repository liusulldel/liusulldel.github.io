# Shuo Li Liu — academic website

Personal GitHub Pages website for Shuo Li Liu.

Research focus: **Decision Theory, Stochastic Choice, Expected Utility**.

The site contains a CV download and source-linked research records with abstracts or clearly labeled summaries. The Education wording in the PDF is preserved from the author-provided CV.

## GitHub Pages

Repository: `liusulldel.github.io`. Publish the root of the default branch through Settings → Pages → Deploy from a branch.

No build step is required. `index.html`, `site.css`, `site.js`, the CV PDF, and `.nojekyll` are served directly. `publications.json` retains the displayed research metadata for future updates.

All paper abstracts and publications remain attributable to their respective authors and linked sources. No publication status should be inferred beyond the labels displayed on the site.

## Homepage design

A typography-led homepage featuring three compact research formulations with expandable scope notes, followed by the 12 research records, topic filters, search, abstracts, and CV. Main formulas are native HTML and remain readable without JavaScript or a math CDN. Existing abstract mathematics uses MathJax.

ADM is stated as an ordinal linear-representation result under exact translated-band demand. The Savage display states unavoidable dominance violation under the full-domain, real-interval and stated set-theoretic assumptions; the QEU display is shorthand for the strictly quasiconcave representation described in its scope note. ADM and QEU are labeled working research.

## Princeton mirror

Public site: https://sl6928.mycpanel.princeton.edu/ . The same static files can be served from the cPanel public web directory. Upload only the site files; preserve existing subdirectories and server configuration. No build step is required.

The compact revision emphasizes decision theory, stochastic choice, and expected utility, links the official Princeton Economics graduate directory, and retains only the 2025 regret-theory paper from the regret series.

The result headlines use native MathML for proper subscripts, quantifiers, preference relations, and an argmax representation. Definitions and maintained domain assumptions appear in the accompanying captions and scope notes.

The name appears as an 18px masthead. ADM uses the manuscript’s asset-indexed demand correspondence, suppressing fixed context with tildes. The Savage headline displays P1–P6 implying existence of a dominance violation; its scope note states the full-domain assumptions and V=L for uncountable state spaces.
