type FieldMap = string[];
interface CategoryFieldMapper {
  [category: string]: FieldMap;
}

export const categoryFieldMapper: CategoryFieldMapper = {
  "Wheels & Rims": ['finish', 'construction', 'orderBullets', 'wheeltireType', 'wheeltireStyle', 'width', 'diameter'],
  "Weight Distribution": [],
  "Seat Covers": ['pattern', 'material'],
}