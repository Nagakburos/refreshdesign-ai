import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email já cadastrado!"],
    required: [true, "O uso do Email é Necessário"],
  },
  username: {
    type: String,
    required: [true, "O Nome de Usuario é Necessário"],
    match: [
      /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Nome de usuário inválido, deve conter de 4 a 20 letras alfanuméricas e ser exclusivo!",
    ],
  },
  image: {
    type: String,
  },
  credits: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} não é um valor inteiro",
    },
  },
  role: {
    type: String,
    required: true,
    default: "customer",
  },
});

const User = models.User || model("User", UserSchema);

export default User;
