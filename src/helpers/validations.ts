export class Validate {
  str: string;
  constructor(str: string) {
    this.str = str;
  }
  fullName(): string | true {
    const fullName: string = this.str;
    if (!fullName) return "Full name cannot be empty";
    if (fullName.length < 5) {
      return "Full name must have at least (5) chars";
    }
    if (!/[a-zA-Z]/g.test(fullName)) {
      return "Full name must contain some letter(s)";
    }
    if (/\d/.test(fullName[0])) {
      return "Full name cannot start with number";
    }
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(fullName)) {
      return "Full name cannot contain special character";
    }
    if (fullName.split(" ").length < 2) {
      return "Two names required";
    }
    return true;
  }
  email(): string | true {
    const email: string = this.str;
    if (!email) return "Email cannot be empty";
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return "Email is invalid";
    }
    return true;
  }
  message(): string | true {
    const message: string = this.str;
    if (!message) return "Message cannot be empty";
    if (message.split(" ").length < 5) {
      return "Invalid message, you can't send less than 5 words";
    }
    return true;
  }
}
