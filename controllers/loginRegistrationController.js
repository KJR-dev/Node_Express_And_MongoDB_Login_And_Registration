import userLoginModel from "../models/userLoginModel.js";
import bcrypt from "bcrypt";

class loginRegistrationController {
  //login page for starting view
  static loginForm = (req, res) => {
    res.render("login");
  };

  //Verifying login and password
  static verifyUserLogin = async (req, res) => {
    try {
      const result = await userLoginModel.findOne({ email: req.body.email });
      if (result != null) {
        if (
          result.email === req.body.email &&
          await bcrypt.compare(req.body.password,result.password)
        ) {
          res.send(`<h1>Welcome ${result.name}</h1>`);
        } else {
          res.send("<h1>You enter worng email and password</h1>");
        }
      } else {
        res.send("<h1>User not exist please register first</h1>");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Registration page for view
  static registrationForm = (req, res) => {
    res.render("registration");
  };

  //Register for new user
  static userRegistration = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const data = new userLoginModel({
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
      });
      const result = await userLoginModel.find({ email: req.body.email });
      console.log(data);
      if (result.length > 0 && result[0].email === email) {
        res.send("<h1>You already registrated</h1>");
      } else {
        console.log(await data.save());
        res.redirect("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default loginRegistrationController;
