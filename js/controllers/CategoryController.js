import { getList } from "../models/CategoryModel.js";

export const getCategoryList = async () => {
  const data = await getList();
  console.log(data);

  return data;
};
