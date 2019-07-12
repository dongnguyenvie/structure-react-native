import { showWarningBox } from "@actions/navigate";
const validError = (payload, err) => {
  const {result, statusDescription} = err.response.data;
  let msg = statusDescription;
  if (result && result.error && result.error.msg) msg = result.error.msg;
  showWarningBox(payload, msg)
}
export default validError;