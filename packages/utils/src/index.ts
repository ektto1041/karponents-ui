export function c(...args: (string | undefined)[]) {
  return args.filter(Boolean).join(" ");
}
