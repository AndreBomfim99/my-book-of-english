import simplePresent from './tenses/simple-present';
import presentContinuous from './tenses/present-continuous';
import presentPerfect from './tenses/present-perfect';
import presentPerfectContinuous from './tenses/present-perfect-continuous';
import simplePast from './tenses/simple-past';
import pastContinuous from './tenses/past-continuous';
import pastPerfect from './tenses/past-perfect';
import pastPerfectContinuous from './tenses/past-perfect-continuous';
import simpleFuture from './tenses/simple-future';
import futureContinuous from './tenses/future-continuous';
import futurePerfect from './tenses/future-perfect';
import futurePerfectContinuous from './tenses/future-perfect-continuous';
import howToChoose from './tenses/how-to-choose';

export const tenseCategories = [
  {
    id: 'present',
    number: 1,
    title: 'Present',
    tenses: [
      { id: 'simple-present', number: '1.1', title: 'Simple Present' },
      { id: 'present-continuous', number: '1.2', title: 'Present Continuous' },
      { id: 'present-perfect', number: '1.3', title: 'Present Perfect' },
      { id: 'present-perfect-continuous', number: '1.4', title: 'Present Perfect Continuous' },
    ],
  },
  {
    id: 'past',
    number: 2,
    title: 'Past',
    tenses: [
      { id: 'simple-past', number: '2.1', title: 'Simple Past' },
      { id: 'past-continuous', number: '2.2', title: 'Past Continuous' },
      { id: 'past-perfect', number: '2.3', title: 'Past Perfect' },
      { id: 'past-perfect-continuous', number: '2.4', title: 'Past Perfect Continuous' },
    ],
  },
  {
    id: 'future',
    number: 3,
    title: 'Future',
    tenses: [
      { id: 'simple-future', number: '3.1', title: 'Simple Future' },
      { id: 'future-continuous', number: '3.2', title: 'Future Continuous' },
      { id: 'future-perfect', number: '3.3', title: 'Future Perfect' },
      { id: 'future-perfect-continuous', number: '3.4', title: 'Future Perfect Continuous' },
    ],
  },
];

// Flat list (useful for prev/next navigation)
export const allTenses = tenseCategories.flatMap(cat =>
  cat.tenses.map(t => ({ ...t, category: cat.title }))
);

// ============================================================
// TENSE DETAILS
// ============================================================
// Each tense has its own file in src/data/tenses/
// To add a new tense:
//   1. Create src/data/tenses/your-tense-id.js (copy simple-present.js as a template)
//   2. Import it at the top of this file
//   3. Add it to the object below using the same id
// ============================================================

export const tenseDetails = {
  'simple-present': simplePresent,
  'present-continuous': presentContinuous,
  'present-perfect': presentPerfect,
  'present-perfect-continuous': presentPerfectContinuous,
  'simple-past': simplePast,
  'past-continuous': pastContinuous,
  'past-perfect': pastPerfect,
  'past-perfect-continuous': pastPerfectContinuous,
  'simple-future': simpleFuture,
  'future-continuous': futureContinuous,
  'future-perfect': futurePerfect,
  'future-perfect-continuous': futurePerfectContinuous,
  'how-to-choose': howToChoose,
};