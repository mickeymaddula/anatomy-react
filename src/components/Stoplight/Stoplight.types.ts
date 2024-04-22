export const STOPLIGHT_COLORS = ['red', 'yellow', 'green'] as const;
export type StoplightColor = (typeof STOPLIGHT_COLORS)[number];

export const STOPLIGHT_SIZES = ['assertive', 'subtle'] as const;
export type StoplightSize = (typeof STOPLIGHT_SIZES)[number];
