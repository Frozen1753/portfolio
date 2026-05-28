export const trimIndent = (str: string) => {
  const lines = str.split('\n');
  const minIndent = lines
    .filter(line => line.trim().length > 0)
    .reduce((min, line) => {
      const indent = line.search(/\S/);
      return indent >= 0 ? Math.min(min, indent) : min;
    }, Infinity);

  return lines
    .map(line => (line.trim().length > 0 ? line.slice(minIndent) : line))
    .join('\n')
    .trim();
};