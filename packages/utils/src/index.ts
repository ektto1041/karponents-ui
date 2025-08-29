export function c(...args: string[]) {
  return args.filter(Boolean).join(" ");
}
