export function useResumePrint() {
  const printResume = () => window.print();
  return { printResume };
}
