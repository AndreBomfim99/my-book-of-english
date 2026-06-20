import beVerb from './verbs/be';
import haveVerb from './verbs/have';
import doVerb from './verbs/do';
import makeVerb from './verbs/make';

// ============================================================
// VERB DETAILS — INDEX
// ============================================================
// Each verb has its own file in src/data/verbs/
//
// To add a new verb:
//   1. Create src/data/verbs/your-verb.js (copy be.js as a template)
//   2. Import it at the top of this file
//   3. Add it to the object below using the verb as the key
//      (must match the "verb" field in verbsData.js)
//
// Available sections in each verb file (all optional, HTML strings):
//   meanings, tenses, collocations, register, synonyms,
//   idioms, errors, phrasalVerbs, pronunciation,
//   extra: [ { title: '...', content: '...' }, ... ]
// ============================================================

export const verbDetails = {
  be: beVerb,
  have: haveVerb,
  do: doVerb,
  make: makeVerb,
};