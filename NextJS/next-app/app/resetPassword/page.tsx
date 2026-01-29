import ResetPasswordForm from "../components/ResetPasswordForm";

const ResetPassword = async () => {
  return (
    <div className="flex justify-center">
      <div className="bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
