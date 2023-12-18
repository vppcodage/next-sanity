export const replace = (val: string, replace_args: Record<string, string>) => {
  return Object.entries(replace_args).reduce(
    (prev, [key, value]) => prev.replace(key, value),
    val
  );
};
