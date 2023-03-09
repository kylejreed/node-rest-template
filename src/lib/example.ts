import db from "@db";

export const getExample = () => {
  return db.example.findFirst();
};
