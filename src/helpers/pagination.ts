import { Type } from "typescript";

export const getPagesCount = (totalDocs: number, size: number) =>
  totalDocs / size;

export const getPaginatedDocs = (docs: Type[], page: number, size: number) => {
  const startPosition = (page - 1) * size;
  return docs.slice(startPosition, startPosition + size);
};
