export const userService = async () => {
  //set timeout
  await new Promise((resolve, reject) => setTimeout(reject, 2000));
  return { data: { name: "Lavi", id: "123456" } };
};
