/**
 * tax-constants.ts — Single source of truth for US federal self-employment tax figures.
 *
 * RULES (see CLAUDE.md):
 * - Never hardcode a tax figure anywhere else. Import from here.
 * - This is YMYL content. Re-verify against IRS.gov at the start of each tax year
 *   and on any mid-year IRS update, then bump `lastVerified` and the source notes.
 * - Prose/MDX pages should render these values, not retype them.
 */

export const TAX_YEAR = 2026 as const;

/** When these numbers were last checked against IRS.gov. */
export const LAST_VERIFIED = "2026-05-31" as const;

/**
 * Core self-employment tax constants for the 2026 tax year.
 * Sources: IRS Self-Employment Tax; IRS estimated tax pages.
 */
export const SE_TAX = {
  /** Combined SE tax rate (Social Security + Medicare). */
  totalRate: 0.153,
  /** Social Security portion, applies up to the wage base. */
  socialSecurityRate: 0.124,
  /** Medicare portion, uncapped. */
  medicareRate: 0.029,
  /** 2026 Social Security wage base: the 12.4% applies only up to this. */
  socialSecurityWageBase: 184_500,
  /** Net earnings below this are not subject to SE tax. */
  netEarningsFloor: 400,
  /** SE tax is computed on 92.35% of net profit. */
  netEarningsMultiplier: 0.9235,
  /** Half of SE tax is deductible against income tax. */
  deductiblePortion: 0.5,
} as const;

/**
 * Additional Medicare Tax (high earners). 0.9% on wages/SE income above the
 * threshold for the filing status. Not refunded via the SE-tax deduction.
 */
export const ADDITIONAL_MEDICARE = {
  rate: 0.009,
  thresholds: {
    single: 200_000,
    marriedFilingJointly: 250_000,
    marriedFilingSeparately: 125_000,
    headOfHousehold: 200_000,
  },
} as const;

/** 2026 IRS business standard mileage rate, in dollars per mile (eff. Jan 1, 2026). */
export const MILEAGE_RATE_BUSINESS = 0.725;

/**
 * 2026 quarterly estimated tax due dates (ISO).
 * Note: Q4 of tax year 2026 is due in Jan 2027.
 * If a date falls on a weekend/holiday, the deadline shifts to the next business day.
 */
export const ESTIMATED_TAX_DUE_DATES_2026 = [
  { quarter: "Q1", periodCovered: "Jan 1 – Mar 31, 2026", due: "2026-04-15" },
  { quarter: "Q2", periodCovered: "Apr 1 – May 31, 2026", due: "2026-06-15" },
  { quarter: "Q3", periodCovered: "Jun 1 – Aug 31, 2026", due: "2026-09-15" },
  { quarter: "Q4", periodCovered: "Sep 1 – Dec 31, 2026", due: "2027-01-15" },
] as const;

/**
 * Safe-harbor thresholds to avoid the underpayment penalty. Pay the lesser of:
 * - 90% of current-year tax, or
 * - 100% of prior-year tax (110% if prior-year AGI > $150,000).
 */
export const SAFE_HARBOR = {
  currentYearPct: 0.9,
  priorYearPct: 1.0,
  priorYearPctHighIncome: 1.1,
  highIncomeAGIThreshold: 150_000,
} as const;

/**
 * 2026 federal standard deduction (used for rough income-tax estimation).
 * Verify annually — these are inflation-adjusted.
 */
export const STANDARD_DEDUCTION_2026 = {
  single: 16_100,
  marriedFilingJointly: 32_200,
  marriedFilingSeparately: 16_100,
  headOfHousehold: 24_150,
} as const;

export type FilingStatus = keyof typeof STANDARD_DEDUCTION_2026;

