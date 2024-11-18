export const userService = async () => {
  //set timeout
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { data: { name: "Lavi", id: "123456" } };
};
