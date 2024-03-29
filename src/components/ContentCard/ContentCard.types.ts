export const CARD_VARIANTS = ['border'] as const;
export type CardVariant = (typeof CARD_VARIANTS)[number];
