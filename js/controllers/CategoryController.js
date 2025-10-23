import { getList } from "../models/CategoryModel.js";

export const getCategoryList = async () => {
  const data = await getList();
  return data;
};
