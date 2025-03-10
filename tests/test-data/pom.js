import { repeatPassword } from "./registration-data";

export class OpenRegisterPage {
    constructor(page, url) {
        this._page = page;
        this._url = url;
        this._registerButton = page.locator('button', {hasText : "Sign up"});
  }
  async openPage() {
    await this._page.goto(this._url);
    await this._registerButton.click();

  }
}

export class Registration {
    constructor(page) {
        this.nameInput = page.locator('#signupName');
        this.lastNameInput = page.locator('#signupLastName');
        this.emailInput = page.locator('#signupEmail');
        this.passwordInput = page.locator('#signupPassword');
        this.repeatPasswordInput = page.locator('#signupRepeatPassword');
        this.registerButton = page.locator('button', {hasText : "Sign up"});
    }
    async registration(name, lastName, email, password, repeatPassword) {
        await this.nameInput.fill(name);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.repeatPasswordInput.fill(repeatPassword);
    }
}

