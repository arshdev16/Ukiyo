import toast from "react-hot-toast";

export const notifySuccess = (message:string) => toast.success(message)
export const notifyError = (message:string) => toast.error(message)
export const notifyLoading = (message:string) => toast.loading(message)
