import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/footer";
import { FormForgotPassword } from "../components/formForgotPassword";
import { useState } from "react";

export function ForgotPassword(){
  const changePasswordUrl = `http://localhost:4000/users/${id}/change-password`;
  const navigation = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [erro, setErro] = useState("");

  const changePassword = () => {
    fetch(changePasswordUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: newPassword}),
      })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                alert("Email não consta na base de dados!")
            }
        })
        .then((data) => {
            setId(data.message);
            navigation(`/${data.message}/forgot-password`);

        })
        .catch((error) => {
            setErro(error.message);
        });
};
    return(
    <div>
      <Header />
        <FormForgotPassword />
      <Footer />
    </div>
    );
}