/**
 * 2026 federal ordinary income tax brackets.
 * Source: IRS Rev. Proc. 2025-32, Section 4.01 (Tax Rate Tables under § 1(j)(2)(A)-(D))
 * reflecting amendments by the One, Big, Beautiful Bill Act (OBBBA, Pub. L. 119-21).
 *
 * Each entry is the LOWER bound where the marginal rate begins. The top bracket
 * is open-ended. Tax is computed cumulatively — use `calcFederalIncomeTax` below
 * rather than building it ad-hoc.
 */
export const TAX_BRACKETS_2026 = {
  single: [
    { from: 0, rate: 0.1 },
    { from: 12_400, rate: 0.12 },
    { from: 50_400, rate: 0.22 },
    { from: 105_700, rate: 0.24 },
    { from: 201_775, rate: 0.32 },
    { from: 256_225, rate: 0.35 },
    { from: 640_600, rate: 0.37 },
  ],
  marriedFilingJointly: [
    { from: 0, rate: 0.1 },
    { from: 24_800, rate: 0.12 },
    { from: 100_800, rate: 0.22 },
    { from: 211_400, rate: 0.24 },
    { from: 403_550, rate: 0.32 },
    { from: 512_450, rate: 0.35 },
    { from: 768_700, rate: 0.37 },
  ],
  marriedFilingSeparately: [
    { from: 0, rate: 0.1 },
    { from: 12_400, rate: 0.12 },
    { from: 50_400, rate: 0.22 },
    { from: 105_700, rate: 0.24 },
    { from: 201_775, rate: 0.32 },
    { from: 256_225, rate: 0.35 },
    { from: 384_350, rate: 0.37 },
  ],
  headOfHousehold: [
    { from: 0, rate: 0.1 },
    { from: 17_700, rate: 0.12 },
    { from: 67_450, rate: 0.22 },
    { from: 105_700, rate: 0.24 },
    { from: 201_750, rate: 0.32 },
    { from: 256_200, rate: 0.35 },
    { from: 640_600, rate: 0.37 },
  ],
} as const;

/** Source links to cite on pages that use these figures. */
export const SOURCES = {
  seTax:
    "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes",
  estimatedTax: "https://www.irs.gov/faqs/estimated-tax",
  mileage:
    "https://www.irs.gov/newsroom/irs-sets-2026-business-standard-mileage-rate-at-725-cents-per-mile-up-25-cents",
  brackets:
    "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill",
} as const;

// ---------------------------------------------------------------------------
// Helper functions — keep the math in one place so the calculator and content
// pages stay consistent. All return plain numbers (dollars), unrounded.
// ---------------------------------------------------------------------------

/** Net earnings subject to SE tax = net profit × 92.35%. */
export function netEarningsFromSE(netProfit: number): number {
  if (netProfit <= 0) return 0;
  return netProfit * SE_TAX.netEarningsMultiplier;
}

/**
 * Self-employment tax for 2026.
 * Applies 12.4% Social Security up to the wage base and 2.9% Medicare uncapped.
 * Returns 0 if net earnings are below the $400 floor.
 */
export function calcSelfEmploymentTax(netProfit: number): number {
  const netEarnings = netEarningsFromSE(netProfit);
  if (netEarnings < SE_TAX.netEarningsFloor) return 0;

  const socialSecurity =
    Math.min(netEarnings, SE_TAX.socialSecurityWageBase) *
    SE_TAX.socialSecurityRate;
  const medicare = netEarnings * SE_TAX.medicareRate;
  return socialSecurity + medicare;
}

/** The income-tax deduction for half of SE tax. */
export function halfSETaxDeduction(netProfit: number): number {
  return calcSelfEmploymentTax(netProfit) * SE_TAX.deductiblePortion;
}

/** Business mileage deduction at the 2026 standard rate. */
export function mileageDeduction(milesDriven: number): number {
  if (milesDriven <= 0) return 0;
  return milesDriven * MILEAGE_RATE_BUSINESS;
}

