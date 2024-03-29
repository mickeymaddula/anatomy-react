export const CARD_VARIANTS = ['inverse', 'border-light', 'border-inverse'] as const;
export type CardVariant = (typeof CARD_VARIANTS)[number];
