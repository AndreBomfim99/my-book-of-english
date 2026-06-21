import unit01 from './units/unit01';
import unit02 from './units/unit02';

// ============================================================
// UNITS — INDEX
// ============================================================
// Each unit has its own file in src/data/units/
// Files are named unit01.js, unit02.js, unit03.js... for easy lookup.
//
// To add a new unit:
//   1. Create src/data/units/unitNN.js (copy unit01.js as a template)
//   2. Import it at the top of this file
//   3. Add it to the "units" array below
// ============================================================

export const units = [
  {
    id: 'unit01',
    number: 1,
    title: 'Unit 1: am / is / are',
    subtitle: 'The verb BE in the Present Simple',
    detail: unit01,
  },
  {
    id: 'unit02',
    number: 2,
    title: 'Unit 2: am / is / are (questions)',
    subtitle: 'Forming questions and short answers with BE',
    detail: unit02,
  },
];