/** The next upcoming 2026 estimated-tax due date relative to a given date. */
export function nextEstimatedDueDate(from: Date = new Date()) {
  return (
    ESTIMATED_TAX_DUE_DATES_2026.find((d) => new Date(d.due) >= from) ??
    ESTIMATED_TAX_DUE_DATES_2026[ESTIMATED_TAX_DUE_DATES_2026.length - 1]
  );
}

/**
 * Federal ordinary income tax for the 2026 brackets. `taxableIncome` is AGI
 * minus standard (or itemized) deduction — caller is responsible for getting
 * there. Negative or zero input yields $0.
 */
export function calcFederalIncomeTax(
  taxableIncome: number,
  filingStatus: FilingStatus,
): number {
  if (taxableIncome <= 0) return 0;
  const brackets = TAX_BRACKETS_2026[filingStatus];
  let tax = 0;
  for (let i = 0; i < brackets.length; i++) {
    const lower = brackets[i].from;
    const upper = i + 1 < brackets.length ? brackets[i + 1].from : Infinity;
    if (taxableIncome <= lower) break;
    const slice = Math.min(taxableIncome, upper) - lower;
    tax += slice * brackets[i].rate;
  }
  return tax;
}

/** 0.9% additional Medicare tax on wages + SE earnings above the filing-status threshold. */
export function calcAdditionalMedicareTax(
  totalEarnedIncome: number,
  filingStatus: FilingStatus,
): number {
  const threshold = ADDITIONAL_MEDICARE.thresholds[filingStatus];
  if (totalEarnedIncome <= threshold) return 0;
  return (totalEarnedIncome - threshold) * ADDITIONAL_MEDICARE.rate;
}

export interface EstimateInput {
  grossSEIncome: number;
  businessExpenses: number;
  filingStatus: FilingStatus;
  w2Income?: number;
  w2Withheld?: number;
}

export interface EstimateOutput {
  netProfit: number;
  seTax: number;
  halfSEDeduction: number;
  agi: number;
  standardDeduction: number;
  taxableIncome: number;
  federalIncomeTax: number;
  additionalMedicare: number;
  totalTax: number;
  owedAfterWithholding: number;
  setAsidePct: number;
  perQuarter: number;
}

/**
 * End-to-end estimate combining net profit → SE tax → income tax → set-aside.
 * Simplifications: ignores QBI deduction, itemized deductions, credits, and
 * state tax. Appropriate for a planning/set-aside tool — always pair with the
 * disclaimer.
 */
export function estimate(input: EstimateInput): EstimateOutput {
  const netProfit = Math.max(0, input.grossSEIncome - input.businessExpenses);
  const seTax = calcSelfEmploymentTax(netProfit);
  const halfSEDeduction = seTax * SE_TAX.deductiblePortion;
  const w2 = input.w2Income ?? 0;
  const withheld = input.w2Withheld ?? 0;

  const agi = netProfit + w2 - halfSEDeduction;
  const standardDeduction = STANDARD_DEDUCTION_2026[input.filingStatus];
  const taxableIncome = Math.max(0, agi - standardDeduction);

  const federalIncomeTax = calcFederalIncomeTax(taxableIncome, input.filingStatus);
  const additionalMedicare = calcAdditionalMedicareTax(
    netProfit * SE_TAX.netEarningsMultiplier + w2,
    input.filingStatus,
  );

  const totalTax = seTax + federalIncomeTax + additionalMedicare;
  const owedAfterWithholding = Math.max(0, totalTax - withheld);
  const setAsidePct = netProfit > 0 ? owedAfterWithholding / netProfit : 0;
  const perQuarter = owedAfterWithholding / 4;

  return {
    netProfit,
    seTax,
    halfSEDeduction,
    agi,
    standardDeduction,
    taxableIncome,
    federalIncomeTax,
    additionalMedicare,
    totalTax,
    owedAfterWithholding,
    setAsidePct,
    perQuarter,
  };
}
