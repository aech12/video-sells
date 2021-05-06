import { toast } from "react-toastify";

const notifyErr = (e) => toast.error(`${e}`);

const notifySuccess = (msj) => toast.info(`${msj}`);

const notifyInfo = (msj) => toast.success(`${msj}`);

const notifyWarn = (msj) => toast.warn(`${msj}`);

const notify = (msj) => toast(`${msj}`);

export { notifyErr, notifySuccess, notifyInfo, notifyWarn, notify };
