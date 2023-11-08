export const getTime = () => {
  const hour = new Date().getHours();
  let message = "";
  if (hour <= 9) {
    message = "早上";
  } else if (hour <= 14) {
    message = "上午";
  } else if (hour <= 18) {
    message = "中午";
  } else {
    message = "晚上";
  }
  return message;
};
