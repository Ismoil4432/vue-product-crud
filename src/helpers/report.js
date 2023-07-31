import { ElNotification } from "element-plus";

export const reportErr = (error) => {
  console.log(error);
  const message = error?.response?.data?.message;
  if (typeof message == "object") {
    for (let i in message) {
      setTimeout(() => {
        ElNotification({
          title: "Error",
          message: message[i],
          type: "warning",
        });
      }, i * 200);
    }
  } else {
    ElNotification({
      title: "Error",
      message: message,
      type: "warning",
    });
  }
};
